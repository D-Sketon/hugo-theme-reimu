/**
 * 段落锚点功能
 *
 * 支持两种锚点注入方式：
 *
 * 1. 显式锚点（需 params.yml 中 anchor.explicit = true）：
 *    用户在 Markdown 中使用 {marker}xxx} 语法（如 {#anchor-ref1}），
 *    将锚点 id 绑定到任意块级元素（<p>、<li>、<blockquote> 等）。
 *    例如：- [参考文献1](url) {#anchor-ref1}
 *    渲染后：<li id="anchor-ref1"><a href="url">参考文献1</a>（+锚点图标）</li>
 *
 * 2. 自动锚点（需 params.yml 中 anchor.auto = true）：
 *    对于文章中的直接子段落（.article-entry > p），
 *    若未手动指定锚点，则从段落文本内容自动生成 id，
 *    格式为将文本转为小写、中文/非字母数字字符替换为连字符、
 *    截断至 anchor.auto_length 指定的长度（默认 60）。
 *    例如：「Hello World！你好」 → id="hello-world"
 *
 * 3. URL Hash 滚动：页面加载时检测 URL 中的 hash，
 *    若存在对应 id 的元素则平滑滚动到视口中央。
 */

(() => {
  // 从主题配置中读取锚点相关参数
  // anchor.explicit.enable  - 是否启用显式锚点语法，默认 false
  // anchor.explicit.marker  - 锚点占位符前缀，默认 "{#anchor-"
  //                         完整模式 = marker + id + "}"
  //                         例如 marker = "{#anchor-" → 匹配 "{#anchor-ref1}"
  // anchor.auto.enable      - 是否启用自动锚点，默认 false
  // anchor.auto.length      - 自动锚点 id 最大长度，默认 60
  const anchorConfig = (window as unknown as { siteConfig: { anchor?: {
    explicit?: { enable?: boolean; marker?: string };
    auto?: { enable?: boolean; length?: number };
  }}}).siteConfig?.anchor ?? {};
  const enableExplicit = anchorConfig.explicit?.enable ?? false;
  const enableAuto = anchorConfig.auto?.enable ?? false;
  const autoLength = Math.max(1, Math.min(anchorConfig.auto?.length ?? 60, 200));
  const marker = anchorConfig.explicit?.marker ?? "{#anchor-";

  // 构造完整的锚点正则表达式
  // 匹配 {marker-xxx}，如 marker = "{#anchor-" → 匹配 "{#anchor-ref1}"
  // 捕获组 [1] 为锚点 id（xxx 部分，不含大括号）
  const anchorPattern = new RegExp(
    marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^}]+)\\}",
    "g"
  );

  const articleEntry = _$(".article-entry");
  if (!articleEntry) return;

  // 支持显式锚点语法的块级元素类型列表
  // 覆盖 Markdown 渲染后常见的块级容器：
  //   p        - 段落
  //   li       - 列表项（用于参考文献、引用列表等）
  //   dd/dt    - 定义列表项
  //   td/th    - 表格单元格
  //   blockquote - 引用块
  //   details  - 可折叠 details 元素
  //   figure   - 图片/代码块等 figure 容器
  //   figcaption - figure 的标题
  const blockSelectors = [
    "p", "li", "dd", "dt", "td", "th",
    "blockquote", "details", "figure", "figcaption",
  ];

  // ---------------------------------------------------------------
  // 第 1 部分：处理显式锚点语法（仅在 anchor.explicit = true 时启用）
  //
  // 遍历所有目标块级元素，检测其中是否包含 {marker}xxx} 文本。
  // 若存在：注入 id、添加锚点图标、移除文本占位符。
  // ---------------------------------------------------------------
  if (enableExplicit) {
    blockSelectors.forEach((selector) => {
      articleEntry.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        // 限定在 .article-entry 内，避免误匹配页眉、页脚、导航中的元素
        if (!el.closest(".article-entry") || el.closest("header, footer, nav")) return;

        const html = el.innerHTML;
        let match: RegExpExecArray | null;
        // 重置正则状态，避免 lastIndex 残留导致匹配遗漏
        anchorPattern.lastIndex = 0;

        // 遍历所有匹配的 {marker}xxx}（一个元素中可能出现多个）
        while ((match = anchorPattern.exec(html)) !== null) {
          const anchorId = match[1].trim();
          if (!anchorId) continue; // 忽略空 id

          // 若元素尚未有 id，则注入 id="anchor-{xxx}"
          // 若已有 id（如手动指定或前面已注入），保留原 id 不覆盖
          if (!el.id) {
            el.id = `anchor-${anchorId}`;
          }

          // 追加锚点图标，仅在尚无锚点图标时添加
          // （同一元素内多个 {marker}xxx} 只加一个图标）
          if (!el.querySelector(".paragraph-anchor")) {
            const anchor = document.createElement("a");
            anchor.className = "paragraph-anchor";
            anchor.href = `#${el.id}`;
            anchor.setAttribute("aria-label", "anchor");
            el.appendChild(anchor);
          }
        }

        // 将所有 {marker}xxx} 文本占位符从 DOM 中移除，
        // 不影响元素内其他内容的渲染（如链接、图片等）
        el.innerHTML = el.innerHTML.replace(anchorPattern, "");
      });
    });
  }

  // ---------------------------------------------------------------
  // 第 2 部分：为直接子段落自动生成 id + 锚点图标
  // （仅在 anchor.auto = true 时启用）
  //
  // 仅处理 .article-entry 的直接子 <p> 元素（:scope > p），
  // 且该段落此前未被显式锚点注入过 id。
  // id 由段落文本内容派生：全小写、特殊字符替换、长度截断。
  // ---------------------------------------------------------------
  if (enableAuto) {
    const paragraphs = Array.from(
      articleEntry.querySelectorAll(":scope > p"),
    ) as HTMLParagraphElement[];

    paragraphs.forEach((p) => {
      // 已有 id（手动指定或步骤 1 已注入）则跳过
      if (p.id) return;

      // 若段落文本本身包含 {marker}xxx}，说明这是纯标记段落，跳过自动生成
      const html = p.innerHTML;
      anchorPattern.lastIndex = 0;
      if (anchorPattern.test(html)) return;

      const text = p.textContent?.trim() ?? "";
      if (!text) return; // 空段落不生成锚点

      // 从段落文本派生 id：
      // 1. 转小写
      // 2. 所有非字母数字、中文字符替换为连字符 -
      // 3. 去除首尾连字符
      // 4. 截断至 autoLength 字符（防止超长 id）
      // 例如：「Hello World！你好」 → "hello-world"
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, autoLength);

      if (!id) return;

      p.id = id;

      // 追加锚点图标，与步骤 1 相同的逻辑
      const anchor = document.createElement("a");
      anchor.className = "paragraph-anchor";
      anchor.href = `#${id}`;
      anchor.setAttribute("aria-label", "anchor");
      p.appendChild(anchor);
    });
  }

  // ---------------------------------------------------------------
  // 第 3 部分：页面加载时平滑滚动到 URL hash 对应元素
  //
  // 读取页面加载时的 URL hash（如 #anchor-ref1），
  // 若存在对应 id 的元素则使用 smooth 行为滚动至视口中央。
  // decodeURIComponent 处理含中文或特殊字符的 hash。
  // ---------------------------------------------------------------
  const hash = window.location.hash;
  if (hash) {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      // requestAnimationFrame 确保 DOM 完全就绪后再执行滚动
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }
})();
