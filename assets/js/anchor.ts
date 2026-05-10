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
 */

(() => {
  // 从主题配置中读取锚点相关参数
  // anchor.explicit.enable  - 是否启用显式锚点语法，默认 false
  // anchor.explicit.marker  - 锚点占位符前缀，默认 "{#anchor-"
  //                         完整模式 = marker + id + "}"
  //                         例如 marker = "{#anchor-" → 匹配 "{#anchor-ref1}"
  // anchor.explicit.prefix  - 自动锚点 id 前缀，默认 "anchor-"
  //                         仅在显式锚点时使用，auto 锚点不受此影响
  // anchor.auto.enable      - 是否启用自动锚点，默认 false
  // anchor.auto.length      - 自动锚点 id 最大长度，默认 60
  const anchorConfig = window.siteConfig?.anchor ?? {};
  const enableExplicit = anchorConfig.explicit?.enable ?? false;
  const enableAuto = anchorConfig.auto?.enable ?? false;
  const autoLength = Math.max(1, Math.min(anchorConfig.auto?.length ?? 60, 200));
  const marker = anchorConfig.explicit?.marker ?? "{#anchor-";
  const explicitPrefix = anchorConfig.explicit?.prefix ?? "anchor-";

  // 构造完整的锚点正则表达式
  // 匹配 {marker-xxx}，如 marker = "{#anchor-" → 匹配 "{#anchor-ref1}"
  // 捕获组 [1] 为锚点 id（xxx 部分，不含大括号）
  const anchorPattern = new RegExp(
    marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^}]+)\\}",
    "g"
  );

  const collectTextNodes = (el: HTMLElement) => {
    const walker = document.createTreeWalker(
      el,
      NodeFilter.SHOW_TEXT,
      null,
    );
    const textNodes: Text[] = [];
    let textNode: Text | null;
    while ((textNode = walker.nextNode() as Text | null)) {
      textNodes.push(textNode);
    }
    return textNodes;
  };

  const extractExplicitAnchorIds = (textNodes: Text[]) => {
    const anchorIds: string[] = [];

    for (const node of textNodes) {
      const text = node.textContent ?? "";
      anchorPattern.lastIndex = 0;

      let match: RegExpExecArray | null;
      while ((match = anchorPattern.exec(text)) !== null) {
        const anchorId = match[1].trim();
        if (anchorId) {
          anchorIds.push(anchorId);
        }
      }
    }

    anchorPattern.lastIndex = 0;
    return anchorIds;
  };

  const stripExplicitAnchorMarkers = (textNodes: Text[]) => {
    for (const node of textNodes) {
      const original = node.textContent ?? "";
      const replaced = original.replace(anchorPattern, "");
      if (replaced !== original) {
        node.textContent = replaced;
      }
      anchorPattern.lastIndex = 0;
    }
  };

  // ---------------------------------------------------------------
  // 定位文章正文容器（修复 #1：防止锚点注入到摘要/blockquote 等非正文容器）
  //
  // 优先查找带 itemprop="articleBody" 的 .e-content.article-entry
  //（summary/blockquote 模式中正文有此属性，摘要没有）。
  // ---------------------------------------------------------------
  const articleEntry = document.querySelector('.e-content.article-entry[itemprop="articleBody"]');
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
        // 限定在 articleEntry 内，避免误匹配页眉、页脚、导航中的元素
        if (!el.closest(".article-entry") || el.closest("header, footer, nav")) return;

        const textNodes = collectTextNodes(el);
        const explicitAnchorIds = extractExplicitAnchorIds(textNodes);

        if (!explicitAnchorIds.length) return;

        let hasExplicitAnchor = false;

        for (const anchorId of explicitAnchorIds) {
          hasExplicitAnchor = true;
          const targetId = `${explicitPrefix}${anchorId}`;

          // 若元素已有 id，进行冲突检测
          if (el.id && el.id !== targetId) {
            console.warn(
              `[anchor] id="${el.id}" conflicts with explicit marker "${marker}${anchorId}}" ` +
              `→ icon will link to "${el.id}", not "${targetId}"`,
            );
            continue; // 以原有 id 为准，不覆盖
          }

          // 注入 id（已有 id === targetId 时跳过）
          if (!el.id) {
            el.id = targetId;
          }
        }

        // 仅在存在显式锚点时才添加图标（同一元素多个 marker 只加一个）
        if (hasExplicitAnchor && !el.querySelector(".paragraph-anchor")) {
          const anchor = document.createElement("a");
          anchor.className = "paragraph-anchor";
          anchor.href = `#${el.id}`;
          anchor.setAttribute("aria-label", "anchor");
          el.appendChild(anchor);
        }

        // ---------------------------------------------------------------
        // 修复 #2：使用 TextNode 遍历替代无条件 innerHTML replace，
        // 避免 HTML 重解析导致子节点状态（details open、事件监听器）丢失。
        // ---------------------------------------------------------------
        stripExplicitAnchorMarkers(textNodes);
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
      const textNodes = collectTextNodes(p);
      if (extractExplicitAnchorIds(textNodes).length) return;

      const text = p.textContent?.trim() ?? "";
      if (!text) return; // 空段落不生成锚点

      // 从段落文本派生 id：
      // 1. 转小写
      // 2. 所有非字母数字、中文字符替换为连字符 -
      // 3. 去除首尾连字符
      // 4. 截断至 autoLength 字符（防止超长 id）
      // 5. 确保 id 唯一（若重复，添加数字后缀）
      // 例如：「Hello World！你好」 → "hello-world"
      let id = text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .slice(0, autoLength)
        .replace(/^-+|-+$/g, "");

      if (!id) return;

      // 去重：若 id 已存在，添加数字后缀直到唯一
      let uniqueId = id;
      let counter = 1;
      while (document.getElementById(uniqueId)) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      id = uniqueId;

      p.id = id;

      // 追加锚点图标，与步骤 1 相同的逻辑
      const anchor = document.createElement("a");
      anchor.className = "paragraph-anchor";
      anchor.href = `#${id}`;
      anchor.setAttribute("aria-label", "anchor");
      p.appendChild(anchor);
    });
  }
})();
