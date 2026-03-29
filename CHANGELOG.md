## 0.15.4

**2026-03-30**

### 修复

- 修复 fontawesome css加载失败

---

### Fixes

- Fixed fontawesome css loading failure

## 0.15.3

**2026-03-29**

### 特性

- 增强 Giscus 主题能力：新增 `giscus.theme.light` 与 `giscus.theme.dark`，并内置 Reimu 风格 light/dark 主题作为兜底。由于 Giscus 基于 iframe 渲染，无法继承站点全局样式，内置主题用于尽可能保持与全站一致（鼠标样式、字体、静态主题 token；`material_theme` 等动态 token 暂不支持）。
  ```yaml
  giscus:
    enable: true
    repo: owner/repo
    repoId:
    category:
    categoryId:
    theme:
      light: https://example.com/giscus-light.css
      dark: https://example.com/giscus-dark.css
  ```
  - 自定义主题为 URL 时，会校验是否允许 `https://giscus.app` 跨域访问
  - 校验失败时自动回退到内置 `light` / `dark` 主题，避免评论样式失效
  - 注意：本地 `hugo server`（HTTP 且通常无 CORS 头）与 `github.io` 默认静态资源场景通常无法直接通过校验，建议使用可配置 CORS 的资源域名（例如 jsDelivr 代理）
- 侧边栏社交链接渲染兼容两种 `social` 数据结构（对象与数组）
  ```yaml
  # 写法 1：对象（兼容旧格式）
  social:
    github: https://github.com/yourname
    weixin:
    qq:
    tiktok: https://www.tiktok.com/@yourname

  # 写法 2：数组（新支持）
  social:
    - name: github
      url: https://github.com/yourname
    - name: tiktok
      url: https://www.tiktok.com/@yourname
  ```
- 新增 TikTok 社交图标支持，并补充 Weixin/QQ 在社交与三角徽章场景下的图标渲染支持

---

### Features

- Enhanced Giscus theming: added `giscus.theme.light` and `giscus.theme.dark`, with built-in Reimu-style light/dark fallback themes. Since Giscus is rendered in an iframe and cannot inherit global site styles, the built-in themes keep behavior as consistent as possible with the site (cursor style, fonts, and static theme tokens; dynamic tokens like `material_theme` are not supported yet).
  ```yaml
  giscus:
    enable: true
    repo: owner/repo
    repoId:
    category:
    categoryId:
    theme:
      light: https://example.com/giscus-light.css
      dark: https://example.com/giscus-dark.css
  ```
  - For URL-based custom themes, it verifies whether CORS allows `https://giscus.app`
  - If validation fails, it automatically falls back to built-in `light` / `dark` themes
  - Note: local `hugo server` (HTTP, usually without CORS headers) and default `github.io` static hosting commonly fail this check; use a CORS-configured asset host (e.g., jsDelivr proxy)
- Updated sidebar social rendering to support both `social` data structures (map and array)
  ```yaml
  # Style 1: map (legacy-compatible)
  social:
    github: https://github.com/yourname
    weixin:
    qq:
    tiktok: https://www.tiktok.com/@yourname

  # Style 2: array (newly supported)
  social:
    - name: github
      url: https://github.com/yourname
    - name: tiktok
      url: https://www.tiktok.com/@yourname
  ```
- Added TikTok social icon support and improved Weixin/QQ icon rendering in social and triangle badge scenarios

## 0.15.2

**2026-03-06**

### 修复

- 修复语言选择下拉 `aria-selected` 属性拼写
- 修复 `article:tag` meta 输出格式，使用逗号分隔标签

### 特性

- 支持区分文章背景图与卡片封面：front-matter 新增 `banner` 用于文章头图，`cover` 用于卡片封面/OG 图片，兼容旧格式
- 增强 Open Graph / Twitter meta：使用绝对链接，并支持通过 `open_graph.options.twitter_image` 覆盖默认图片

### 重构

- 新增 CDN 辅助 partial，统一 JS/CSS 引用方式，减少重复逻辑

---

### Fixes

- Fix language selector `aria-selected` attribute
- Fix `article:tag` meta formatting with comma-delimited tags

### Features

- Separate article banner and card cover: add `banner` front-matter for article headers, keep `cover` for card/OG images, with backward compatibility
- Improve Open Graph/Twitter meta tags: use absolute URLs and allow `open_graph.options.twitter_image` to override the default image

### Refactor

- Add CDN helper partials to unify JS/CSS includes and reduce duplication

## 0.15.1

**2026-02-23**

### 特性

- 新增副标题打字效果配置，支持动态打字动画和静态文本两种模式，同时兼容旧格式
  ```yaml
  subtitle:
    typing:
      enable: false
      strings:
        # - Sentence 1
        # - Sentence 2
        # - Sentence 3
        # - Sentence 4
      typeSpeed: 100              # 打字速度（毫秒/字符） 
      backSpeed: 50               # 删除速度（毫秒/字符）
      backDelay: 2000             # 打完一句话后，等待时间
      startDelay: 300             # 页面加载后，等待时间
      loop: true                  # 是否循环播放
      shuffle: true              # 是否随机输出句子
      showCursor: true            # 是否显示闪烁的字符
      cursorChar: "|"             # 字符
      smartBackspace: false       # 智能退格，只删除不同的部分
    text: "少女祈祷中..."        # 当 typing.enable = false 时使用
  ```

---

### Features

- Added subtitle typing effect configuration, supporting both dynamic typing animation and static text modes, while maintaining compatibility with the old format
  ```yaml
  subtitle:
    typing:
      enable: false
      strings:
        # - Sentence 1
        # - Sentence 2
        # - Sentence 3
        # - Sentence 4
      typeSpeed: 100              # Typing speed (ms/character) 
      backSpeed: 50               # Deletion speed (ms/character)
      backDelay: 2000             # Wait time after completing a sentence
      startDelay: 300             # Wait time after page load
      loop: true                  # Whether to loop playback
      shuffle: true              # Whether to randomly output sentences
      showCursor: true            # Whether to show the blinking cursor
      cursorChar: "|"             # Cursor character
      smartBackspace: false       # Smart backspace, only delete different parts
    text: "Loading..."           # Used when typing.enable = false
  ```

## 0.15.0

**2026-01-18**

### 特性

- 支持 Utterances 评论系统
  ```yaml
  utterances:
    enable: true
    repo: "your-github-username/your-repo" # 用于存储评论的 GitHub 仓库
    issue_term: "title" # 用于匹配文章的 Issue 生成方式
    theme: "auto"
  ```
- 更新默认 banner 图像
- frontMatter 中的 `outdated` 字段支持传递 `false` 以关闭过期提示

---

### Features

- Added support for the Utterances comment system
  ```yaml
  utterances:
    enable: true
    repo: "your-github-username/your-repo" # GitHub repository for storing comments
    issue_term: "title" # Method for matching articles to generate issues
    theme: "auto"
  ```
- Updated the default banner image
- The `outdated` field in frontMatter now supports passing `false` to disable the outdated notice

## 0.14.2

**2026-01-01**

### 特性

- 新增归档页和分类标签页的分页支持，可通过 `paginate` 配置控制
  ```yaml
  paginate:
    archive: # 归档页和分类标签页每页文章数量
    post: # 首页和其他列表页每页文章数量
  ```
- 新增 `uppercase_capsule` 配置用于控制分类和标签胶囊是否转换为大写，默认开启
  ```yaml
  uppercase_capsule: true # true | false
  ```
- `banner_srcset` 的 `src` 字段现在支持数组，可以按顺序尝试加载多个图片格式（如优先加载 AVIF，失败后回退到 WebP）
  ```yaml
  banner_srcset:
    enable: true
    srcset:
      - src: 
        - "images/banner.avif"  # 优先尝试加载 AVIF
        - "images/banner.webp"  # 失败后加载 WebP
        media: "(min-width: 800px)"
  ```
- `footer`、`sponsor` 的 `icon.url` 配置现在支持传递 `false` 来隐藏图标
  ```yaml
  footer:
    icon:
      url: false  # 不显示图标
  ```
- `menu` 中每个菜单项的 `icon` 配置现在支持传递 `false` 来隐藏图标
  ```yaml
  menu:
    - name: home
      url: /
      icon: false  # 不显示图标
  ```
- `sidebar` 新增 `menu` 配置用于控制是否显示侧边栏菜单按钮（移动端上将被忽略）
  ```yaml
  sidebar:
    menu: true  # true | false
  ```
- `sidebar.article` 新增 `show_common` 配置用于控制文章页是否显示通用侧边栏（移动端上将被忽略）
  ```yaml
  sidebar:
    article:
      show_common: true  # true | false
  ```
- 文章的分类标签现在显示在文章底部，与标签一起展示

### 重构

- `sidebar` 配置结构发生变化，旧配置仍然兼容，但建议迁移到新配置
  ```yaml
  # 旧配置（仍然支持）
  sidebar: right # left | right | false
  
  # 新配置（推荐）
  sidebar:
    position: right # left | right | false
    menu: true  # 是否显示侧边栏菜单按钮，在移动端上被忽略
    article:
      show_common: true # 是否在文章页显示通用侧边栏，在移动端上被忽略
  ```

### 性能

- 优化 shortcode 的 CSS 加载方式，现在使用异步加载减少阻塞，提升页面加载性能
- `firework`、`aplayer` 和 `meting` 的 JavaScript 现在使用异步加载，减少对页面渲染的阻塞

### 杂项

- 更新 mouse-firework 至 v0.2.0

---


### Features

- Added pagination support for archive pages and category/tag pages, configurable via `paginate`
  ```yaml
  paginate:
    archive: # Number of posts per page for archive and category/tag pages
    post: # Number of posts per page for homepage and other list pages
  ```
- Added `uppercase_capsule` configuration to control whether category and tag capsules are converted to uppercase, enabled by default
  ```yaml
  uppercase_capsule: true # true | false
  ```
- The `src` field in `banner_srcset` now supports arrays, allowing multiple image formats to be loaded in order (e.g., prioritize AVIF and fall back to WebP on failure)
  ```yaml
  banner_srcset:
    enable: true
    srcset:
      - src: 
        - "images/banner.avif"  # Try loading AVIF first
        - "images/banner.webp"  # Load WebP on failure
        media: "(min-width: 800px)"
  ```
- The `icon.url` configuration in `footer` and `sponsor` now supports passing `false` to hide the icon
  ```yaml
  footer:
    icon:
      url: false  # Hide icon
  ```
- The `icon` configuration for each menu item in `menu` now supports passing `false` to hide the icon
  ```yaml
  menu:
    - name: home
      url: /
      icon: false  # Hide icon
  ```
- Added `menu` configuration in `sidebar` to control whether to display the sidebar menu button (ignored on mobile)
  ```yaml
  sidebar:
    menu: true  # true | false
  ```
- Added `show_common` configuration in `sidebar.article` to control whether to display the common sidebar on article pages (ignored on mobile)
  ```yaml
  sidebar:
    article:
      show_common: true  # true | false
  ```
- Article categories are now displayed at the bottom of the article, alongside tags

### Refactoring

- The `sidebar` configuration structure has changed. Old configurations are still compatible, but migration to the new configuration is recommended
  ```yaml
  # Old configuration (still supported)
  sidebar: right # left | right | false
  
  # New configuration (recommended)
  sidebar:
    position: right # left | right | false
    menu: true  # Whether to display sidebar menu button, ignored on mobile
    article:
      show_common: true # Whether to display common sidebar on article pages, ignored on mobile
  ```

### Performance

- Optimized CSS loading for shortcodes, now using asynchronous loading to reduce blocking and improve page load performance
- JavaScript for `firework`, `aplayer`, and `meting` now uses asynchronous loading to reduce blocking of page rendering

### Miscellaneous

- Updated mouse-firework to v0.2.0

## 0.14.1

**2025-11-29**

### 特性

- 随机头图现在使用伪随机算法，确保每次生成页面时都能展示不同的头图
- 新增 Grid 短代码，支持将内容以网格的形式展示出来，支持响应式布局。
  ```markdown
  {{< grid width=? col=? >}}
  <!-- cell -->
  内容1
  <!-- cell -->
  内容2
  <!-- cell -->
  内容3
  {{< /grid >}}
  ```
    - width：可选参数，设置最小列宽，如 `300` 表示最小列宽为 300px，默认值为 `240`
    - col：可选参数，设置固定列数，如 `3` 表示固定 3 列布局，默认值为自适应列数
    - 使用 `<!-- cell -->` 分隔每个网格单元，每个单元的内容会被独立渲染
- 新增 Details 短代码，支持在文章中创建折叠面板
  ```markdown
  {{< details summary="?" >}}
  内容
  {{< /details >}}
  ```
    - summary：可选参数，设置折叠面板的标题

---

### Features

- The random header image now uses a pseudo-random algorithm to ensure that different header images are displayed each time the page is generated.
- Added the Grid shortcode, which supports displaying content in a grid layout, supporting responsive design.
  ```markdown
  {{< grid width=? col=? >}}
  <!-- cell -->
  Content 1
  <!-- cell -->
  Content 2
  <!-- cell -->
  Content 3
  {{< /grid >}}
  ```
    - width: Optional parameter, sets the minimum column width, e.g., `300` means a minimum column width of 300px. Default is `240`
    - col: Optional parameter, sets a fixed number of columns, e.g., `3` means a fixed 3-column layout. Default is auto column count
    - Use `<!-- cell -->` to separate each grid cell, and each cell's content will be rendered independently
- Added the Details shortcode, which supports creating foldable panels in the article.
  ```markdown
  {{< details summary="?" >}}
  content
  {{< /details >}}
  ```
    - summary: Optional parameter, set the title of the foldable panel

## 0.14.0

**2025-11-23**

### 修复

- 修复移动端下超长文本无法换行的问题
- 修复 postLinkCard 短代码中的错误转义逻辑
- 修复文章 nav 封面在使用本地图片时可能的404问题

### 特性

- 新增 [Disqus](https://disqus.com/) 评论系统支持
  ```yml
  disqus:
    enable: true
    shortname: "your shortname"
    count: true # 是否启用评论数量统计
  ```
- 新增 Tabs 短代码，从 next, volantis, stellar 主题借鉴而来，支持在文章中创建标签页切换效果。
  ```markdown
  {{< tabs [activeTab] ["center"] >}}
  <!-- tabName -->
  Tab content
  <!-- tabName -->
  Tab content
  {{< /tabs >}}
  ```
  - activeTab：可选参数，指定默认激活的标签页下标，从 1 开始计数，默认为 1
  - "center"：可选参数，指定标签页标题居中显示，默认左对齐
  - tabName：每个标签页的标题，必须用 `<!-- tabName -->` 包裹，支持使用 `@` + 图标十六进制代码 展示图标，例：
    - 标题 `<!-- 标题 -->`
    - 图标 `<!-- @e60c -->`
    - 图标+标题 `<!-- 标题@e60c -->`
- 新增 Gallery 短代码，将多张图片以照片墙的形式展示出来，支持自动排列和响应式布局。
  ```markdown
  {{< gallery >}}
  ![alt text](image_url1)
  ![alt text](image_url2)
  ...
  {{</gallery>}}
  ```
- 新增 Link 短代码，用于替代 externalLinkCard 和 postLinkCard，支持内链和外链。
  ```markdown
  {{< link title="?" link/path="?" cover="?" escape="?" >}}
  ```
  - title：链接卡片的标题，内链时可省略，自动使用文章标题
  - link/path：链接的 URL 地址，为保证兼容性，`link` 和 `path` 均可使用，二者效果相同
  - cover：卡片展示的封面，如果设置为 `auto` 则自动使用博客的 `banner` 或缺省封面
  - escape：文章标题是否被转义，取值`true | false`，默认为 `true`
- 优化代码块的样式，现在使用了 Github Theme 的配色方案
- 优化表格的样式，提升响应式和滚动体验
- algolia 搜索兼容 DocSearch 格式

---

### Fixes

- Fixed an issue where extra-long text could not wrap on mobile devices
- Fixed incorrect escaping logic in the postLinkCard shortcode
- Fixed possible 404 errors when using local images for article nav covers

### Features

- Added support for the [Disqus](https://disqus.com/) comment system
  ```yml
  disqus:
    enable: true
    shortname: "your shortname"
    count: true # Enable comment count display
  ```
- Added the Tabs shortcode, inspired by the next, volantis, and stellar themes, which supports creating tabbed content switches within articles.
  ```markdown
  {{< tabs [activeTab] ["center"] >}}
  <!-- tabName -->
  Tab content
  <!-- tabName -->
  Tab content
  {{< /tabs >}}
  ```
  - activeTab: Optional parameter, specifies the index of the default active tab (counting starts from 1). Default is 1.
  - "center": Optional parameter, specifies center alignment for tab titles. Default is left-aligned.
  - tabName: The title of each tab, must be wrapped in `<!-- tabName -->`. Supports displaying icons using `@` + the icon's hexadecimal code. Example:
    - Title: `<!-- Title -->`
    - Icon: `<!-- @e60c -->`
    - Icon + Title: `<!-- Title@e60c -->`
- Added the Gallery shortcode, which displays multiple images in a photo wall format, supporting automatic arrangement and responsive layout.
  ```markdown
  {{< gallery >}}
  ![alt text](image_url1)
  ![alt text](image_url2)
  ...
  {{</gallery>}}
  ```
- Added a new `Link` shortcode to replace `externalLinkCard` and `postLinkCard`, supporting both internal and external links.  
  ```markdown  
  {{< link title="?" link/path="?" cover="?" escape="?" >}}  
  ```  
  - **title**: The title of the link card. Can be omitted for internal links, where the article title will be used automatically.  
  - **link/path**: The URL of the link. For compatibility, both `link` and `path` can be used, and they have the same effect.  
  - **cover**: The cover image displayed on the card. If set to `auto`, the blog's `banner` or default cover will be used automatically.  
  - **escape**: Whether the article title should be escaped. Values: `true | false`. Default is `true`.
- Optimized the code block styling, now using the Github Theme color scheme.
- Optimize the styling of the table to enhance responsiveness and scrolling experience  
- Ensure Algolia search compatibility with the DocSearch format

## v0.13.4

**2025-11-01**

### 修复

- 修复 markdown 小标题中的超链接错误显示的问题

### 特性

- 新增 keywords meta 标签，用于提升 SEO 优化，可在 front-matter 中通过 `keywords` 字段自定义，支持字符串和数组两种形式：
  ```yaml
  ---
  keywords: keyword1, keyword2, keyword3 # 文章关键词，逗号分隔字符串形式
  keywords:
    - keyword1
    - keyword2
    - keyword3 # 文章关键词，数组形式
  ---
  ```
- 新增 `layout.max_width` 配置用于控制博客内容的最大宽度，默认值为 `1350px`
  ```yaml
  layout:
    max_width: 1350px # 博客内容最大宽度
  ```

---

### Fixes

- Fixed incorrect display of hyperlinks in Markdown subheadings.

### Features

- Added `keywords` meta tag to improve SEO optimization. Customize via the `keywords` field in front-matter, supporting both string and array formats:
  ```yaml
  ---
  keywords: keyword1, keyword2, keyword3 # Article keywords as a comma-separated string
  keywords:
    - keyword1
    - keyword2
    - keyword3 # Article keywords as an array
  ---
  ```
- Added `layout.max_width` configuration to control the maximum width of blog content. The default value is `1350px`:
  ```yaml
  layout:
    max_width: 1350px # Maximum width of blog content
  ```

## v0.13.3

**2025-10-26**

### 修复

- 修复 pjax 模式下 valine 评论系统多次加载的问题

### 特性

- 优化样式
  - 优化多语言下拉，分享卡片和赞助的动画效果
  - 移除侧边栏的 hover 放大效果
  - 优化移动端下归档页的样式
  - 优化移动端下的置顶按钮样式，现在移动端下将始终展示向上箭头图标
- `firework` 和 `player` 新增 `disable_on_mobile` 配置用于控制是否在移动端禁用，默认关闭
  ```yaml
  firework:
    disable_on_mobile: false # true | false
  player:
    disable_on_mobile: false # true | false
  ```

---

### Fixes

- Fixed the issue of Valine comment system loading multiple times in pjax mode.

### Features

- Optimized styles
  - Improved animation effects for the language dropdown, share cards, and sponsorship.
  - Removed the hover zoom effect on the sidebar.
  - Optimized the archive page layout on mobile devices.
  - Improved the back-to-top button style on mobile devices; it will now always display an upward arrow icon.
- Added `disable_on_mobile` configuration for `firework` and `player` to control whether they are disabled on mobile devices. Default is `false`.
  ```yaml
  firework:
    disable_on_mobile: false # true | false
  player:
    disable_on_mobile: false # true | false
  ```

## v0.13.2

**2025-10-19**

### 修复

- 修复 valine/waline 评论计数器无法正确展示的问题

### 特性

- 渐进支持了 `text-autospace`，现在 Chrome 140+ 的浏览器会自动在 CJK 和 EN 之间添加间距，无需手动配置
- 优化分享微信弹出卡片，现在点击分享图标以外的区域会自动关闭卡片
- 优化顶部 nav 菜单点击热区，现在点击 icon 也能触发菜单跳转
- Front-matter 中新增 `author` 字段用于标记文章作者 (用于分享卡片和文章版权)，其优先级最高
  ```yaml
  ---
  author: D-Sketon # 文章作者
  ---
  ```
- 新增 `triangle_badge` 配置用于在右上角展示三角徽章，支持自定义链接和图标
  ```yaml
  triangle_badge:
    enable: false # true | false
    icon: github # 与 social 配置里的 icon 相同
    link: 
  ```

### 杂项

- 更新 mermaid 至 v11.12.0
- 更新 quicklink 至 v3.0.1
- 更新 katex 至 v0.16.24
- 更新 snapdom 至 v1.9.14
- 更新 fontawesome 至 v7.1.0

---

### Fixes

- Fixed the issue where Valine/Waline comment counters could not display correctly.

### Features

- Gradually added support for `text-autospace`. Browsers with Chrome 140+ will now automatically add spacing between CJK and Latin characters, eliminating the need for manual configuration.
- Optimized the WeChat share card popup. Clicking outside the share icon will now automatically close the card.
- Improved the clickable area of the top navigation menu. Clicking the icon will now also trigger menu navigation.
- Added an `author` field in the Front-matter to mark the article author (for share cards and article copyright), with the highest priority.
  ```yaml
  ---
  author: D-Sketon # Article author
  ---
  ```
- Added a `triangle_badge` configuration to display a triangular badge in the upper right corner, supporting custom links and icons.
  ```yaml
  triangle_badge:
    enable: false # true | false
    icon: github # Same as the icon in the social configuration
    link: 
  ```

### Miscellaneous

- Updated Mermaid to v11.12.0
- Updated Quicklink to v3.0.1
- Updated KaTeX to v0.16.24
- Updated Snapdom to v1.9.14
- Updated FontAwesome to v7.1.0

## v0.13.1

**2025-10-05**

### 修复

- 修复当博客页面高度加载发生抖动时，底部 nav 无法正确展示的问题

### 特性

- 优化过期提示的样式，现在其样式和 WARNING 块引用一致
- Front-matter 中新增 `outdated` 字段用于标记文章过期，其优先级最高，且无视全局配置
  ```yaml
  ---
  outdated: true # true | false
  ---
  ```
  当该字段为 `true` 时，文章顶部会显示过期提示

---

### Fixes

- Fixed an issue where the bottom navigation bar was not displayed correctly when the page height flickered during loading.

### Features

- Optimized the style of the outdated notice, which is now consistent with the WARNING blockquote style.
- Added an `outdated` field in the front-matter to mark an article as outdated. It has the highest priority and overrides the global configuration.
  ```yaml
  ---
  outdated: true # true | false
  ---
  ```
  When this field is `true`, an outdated notice will be displayed at the top of the article.

## v0.13.0

**2025-09-25**

### 修复

- 修复折叠代码块的复制按钮无法复制的问题
- 修复自动主题切换时 mermaid 首次展示主题不正确的问题

### 特性

- 新增 mermaid 的 `zoom` 配置，用于控制是否启用缩放，默认关闭
  ```yaml
  mermaid:
    zoom: false # true | false
  ```

### 重构

- 重构样式以提升一致性与美观度
  - 调整卡片、评论与容器的内外边距，优化留白
  - 改进小部件与侧边栏样式，优化对齐与间距
  - 统一圆角值，增强视觉一致性
  - 优化友链、页脚与页眉的响应式布局
  - 更新热力图样式，提升可读性与清晰度
  - 规范按钮与通知样式，统一交互与状态
  - 调整字体大小与行高，提升阅读体验
  - 优化移动端与桌面端滚动条样式
  - 优化代码块样式，提升可读性与一致性
  - 为标题添加淡入模糊动画
  - 优化移动端文章内边距，提升阅读体验
- 增强可访问性（a11y）
  - 为布局、导航与交互控件补充 aria-label
  - 为可能截断的内容补充 title 提示
  - 优化搜索弹窗的可访问性与交互，完善键盘导航与关闭逻辑

### 性能

- 精简 HTML，本人博客总体积大约减少了 8%
  - 移除链接不必要的 external 属性
  - 外置 pjax 相关 js 逻辑
  - 精简 after-footer 与 loader 逻辑
  - 按需动态生成评论系统配置，减少无效代码输出

---

### Fixes

- Fixed copy button in folded code blocks failing to copy content
- Fix incorrect theme display on first render of mermaid during automatic theme switching

### Features

- Added `zoom` configuration for mermaid to control whether zoom is enabled, defaults to false
  ```yaml
  mermaid:
    zoom: false # true | false
  ```

### Refactor

- Refactored styles to improve consistency and aesthetics
  - Adjusted padding and margins for cards, comments, and containers to optimize whitespace
  - Improved widget and sidebar styles for better alignment and spacing
  - Unified border-radius values for enhanced visual consistency
  - Optimized responsive layout for friend links, footer, and header
  - Updated heatmap styles for better readability and clarity
  - Standardized button and notification styles for consistent interaction and states
  - Adjusted font sizes and line heights to improve reading experience
  - Optimized scrollbar styles for mobile and desktop
  - Enhanced code block styles for better readability and consistency
  - Added fade-in blur animation for headings
  - Optimized article padding on mobile for improved reading experience
- Enhanced accessibility (a11y)
  - Added aria-labels for layout, navigation, and interactive controls
  - Added title hints for potentially truncated content
  - Improved accessibility and interaction of the search modal, enhancing keyboard navigation and close logic

### Performance

- Streamlined HTML, reducing total blog size by approximately 8%
  - Removed unnecessary external attributes from links
  - Externalized pjax-related JavaScript logic
  - Simplified after-footer and loader logic
  - Dynamically generated comment system configurations on-demand to reduce invalid code output

## v0.12.2

**2025-09-06**

### 修复

- 修复 v0.12.1 改变结构后 “开启播放器后移动端将强制展示 fixed 类型的播放器” 特性失效的问题
- RSS 中排除 shortcode 内容

### 特性

- 新增 `summary` 配置用于控制是否展示文章摘要，默认关闭。可选择 `subtitle` 或 `blockquote` 样式
  ```yaml
  summary:
    enable: false # true | false
    style: 'subtitle' # 'subtitle' or 'blockquote'
  ```

### 性能

- CSS 持续性优化

---

### Fixes

- Fixed the issue where the "when the player is enabled, the fixed type player will be forcibly displayed on the mobile end" feature in v0.12.1 was disabled
- Excluded shortcode content in RSS

### Features

- Added `summary` configuration to control whether to display the article summary, disabled by default. Can choose `subtitle` or `blockquote` style
  ```yaml
  summary:
    enable: false # true | false
    style: 'subtitle' # 'subtitle' or 'blockquote'
  ```

### Performance

- Continuous CSS optimization

## v0.12.1

**2025-08-24**

### 修复

- 修复热力图未来日期的处理逻辑，确保只统计过去的文章数据
- 修复热力图日期标签重叠的问题

### 特性

- 新增 `player.position` 配置用于控制播放器的位置，可选择在 sidebar 之前、之后或 widget 之后，默认在 sidebar 之后
  ```yaml
  player:
    position: before_sidebar # before_sidebar / after_sidebar / after_widget
  ```
- 新增 `show_update_time` 配置用于控制是否展示文章更新时间，默认关闭
  ```yaml
  show_update_time: true # true | false
  ```
- 新增 `moe_icp` 配置用于控制是否展示萌 ICP 备案信息，默认关闭
  ```yaml
  moe_icp:
    icpnumber: # 萌国ICP备案号
  ```
- 对于 Hugo v0.132.0 以下版本，新增 `alertBlockquote` shortcode 用于展示块引用，支持多种类型
  ```yaml
  {{< alertBlockquote type="?" >}}
  Your content here
  {{</alertBlockquote>}}
  ```
  - type：块引用的类型，可选参数为：`note`、`tip`、`important`、`warning`、`danger`
- 对于 Hugo v0.132.0 及以上版本 支持使用 Hugo Blockquote render hooks 展示 Alert 块引用
  ```markdown
  > [!NOTE]
  > Useful information that users should know, even when skimming content.
  ```
- 多语言增加对葡萄牙语（巴西）的支持
- 使用 snapdom 替代 html2image 生成截图

### 杂项

- 更新 mermaid 至 v11.10.1
- 更新 qrcode 至 v1.5.1
- 更新 dompurify 至 v3.2.6
- 更新 fontawesome 至 v7.0.0

---

### Fixes

- Fixed the issue where future dates were incorrectly processed in the heatmap, ensuring that only past article data is counted.
- Fixed the issue of overlapping date labels in the heatmap.

### Features

- Added `player.position` configuration to control the player's position, which can be placed before the sidebar, after the sidebar, or after the widget. Defaults to after the sidebar.
  ```yaml
  player:
    position: before_sidebar # before_sidebar / after_sidebar / after_widget
  ```
- Added `show_update_time` configuration to control whether to display the article update time. Disabled by default.
  ```yaml
  show_update_time: true # true | false
  ```
- Added `moe_icp` configuration to control whether to display Moe ICP filing information. Disabled by default.
  ```yaml
  moe_icp:
    icpnumber: # Moe ICP filing number
  ```
- For Hugo versions below v0.132.0, a new `alertBlockquote` shortcode has been added to display blockquotes, supporting multiple types  
  ```yaml  
  {{< alertBlockquote type="?" >}}  
  Your content here  
  {{</alertBlockquote>}}  
  ```  
  - type: specifies the type of blockquote. Available options: `note`, `tip`, `important`, `warning`, `danger`  
- For Hugo v0.132.0 and above, support for using Hugo Blockquote render hooks to display Alert blockquotes  
  ```markdown  
  > [!NOTE]  
  > Useful information that users should know, even when skimming content.  
  ```
- Added support for Portuguese (Brazil) in multilingual settings.
- Replaced html2image with snapdom for generating screenshots.

### Miscellaneous

- Updated mermaid to v11.10.1
- Updated qrcode to v1.5.1
- Updated dompurify to v3.2.6
- Updated fontawesome to v7.0.0

## v0.12.0

**2025-07-06**

### 修复

- 修复标签云权重计算逻辑，确保在没有文章时构建不报错
- 修复 giscus 多语言兜底逻辑

### 特性

- 统一 css 阴影样式，新增以下 token:
  - `--shadow-meta`
  - `--shadow-meta-hover`
  - `--shadow-card`
  - `--shadow-card-hover`
  - `--shadow-red-6-shadow`
- Algolia 使用 SHA1 哈希作为 objectID
- 侧边栏支持 tag 和 category 的页面跳转
- 实验性新增 `sort_order` 配置，用于控制分类、标签、归档和首页的排序方式，未来可能会有重大变化
  - 支持的排序方式：`default`、`date`、`date-reverse`、`weight`、`weight-reverse`
  - `default` 为 hugo 默认排序方式，详见 [Hugo 文档](https://gohugo.io/quick-reference/page-collections/#sort)
  - `date` 为按日期排序，`date-reverse` 为按日期倒序排序
  - `weight` 为按权重排序，`weight-reverse` 为按权重倒序排序
  - 默认情况下，`home` 使用 `default` 排序，`archive` 使用 `date-reverse` 排序，`taxonomy` 使用 `date-reverse` 排序
  - 可以通过 `categories_weight` 和 `tags_weight` 配置来控制分类页和标签页的文章权重
  - 可以通过 `weight` 配置来控制归档和首页的文章权重
  ```yaml
  sort_order:
    taxonomy:
      category: date-reverse # controlled by categories_weight
      tag: date-reverse # controlled by tags_weight
    archive: date-reverse # controlled by weight
    home: default # controlled by weight
  ```
- `heatMapCard` 热力图新增自定义 tooltip 内容，支持点击显示文章列表
- 新增 `tagRoulette` shortcode 用于展示标签轮盘，提供随机标签展示功能，点击按钮后会从预定义的标签池中随机抽取并展示一个标签。
  ```yaml
  {{< tagRoulette tags="?" icon="?" >}}
  ```
  - tags：可选参数，指定标签池，多个标签用英文逗号(,)分隔；未提供时默认使用几个示例标签，例如：tags="记忆衰退,表达欲丧失,更加怠惰,无感,好想睡觉"  
  - icon：可选参数，自定义触发按钮的图标，默认使用 🕹️（游戏手柄emoji），可替换为任何emoji或文字，如 🎲、🎯、🔄 等

### 性能

- CSS 持续性 tree-shaking，现在评论相关样式会按需打包
- `instantsearch.js` 替换为 `@reimujs/instantsearch.js`，以减少包体积

---

### Fixes

- Fixed the tag cloud weight calculation logic to ensure no errors occur when building without articles  
- Improved the giscus multilingual fallback logic  

### Features  

- Unified CSS shadow styles and added the following tokens:  
  - `--shadow-meta`  
  - `--shadow-meta-hover`  
  - `--shadow-card`  
  - `--shadow-card-hover`  
  - `--shadow-red-6-shadow`  
- Algolia now uses SHA1 hash as objectID  
- Sidebar now supports page navigation for tags and categories  
- Added `sort_order` configuration to control the sorting method for categories, tags, archives, and the homepage (Experimental Feature, may be majorly changed in the future):  
  - Supported sorting methods: `default`, `date`, `date-reverse`, `weight`, `weight-reverse`  
  - `default` follows Hugo's default sorting method. Refer to the [Hugo documentation](https://gohugo.io/quick-reference/page-collections/#sort) for details.  
  - `date` sorts by date, while `date-reverse` sorts by date in reverse order.  
  - `weight` sorts by weight, while `weight-reverse` sorts by weight in reverse order.  
  - By default, `home` uses `default` sorting, `archive` uses `date-reverse`, and `taxonomy` uses `date-reverse`.  
  - The `categories_weight` and `tags_weight` configurations can be used to control article weights for category and tag pages.  
  - The `weight` configuration can be used to control article weights for archives and the homepage.  
  ```yaml  
  sort_order:  
    taxonomy:  
      category: date-reverse # controlled by categories_weight  
      tag: date-reverse # controlled by tags_weight  
    archive: date-reverse # controlled by weight  
    home: default # controlled by weight  
  ```  
- Added custom tooltip content for the `heatMapCard` heatmap, supporting click-to-show article lists.  
- Added the `tagRoulette` shortcode to display a tag roulette, providing a random tag display feature. Clicking the button randomly selects and displays a tag from a predefined tag pool.  
  ```yaml  
  {{< tagRoulette tags="?" icon="?" >}}  
  ```  
  - `tags`: Optional parameter specifying the tag pool, with multiple tags separated by commas (`,`). If not provided, default example tags are used, e.g., `tags="memory decline,lost desire to express,more lazy,indifferent,want to sleep"`.  
  - `icon`: Optional parameter for customizing the trigger button icon. Defaults to 🕹️ (gamepad emoji), which can be replaced with any emoji or text, such as 🎲, 🎯, 🔄, etc.  

### Performance  

- Continuous CSS tree-shaking; comment-related styles are now bundled on-demand.  
- Replaced `instantsearch.js` with `@reimujs/instantsearch.js` to reduce bundle size.

## v0.11.0

**2025-05-31**

### 重大修改

- Hugo 最低版本要求升级至 v0.124.0 及以上

### 修复

- 修复 twikoo 评论系统无法正常使用的问题

### 特性

- `anchor_icon` 支持传递 `false` 以隐藏锚点图标

### 杂项

- 更新 mermaid 至 v11.6.0
- 更新 katex 至 v0.16.22
- 更新 twikoo 至 v1.6.44

---

### Major Changes

- Minimum Hugo version requirement upgraded to v0.124.0 or higher

### Fixes

- Fixed an issue where the Twikoo comment system could not be used properly

### Features

- `anchor_icon` now supports passing `false` to hide the anchor icon

### Miscellaneous

- Updated Mermaid to v11.6.0
- Updated KaTeX to v0.16.22
- Updated Twikoo to v1.6.44

## v0.10.2

**2025-05-11**

### 特性

- `menu.icon` 支持图片路径，如 `/avatar/avatar.webp`
  ```yaml
  menu:
    - name: home
      url: /
      icon: /avatar/avatar.webp
  ```
- vendor 中的 css 支持 SRI

---

### Features

- Added `menu.icon` configuration to support image paths, such as `/avatar/avatar.webp`
  ```yaml
  menu:
    - name: home
      url: /
      icon: /avatar/avatar.webp
  ```
- Vendor CSS now supports SRI

## v0.10.1

**2025-05-02**

### 修复

- 修复了当开启 `expand` 配置时，AOS 运行异常导致部分元素无法正常显示的问题
- 优化 Aplayer 样式

---

### Fixes

- Fixed the issue where AOS was running abnormally when the `expand` configuration was enabled, causing some elements to not display properly
- Optimized Aplayer styles

## v0.10.0

**2025-04-28**

### 修复

- 修复移动端导航栏溢出时无法滚动的问题
- 修复 gitalk id 错误的问题
- 修复 `only_show_capsule_in_index` 展示逻辑
- 修复 `home_categories` 展示和跳转逻辑

### 特性

- 新增 `email` 配置用于 RSS 支持
  ```yaml
  email: xxx@example.com
  ```
- RSS 支持更多配置
  ```yml
  rss:
    limit: 10             # The number of recent articles to be output, write -1 to output all
    showFullContent: false # output full content or description
    showCopyright: false   # If true, add copyright to the end of article.
  ```
- 适配和优化 valine / waline / gitalk 样式
- valine 新增 `serverURLs` 配置用于指定服务器地址
  ```yaml
  valine:
    serverURLs: # valine server url
  ```
- 多语言模式下支持切换语言
- valine / waline / twikoo / gitalk /giscus 支持多语言，且 `valine.lang`、`waline.lang`、`giscus.lang` **配置废弃**
- `comment.title`、`preloader.text`、`clipboard.success`、`clipboard.fail`、`outdate.message` 支持多语言，且同时兼容旧有字符串写法
  ```yaml
  # Example
  comment:
    # comment system title
    title:
      en: Leave a comment
      zh-CN: 说些什么吧！
      zh-TW: 說些什麼吧！
      ja: コメントを残す
  ```
- `algolia_search.label` 和 `clipboard.copyright.license` **配置废弃**，转而使用 i18n 支持多语言
- `clipboard.copyright` 和 `article_copyright.content` 新增 `license_type` 配置用于配置版权类型，详情见 [creativecommons](https://creativecommons.org/licenses)，默认为 `by-nc-sa`
  ```yaml
  article_copyright:
    content: 
      license_type: by-nc-sa
  clipboard:
    copyright:
      license_type: by-nc-sa
  ```

---

### Fixes  
- Fixed the issue where the mobile navigation bar couldn't scroll when overflowing  
- Fixed the incorrect Gitalk ID issue  
- Fixed the display logic for `only_show_capsule_in_index`  
- Fixed the display and navigation logic for `home_categories`  

### Features  

- Added `email` configuration for RSS support  

  ```yaml  
  email: xxx@example.com  
  ```  
- Enhanced RSS configuration options  

  ```yaml  
  rss:  
    limit: 10             # The number of recent articles to be output, write -1 to output all  
    showFullContent: false # Output full content or description  
    showCopyright: false   # If true, add copyright to the end of the article  
  ```  
- Improved styling compatibility for Valine, Waline, and Gitalk  
- Added `serverURLs` configuration for Valine to specify server addresses  

  ```yaml  
  valine:  
    serverURLs: # Valine server URL  
  ```  
- Added language-switching support for multilingual modes  
- Added multilingual support for Valine, Waline, Twikoo, Gitalk, and Giscus. **Deprecated** `valine.lang`, `waline.lang`, and `giscus.lang` configurations  
- Added multilingual support for `comment.title`, `preloader.text`, `clipboard.success`, `clipboard.fail`, and `outdate.message`, while maintaining backward compatibility with string-based configurations  
  ```yaml  
  # Example:  
  comment:  
    # Comment system title  
    title:  
      en: Leave a comment  
      zh-CN: 说些什么吧！  
      zh-TW: 說些什麼吧！  
      ja: コメントを残す  
  ```  
- **Deprecated** `algolia_search.label` and `clipboard.copyright.license` configurations in favor of i18n support  
- Added `license_type` configuration for `clipboard.copyright` and `article_copyright.content` to specify license types (default: `by-nc-sa`). Refer to [Creative Commons](https://creativecommons.org/licenses) for details.  

  ```yaml  
  article_copyright:  
    content:  
      license_type: by-nc-sa  
  clipboard:  
    copyright:  
      license_type: by-nc-sa  
  ```

## v0.9.0

**2025-04-13**

### 修复

- 统一光标
- 修复 material_theme 开启时渐变色不生效的问题
- 修复了 MathJax 溢出屏幕的问题
- 修复了 preloader 的加载动画字体无法自定义的问题

### 特性

- 增强了 markdown 中链接的样式
- 主题 token 现在可以直接通过 `internal_theme` 配置进行修改
  ```yaml
  internal_theme:
    light:
      --red-0: '#ff0000'
      # ...
    dark:
      --red-4: 'rgba(255, 208, 208, 0.5)'
      # ...
  ```
- 新增 `custom_font` 配置用于自定义字体，其优先级最高，默认为空，使用方式如下：
  ```yaml
  custom_font:
    enable: true # true | false
    article:
      - css: https://fontsapi.zeoseven.com/292/main/result.css # 字体css，支持本地和远程
        name: LXGW WenKai # 字体名称
    code:
      # - css: # 字体css，支持本地和远程
      # - name: # 字体名称
  ```

---

### Fixes  

- Unified cursor style  
- Fixed gradient colors not working when `material_theme` is enabled  
- Fixed MathJax content overflowing the screen  
- Fixed the issue where the font of the preloader animation couldn't be customized  

### Features  

- Enhanced link styling in Markdown  
- Theme tokens can now be directly modified via the `internal_theme` configuration:  
  ```yaml  
  internal_theme:  
    light:  
      --red-0: '#ff0000'  
      # ...  
    dark:  
      --red-4: 'rgba(255, 208, 208, 0.5)'  
      # ...  
  ```  
- Added `custom_font` configuration for custom fonts, which takes the highest priority. Defaults to empty. Usage:  
  ```yaml  
  custom_font:  
    enable: true # true | false  
    article:  
      - css: https://fontsapi.zeoseven.com/292/main/result.css # Font CSS, supports local and remote  
        name: LXGW WenKai # Font name  
    code:  
      # - css: # Font CSS, supports local and remote  
      # - name: # Font name  
  ```

## v0.8.1

**2025-04-12**

### 修复

- 优化了移动端 aplayer 的展示逻辑：现在若开启了播放器，移动端将强制展示 fixed 类型的播放器，且不会被 live2d 遮挡
- 修复 hugo v0.146.0 以上版本 partial 报错的问题

### 特性

- preloader 新增 rotate 配置，用于控制加载动画是否旋转，默认开启
  ```yaml
  preloader:
    rotate: true # whether to rotate the icon
  ```
- 代码块现在支持展示文件名/文件链接
  ``````markdown
  ```rust {name="example.rs",url="https://example.com",link_text="example"}
  #[derive(Debug)]
  pub enum State {
      Start,
      Transient,
      Closed,
  }
  ```
  ``````

---

### Fixes  

- Optimized the display logic of APlayer on mobile: Now, if the player is enabled, mobile devices will **forcefully display a fixed-type player** and it will not be obscured by Live2D.  
- Fixed an issue where Hugo v0.146.0+ would report errors with `partial`.  

### Features  

- Preloader now supports a `rotate` configuration to control whether the loading animation spins (enabled by default).  
  ```yaml  
  preloader:  
    rotate: true # whether to rotate the icon  
  ```  
- Code blocks now support displaying filenames/file links.  
  ``````markdown  
  ```rust {name="example.rs", url="https://example.com", link_text="example"}  
  #[derive(Debug)]  
  pub enum State {  
      Start,  
      Transient,  
      Closed,  
  }  
  ```  
  ``````  

## v0.8.0

**2025-04-03**

### 修复

- 使用 `relURL` 作用于内部链接，以消除潜在的 baseURL 错误问题
- 优化 footer 的年份显示

### 特性

- 新增了 `heatMapCard` shortcode 用于展示文章热力图
  ```yaml
  {{< heatMapCard levelStandard="?" >}}
  ```
  其中第一个参数为热力图的等级标准（按照文章字数分级），默认为 `"1000,5000,10000"`
- 新增了 `material_theme` 配置，打开后会基于 Google's Material You 的设计规范根据文章头图的主色调动态生成主题色
  ```yml
  material_theme:
    enable: false # true | false
  ```

  > 注意：当开启该功能时，会在 banner 的 img 元素上添加 `crossorigin="anonymous"` 属性，以获取图片的主色调，所以请确保你的图片服务器支持跨域访问，或使用第三方图片代理。
- `vendor.yml` 中新增 `local` 字段用于从本地读取资源
  ```yaml
  local: /resources/ # 本地资源路径，如果 baseURL 包含子目录，需要在前面加上子目录
  ```
  将 `:cdn` 替换为 `local` 即可从本地读取资源
  ```yaml
  clipboard: 
    src: local|clipboard@2.0.11/dist/clipboard.min.js
    integrity: sha384-J08i8An/QeARD9ExYpvphB8BsyOj3Gh2TSh1aLINKO3L0cMSH2dN3E22zFoXEi0Q
  ```
- 支持了多评论系统同时使用
  全局评论系统配置：

  ```yaml
  comment:
    title: 说些什么吧！ # 评论框标题
    default: waline # 多评论下，默认使用的评论系统
  ```
---

### Fixes

- Used `relURL` for internal links to eliminate potential baseURL errors.
- Optimized the display of the year in the footer.

### Features

- Added the `heatMapCard` shortcode to display an article heatmap
  ```yaml
  {{< heatMapCard levelStandard="?" >}}
  ```
  The first parameter is the level standard for the heatmap (graded based on the word count of the articles), with the default value being `"1000,5000,10000"`.
- Added the `material_theme` configuration, which dynamically generates theme colors based on the dominant color of the article's banner image, following Google's Material You design guidelines when enabled
  ```yml
  material_theme:
    enable: false # true | false
  ```

  > Note: When this feature is enabled, the `crossorigin="anonymous"` attribute will be added to the `img` element of the banner to fetch the dominant color of the image. Please ensure your image server supports cross-origin access or use a third-party image proxy.
- Added the `local` field in `vendor.yml` to load resources locally
  ```yaml
  local: /resources/ # Local resource path. If baseURL includes a subdirectory, prepend the subdirectory.
  ```
  Replace `:cdn` with `local` to load resources locally
  ```yaml
  clipboard: 
    src: local|clipboard@2.0.11/dist/clipboard.min.js
    integrity: sha384-J08i8An/QeARD9ExYpvphB8BsyOj3Gh2TSh1aLINKO3L0cMSH2dN3E22zFoXEi0Q
  ```
- Support for multiple comment systems simultaneously
  Global comment system configuration:

  ```yaml
  comment:
    title: Say something! # Title of the comment box  
    default: waline # Default comment system used when multiple are enabled
  ```

## v0.7.0

**2025-03-16**

### 特性

- 新增了 `pangu` 配置用于开启/关闭中英文间的空格，默认关闭
  ```yaml
  pangu:
    enable: false # true | false
  ```
- 新增了 `cover` 配置用于全局控制 post 的封面，其优先级比 front-matter 低，支持 `false`、`url` 和 `rgb` 三种类型
  ```yaml
  cover: # https://example.com / false / rgb(255,117,117)
  ```
- Front-matter 中新增 `toc` 字段用于控制 post 的 TOC，其优先级比全局配置高。
  ```yaml
  ---
  toc: true # true | false
  ---
  ```
- 新增了 `toc` 配置用于全局控制 post 的 TOC，其优先级比 front-matter 低。
  ```yaml
  toc: true # true | false
  ```
- 新增了 `only_show_capsule_in_index` 配置用于控制是否只在归档的首页展示所有分类和标签的胶囊列表，默认关闭。当文章含有大量分类和标签时，开启此选项可以大大提升编译速度。
  ```yaml
  only_show_capsule_in_index: false # true | false
  ```

### 性能

- 提升编译速度

|            | 0.6.4   | 0.7.0   | 0.7.0 only_show_capsule_in_index=true |
| ---------- | ------- | ------- | ------------------------------------- |
| 500 posts  | 19.580s | 9.106s  | 5.530s                                |
| 2000 posts | 25.067s | 15.102s | 6.453s                                |
| 4000 posts | 40.426s | 27.491s | 11.811s                               |

1000 分类 + 5000 标签

|            | 0.6.4   | 0.7.0   | 0.7.0 only_show_capsule_in_index=true |
| ---------- | ------- | ------- | ------------------------------------- |
| 1000 posts | 65.774s | 30.552s | 9.161s                                |

### 杂项

- 引入go module

---

### Features

- Added `pangu` configuration to enable/disable spaces between Chinese and English text. Default is `false`.
  ```yaml
  pangu:
    enable: false # true | false
  ```
- Added `cover` configuration for global control of post covers. It has lower priority than front-matter and supports `false`, `url`, and `rgb` types.
  ```yaml
  cover: # https://example.com / false / rgb(255,117,117)
  ```
- Added `toc` field in front-matter to control the Table of Contents (TOC) for posts. It has higher priority than global configuration.
  ```yaml
  ---
  toc: true # true | false
  ---
  ```
- Added `toc` configuration for global control of post TOC. It has lower priority than front-matter.
  ```yaml
  toc: true # true | false
  ```
- Added `only_show_capsule_in_index` configuration to control whether to display all categories and tags' capsule lists only on the archive index page. Default is `false`. Enabling this option can significantly improve compilation speed when posts contain a large number of categories and tags.
  ```yaml
  only_show_capsule_in_index: false # true | false
  ```

### Performance

- Improved compilation speed.

|            | 0.6.4   | 0.7.0   | 0.7.0 only_show_capsule_in_index=true |
| ---------- | ------- | ------- | ------------------------------------- |
| 500 posts  | 19.580s | 9.106s  | 5.530s                                |
| 2000 posts | 25.067s | 15.102s | 6.453s                                |
| 4000 posts | 40.426s | 27.491s | 11.811s                               |

1000 categories + 5000 tags

|            | 0.6.4   | 0.7.0   | 0.7.0 only_show_capsule_in_index=true |
| ---------- | ------- | ------- | ------------------------------------- |
| 1000 posts | 65.774s | 30.552s | 9.161s                                |

### Miscellaneous

- Introduced Go module support.

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.6.4...v0.7.0

## v0.6.4

**2025-03-08**

### 特性

- 新增 `category_limits`, `tag_limits` 和 `tagcloud_limits` 配置用于限制 widget 分类，标签和标签云的数量
  ```yaml
  category_limits: 10 # 分类数量限制
  tag_limits: 10 # 标签数量限制
  tagcloud_limits: 20 # 标签云数量限制
  ```

### 性能

- 提升编译速度

```plain
                   | ZH-CN
-------------------+--------
  Pages            |  4239
  Paginator pages  |  1889
  Non-page files   |     0
  Static files     |    17
  Processed images |     0
  Aliases          |   115
  Cleaned          |     0
```

| 0.6.3    | 0.6.4   |
| -------- | ------- |
| 111.540s | 18.632s |

---

### Features

- Added `category_limits`, `tag_limits`, and `tagcloud_limits` configurations to limit the number of widget categories, tags, and tag clouds.
  ```yaml
  category_limits: 10 # Limit on the number of categories
  tag_limits: 10 # Limit on the number of tags
  tagcloud_limits: 20 # Limit on the number of tag clouds
  ```

### Performance

- Improved compilation speed.

```plain
                   | ZH-CN
-------------------+--------
  Pages            |  4239
  Paginator pages  |  1889
  Non-page files   |     0
  Static files     |    17
  Processed images |     0
  Aliases          |   115
  Cleaned          |     0
```

| 0.6.3    | 0.6.4   |
| -------- | ------- |
| 111.540s | 18.632s |

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.6.3...v0.6.4

## v0.6.3

**2025-03-02**

### 修复

- 修正 ja 多语言翻译错误
- 修复和优化样式，提升文字对比度，优化阴影效果

### 特性

- 新增 `injector` 配置用于注入自定义代码，其效果和 [Hexo#Injector](https://hexo.io/api/injector) 类似，支持 `head`、 `body` 和 `sidebar` 注入
  ```yaml
  injector:
    head_begin: # Inject code snippet right after <head>
    head_end: # Inject code snippet right before </head>
    body_begin: # Inject code snippet right after <body>
    body_end: # Inject code snippet right before </body>
    sidebar_begin: # Inject code snippet right after <aside>
    sidebar_end: # Inject code snippet right before </aside>
  ```
- 新增 `copyright` 配置用于向 copyright 注入自定义代码
  ```yaml
  copyright:
  ```

---

### Fixes

- Fixed incorrect Japanese multilingual translation errors.
- Optimized styles: Improved text contrast and enhanced shadow effects.

### Features

- Added `injector` configuration to inject custom code snippets, with functionality similar to [Hexo#Injector](https://hexo.io/api/injector). It supports injection into `head`, `body`, and `sidebar` areas:
  ```yaml
  injector:
    head_begin: # Inject code snippet right after <head>
    head_end: # Inject code snippet right before </head>
    body_begin: # Inject code snippet right after <body>
    body_end: # Inject code snippet right before </body>
    sidebar_begin: # Inject code snippet right after <aside>
    sidebar_end: # Inject code snippet right before </aside>
  ```
- Added `copyright` configuration to inject custom code snippets into copyright:
  ```yaml
  copyright:
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.6.2...v0.6.3

## v0.6.2

**2025-02-23**

### 特性

- 文章版权现在支持多语言了
- 优化文章分类和标签卡片样式

---

### Features

- Article copyright now supports multiple languages(i18n).
- Optimize article categories and tags card styles.

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.6.1...v0.6.2

## v0.6.1

**2025-02-16**

### 修复

- 修复了 `KaTeX` 客户端渲染在 PJAX 模式下 `Waline` 等评论报错的 bug
- 修复了 `Valine`、`Gitalk` 和 `Twikoo` 评论系统在 PJAX 模式下抛出异常的 bug
- 优化了 `Waline` 和 `Gitalk` 评论系统的样式
- 优化了 sticky Tag 的样式
- 优化了 PJAX 模式下 script 标签的执行逻辑

### 特性

- vendor 现在支持使用链接，现在以下配置均合法
  ```yaml
  js:
    katex: webcache|katex@0.16.11/dist/katex.min.css # 使用指定 CDN
    katex: https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css # 使用链接
    katex: /vendor/katex.min.css # 使用本地文件
  ```
- 现在支持在首页展示分类卡片，用来代替 widget 的 `categories`，默认关闭
  ```yaml
  home_categories:
    enable: false # true | false
    content:
      - categories: # 目录名称，字符串类型
        cover: # 卡片封面，不填则使用随机封面
  ```

---

### Fixes

- Fixed a bug where KaTeX client-side rendering caused errors with Waline and other comments in PJAX mode.
- Fixed bugs where Valine, Gitalk, and Twikoo comment systems threw exceptions in PJAX mode.
- Optimized the styles for the Waline and Gitalk comment systems.
- Optimized the styles for the sticky tag.
- Optimized the script tag execution logic in PJAX mode.

### Features

- Vendor now supports using links, and the following configurations are valid:
  ```yaml
  js:
    katex: webcache|katex@0.16.11/dist/katex.min.css # Use a specified CDN
    katex: https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css # Use an absolute URL
    katex: /vendor/katex.min.css # Use a local file
  ```
- Added support to display category cards on the homepage, replacing the `categories` widget. Disabled by default.
  ```yaml
  home_categories:
    enable: false # true | false
    content:
      - categories: # Category name, string type
        cover: # Card cover image, if not provided, a random one is used
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.5.2...v0.6.0

## v0.6.0

**2025-02-09**

### 修复

- 修复了 `KaTeX` 客户端渲染在 PJAX 模式下 `Waline` 等评论报错的 bug
- 修复了 `Valine`、`Gitalk` 和 `Twikoo` 评论系统在 PJAX 模式下抛出异常的 bug
- 优化了 `Waline` 和 `Gitalk` 评论系统的样式
- 优化了 sticky Tag 的样式
- 优化了 PJAX 模式下 script 标签的执行逻辑

### 特性

- vendor 现在支持使用链接，现在以下配置均合法
  ```yaml
  js:
    katex: webcache|katex@0.16.11/dist/katex.min.css # 使用指定 CDN
    katex: https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css # 使用链接
    katex: /vendor/katex.min.css # 使用本地文件
  ```
- 现在支持在首页展示分类卡片，用来代替 widget 的 `categories`，默认关闭
  ```yaml
  home_categories:
    enable: false # true | false
    content:
      - categories: # 目录名称，字符串类型
        cover: # 卡片封面，不填则使用随机封面
  ```

---

### Fixes

- Fixed a bug where KaTeX client-side rendering caused errors with Waline and other comments in PJAX mode.
- Fixed bugs where Valine, Gitalk, and Twikoo comment systems threw exceptions in PJAX mode.
- Optimized the styles for the Waline and Gitalk comment systems.
- Optimized the styles for the sticky tag.
- Optimized the script tag execution logic in PJAX mode.

### Features

- Vendor now supports using links, and the following configurations are valid:
  ```yaml
  js:
    katex: webcache|katex@0.16.11/dist/katex.min.css # Use a specified CDN
    katex: https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css # Use an absolute URL
    katex: /vendor/katex.min.css # Use a local file
  ```
- Added support to display category cards on the homepage, replacing the `categories` widget. Disabled by default.
  ```yaml
  home_categories:
    enable: false # true | false
    content:
      - categories: # Category name, string type
        cover: # Card cover image, if not provided, a random one is used
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.5.2...v0.6.0

## v0.5.2

**2025-02-02**

### 修复

- 修复了代码块存在横向滚动条时行号和代码块不对齐的 bug
- 修复了侧边栏溢出时无法滚动的 bug

### 特性

- 渐进支持了 `interpolate-size`，现在 Chrome 129+ 的代码块折叠和 TOC 锚点会有动画效果

### 杂项

- 升级了 mouse-firework 依赖，减少内存占用

---

### Fixes

- Fixed bug where line numbers and code blocks were misaligned when horizontal scrollbars were present.
- Fixed bug where sidebar couldn't scroll when overflowing.

### Features

- Progressive support for `interpolate-size`, now code block collapsing and TOC anchor points will have animation effects in Chrome 129+.

### Miscs

- Upgraded the `mouse-firework` dependency to reduce memory usage.

---

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.5.1...v0.5.2

## v0.5.1

**2025-01-19**

### 修复

- 修复了Aplayer audio 配置读取异常

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.5.0...v0.5.1

## v0.5.0

**2025-01-05**

### 修复

- 修复了自定义封面时 pjax 失效的 bug
- 修复了点击侧边栏按钮进行跳转时 pjax 失效的 bug
- 修复了当标题以数字开头时 TOC 无法正常显示的 bug
- 修正样式

### 特性

- 新增了 `share` 配置用于开启分享功能，目前支持 `facebook`、`twitter`、`linkedin`、`reddit`、`weibo`、`qq`、`weixin`。
  ```yml
  share:
    - facebook
    - twitter
    - linkedin
    - reddit
    - weibo
    - qq
    - weixin
  ```
  `weixin` 状态下会生成带有二维码的分享卡片，可保存到本地后分享到微信朋友圈（注意，当文章封面存在跨域问题时无法使用 html-to-image 正确生成含图片的卡片！）
- 支持在文章 `front-matter` 中配置 `sidebar` 字段，用于控制文章是否显示侧边栏，优先级高于全局配置
  ```yaml
  ---
  sidebar: left # left | right | false
  ---
  ```
- `reimu_cursor` 配置结构发生变化，新增 `cursor` 配置用于自定义鼠标路径。（仍然兼容老配置）
  ```yaml
  reimu_cursor:
    enable: true
    cursor:
      default: ../images/cursor/reimu-cursor-default.png
      pointer: ../images/cursor/reimu-cursor-pointer.png
      text: ../images/cursor/reimu-cursor-text.png
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.4.0...v0.5.0

## v0.4.0

**2024-12-28**

### 修复

- 修复头像 hover 动画丢失的问题

### 特性

- 新增了 `live2d_widgets` 配置用于开启/关闭 live2d-widgets

  ```yaml
  live2d_widgets:
    enable: true # true | false
    position: left # left | right
  ```

- 为 `top` 和 `live2d` 新增 `position` 配置，用于控制其位置

  ```yaml
  top:
    enable: true # true | false
    position: right # left | right

  live2d:
    enable: true # true | false
    position: left # left | right
  ```

- 新增 `player` 配置用于配置 Aplayer / Meting 音乐播放器，使用前建议打开 pjax
  ```yaml
  player:
    aplayer:
      enable: false
      options:
        audio: []
        fixed:
        autoplay:
        loop:
        order:
        preload:
        volume:
        mutex:
        listFolded:
    meting:
      enable: false
      meting_api: # custom api
      options:
        id:
        server:
        type:
        auto:
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.3.0...v0.4.0

## v0.3.0

**2024-12-15**

### 修复

- 修正了侧边栏文章数量统计错误的bug

### 特性

- 支持 MathJax3，使用以下配置切换数学公式的渲染

```yaml
math:
  katex:
    enable: true
  mathjax:
    enable: false
    options: [{}]
```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.2.0...v0.3.0

## v0.2.0

**2024-12-07**

### 修复

- 修复了部分 css token 未统一的问题

### 特性

- 添加了配置用于控制代码块的默认展开状态，`expand` 可以设置为 `true`、`false` 或数字，数字表示当代码块的行数大于该数字时默认收缩。
  ```yaml
  code_block:
    expand: true # true | false | number
  ```
- 添加了 `local_font` 配置用于定义本机兜底字体，其优先级比谷歌字体低：
  ```yaml
  local_font:
    article:
      - "-apple-system"
      - PingFang SC
      - Microsoft YaHei
      - sans-serif
    code:
      - Menlo
      - Monaco
      - Consolas
      - monospace
  ```

### 性能

- CSS 持续性 tree-shaking，现在 `social` 中只有用到的图标会被打包

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.1.0...v0.2.0

## v0.1.0

**2024-12-01**

### 修复

- 修复了 `KaTeX` 带有 tag 时会有多余的滚动条的 bug
- 修复了 `KaTeX` 带有 tag 且宽度过小时会和左侧公式重叠的 bug
- 修复了 `giscus` 评论不会随着日夜模式切换而改变主题的 bug，现在 `giscus` 的 `commentTheme` 配置无效
  ```yaml
  giscus:
    commentTheme: # 无效的配置，现在主题由 reimu 托管了
  ```
- 修复了 Github icon 在夜间模式下颜色不明显的问题
- 同步了部分 transition 动画，使得动画更加统一

### 重构

- 现在搜索和移动端侧边栏共用一个 mask，减少了代码量
- 统一了 css 中的 token 颜色，现在可以通过修改某些 token 实现替换主题色
- 重构了 `menu` 配置，现在支持自定义 icon
  ```yaml
  menu:
    - name: home
      url: /
      icon: # 不填默认使用太极图标
    - name: archives
      url: /archives
      icon: f0c1 # 你可以填写一个十六进制的数字来自定义 icon，支持 fontawesome 和 icon font
    - name: about
      url: /about
      icon:
    - name: friend
      url: /friend
      icon:
  ```
- 重构了 `footer`、`top`、`sponsor` 配置，现在支持自定义 icon

  ```yaml
  footer:
    icon:
      url: "../images/taichi.png" # 相对于 css/style.css 的路径，所以需要向上一级才能找到 images 文件夹
      rotate: true
      mask: true

  top: # 这是新增配置
    enable: true # true | false
    icon:
      url: "../images/taichi.png"
      rotate: true
      mask: true

  sponsor:
    icon:
      url: "../images/taichi.png"
      rotate: true
      mask: true
  ```

- 重构了 `preloader` 配置，现在支持自定义加载动画 icon
  ```yaml
  preloader:
    enable: true
    text: 少女祈祷中...
    icon: # 不填默认使用内链的svg（保证首屏加载速度），你可以填入一个链接来自定义加载图标，如 '/images/taichi.png'
  ```
- 新增了 `anchor_icon` 配置，现在支持自定义锚点 icon
  ```yaml
  anchor_icon: # 不填默认使用 # 图标
  ```

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.0.4...v0.1.0

## v0.0.4

**2024-11-24**

### 特性

- 支持了service worker

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.0.3...v0.0.4

## v0.0.3

**2024-11-16**

### 修复

- 修复 photoswipe 加载异常
- 修复 achor hover 样式异常
- 修复 algolia_logo 404 异常
- 修复 excerpt 展示逻辑，现在展示逻辑与 hexo-theme-reimu 相同

### 特性

- 现在 quicklink 默认关闭，与 hexo-theme-reimu 同步
- 支持了 SRI
- 代码高亮支持了 patch 语言类型

### 性能

- photoswipe 相关 js 现在不会在 home 页面加载
- comment 相关 js 现在不会在 home 页面加载

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.0.2...v0.0.3

## v0.0.2

**2024-11-10**

update screenshot images

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/compare/v0.0.1...v0.0.2

## v0.0.1

**2024-11-10**

first release

**Full Changelog**: https://github.com/D-Sketon/hugo-theme-reimu/commits/v0.0.1
