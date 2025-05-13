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
