<img src="https://cdn.jsdelivr.net/gh/D-Sketon/hugo-theme-reimu@main/images/screenshot.png"/>
<div align = center>
  <h1>hugo-theme-reimu</h1>
  <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhugo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">
  <img alt="GitHub License" src="https://img.shields.io/github/license/D-Sketon/hugo-theme-reimu">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hugo-theme-reimu">
  <p align="center">
  <p align="center">
  💘 Hakurei Reimu 💘
  </p>

[Demo](https://d-sketon.github.io/hugo-theme-reimu) | [Change Log](https://github.com/D-Sketon/hugo-theme-reimu/blob/main/CHANGELOG.md)

[简体中文](https://github.com/D-Sketon/hugo-theme-reimu/blob/main/README.md) | English

</div>

A Hakurei Reimu style Hugo theme. Migrated from [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu).

---

| framework                    | repository                                                         | version                                                                                                                                                                                     | stars                                                                                              |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Hexo](https://hexo.io/)     | [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhexo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hexo-theme-reimu">  |
| [Astro](https://astro.build) | [astro-theme-reimu](https://github.com/D-Sketon/astro-theme-reimu) | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fastro-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version"> | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/astro-theme-reimu"> |
| [Hugo](https://gohugo.io)    | [hugo-theme-reimu](https://github.com/D-Sketon/hugo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhugo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hugo-theme-reimu">  |

**ISSUE and PR Welcome!**

## Features

### Basic Functions

- ✨ Full blog functionality
- 🔄 Compatible with Hugo 0.116.0+
- 📱 Responsive layout
- 🌙 Dark mode support
- 🅰️ i18n support

### Code & Math

- 🖥️ Code highlighting and copying
- ➗ KaTeX / MathJax3 math formula support
- 📊 Mermaid flowchart support

### Search & Comments

- 🔍 Algolia search integration
- 💬 Multiple comment systems support:
  - Valine
  - Waline
  - Twikoo
  - Gitalk
  - Giscus

### Statistics & Analytics

- 📊 Article reading statistics (Valine / Waline)
- 👥 Visitor statistics (Busuanzi)

### Media & Interactive Features

- 🎵 Music player support:
  - Aplayer
  - Meting
- 🖼️ Lazy loading for images
- ⚡ Loading animations
- 🖱️ Mouse effects:
  - Animation effects
  - Reimu cursor style
- 👾 Live2D / Live2D-widgets integration

### Navigation & Structure

- 📑 Table of Contents (TOC)
- 🔄 PJAX support
- 🔧 ServiceWorker implementation
- 📰 RSS feed

### Design & Customization

- 🎨 Icon support:
  - Iconfont
  - FontAwesome
- 🔗 Custom shortcodes for:
  - Internal links
  - External links
  - Friend links
  - Heatmap
- 🎨 Dynamic theme color adaptation
- ©️ Article copyright declaration
- 🌐 Custom CDN source / local source configuration
- 📜 Custom Font Family
- 🎨 Share card functionality

## Installation

> For beginners, you can directly use [hugo-reimu-template](https://github.com/D-Sketon/hugo-reimu-template). You only need to clone the repository and modify the configuration to get a basic blog!

### Method 1: Hugo Module (Recommended)

Suitable for users familiar with the Go ecosystem, supports version management and automatic updates.

```bash
hugo new site quickstart
cd quickstart
hugo mod init github.com/<your-github-username>/quickstart  # Replace <your-github-username> with your actual GitHub username
echo 'theme = ["github.com/D-Sketon/hugo-theme-reimu"]' >> hugo.toml
hugo server
```

### Method 2: Git Submodule

Suitable for users who prefer manual management of theme versions.

```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/D-Sketon/hugo-theme-reimu.git themes/reimu
echo 'theme = "reimu"' >> hugo.toml
hugo server
```

Choose the installation method that suits you best, and you can start using **Hugo Theme Reimu** right away!

## Usage

<details>
<summary>Create Configuration</summary>

### Creating Configuration

#### Theme Configuration

Create a `_default` folder under the outer `config` folder, then copy the `config/_default/params.yml` from inside the theme to the `_default` folder. This file serves as the theme configuration file where you can modify theme settings.

#### Data Configuration

Copy all files from the theme's `config/data/` folder to the outer `data` folder. The files in this folder are used to configure data within the theme:

- `covers.yml` is used to configure random cover images
- `friends.yml` is used to configure friend links
- `vendor.yml` is used to configure CDN sources for third-party libraries

#### Static Resource Configuration

The theme's static resources (favicon, header images, etc.) are located in the `static` folder. You can create corresponding folders in the outer `static` folder and copy the files from inside the theme to the outer folders to override the theme's default files.

> In summary, it's not recommended to modify files directly inside the theme. Instead, create corresponding folders in the outer directory and copy the theme's files there to override the default files. This approach makes theme upgrades easier.

</details>
<details>

<summary>Basic Structure</summary>

### Basic Structure

To ensure proper display, please create `archives` and `post` folders in `content` by referring to `_example` (the `_index.md` inside cannot be omitted, and note that `post`'s `draft` should be set to `true`)

#### archives

- `_index.md` is used to display the archive page, cannot be omitted

#### post

Create articles in this directory, note that articles with `draft` set to `true` will not be displayed on the homepage

- `_index.md` is used to prevent the generation of `post/index.html`, cannot be omitted

#### about\.md

About page

#### friend\.md

Friend link page

</details>

<details>
<summary>Avatar, Cover, Banner, and favicon</summary>

### Avatar, Cover, Banner, and Favicon

#### Avatar

The avatar should be saved at `static/avatar/avatar.webp`. You can modify the filename in `params.yml`

```yaml
avatar: "avatar.webp"
```

#### Cover

For random cover images, refer to the file structure in the theme's `data/covers.yml`. Create a `covers.yml` file in the outer `data` folder with the following format:

```yaml
- https://example.com/1.jpg
- https://example.com/2.jpg
```

Cover display logic is as follows:

- If the article's Front matter contains a cover url, both the article header and homepage thumbnail will display that url

```yaml
---
title: Hello World
cover: https://example.com
---
```

- If the article's Front matter contains cover set to `false`, the article won't display a header image (homepage will still show random images)

```yaml
---
title: Hello World
cover: false
---
```

- If the article's Front matter contains cover set to `rgb(xxx,xxx,xxx)`, the article header will be a gradient of that solid color (homepage will still show random images)

```yaml
---
title: Hello World
cover: rgb(255,117,117)
---
```

- Otherwise, it will look for `covers.yml` in the `data` folder and randomly select an image
- If none of the above files exist, it will display the banner image

#### Banner

The banner is saved at `themes/hugo-theme-reimu/static/images/banner.webp`. You can modify the path and name in `params.yml`

```yaml
banner: "images/banner.webp"
```

#### Favicon

The favicon is saved at `themes/hugo-theme-reimu/static/favicon.ico`. You can replace it with your own file.

</details>
<details>
<summary>Code Blocks</summary>

### Code Blocks

To ensure proper display of code blocks, make sure you have the following configuration in `hugo.toml`

```toml
[markup.highlight]
guessSyntax = true
noClasses = false
```

Code blocks also provide code copying functionality. Click the copy button in the top right corner of the code block to copy the code. You can configure the copy functionality in `params.yml`.  
`success` is the prompt shown when copying is successful, `fail` is the prompt shown when copying fails. Additionally, you can configure copyright notices - when the copied text exceeds `count` characters, the copyright notice will be added after the copied content.

```yaml
clipboard:
  success:
    en: Copy successfully (*^▽^*)
    zh-CN: 复制成功 (*^▽^*)
    zh-TW: 複製成功 (*^▽^*)
    ja: コピー成功 (*^▽^*)
  fail:
    en: Copy failed (ﾟ⊿ﾟ)ﾂ
    zh-CN: 复制失败 (ﾟ⊿ﾟ)ﾂ
    zh-TW: 複製失敗 (ﾟ⊿ﾟ)ﾂ
    ja: コピー失敗 (ﾟ⊿ﾟ)ﾂ
  copyright:
    enable: false
    count: 50 # The number of characters when the copyright is displayed
    license_type: by-nc-sa # https://creativecommons.org/licenses
```

v0.2.0 added configuration to control the default expansion state of code blocks. `expand` can be set to `true`, `false`, or a number - the number indicates that code blocks will be collapsed by default when the number of lines exceeds this value.

```yaml
code_block:
  expand: true # true | false | number
```

</details>
<details>
<summary>Site comments</summary>

### Site comments

> Site comments can be individually controlled for each article using `comments` in the Front matter.  
> When `comments` is `false`, comments won't be displayed. When it's `true` or not specified, the display will be determined by the `params.yml` configuration.

> Support for multiple comment systems simultaneously after version 0.8.0+

Global comment system configuration:

```yaml
comment:
  title: # Title of the comment box
    en: Leave a comment
    zh-CN: 说些什么吧！
    zh-TW: 說些什麼吧！
    ja: コメントを残す
  default: waline # Default comment system used when multiple are enabled
```

If using [Valine](https://valine.js.org/)  
Please refer to their official documentation to complete the `LeanCloud` configuration, then set `valine.enable` to `true` in the inner `params.yml` and fill in your `appId` and `appKey`

```yaml
valine:
  enable: true
  appId: "your appId"
  appKey: "your appKey"
```

If using [Waline](https://waline.js.org/)  
Please refer to their [official documentation](https://waline.js.org/guide/get-started/) to complete the `LeanCloud` configuration, then set `waline.enable` to `true` in the inner `params.yml` and fill in your `serverURL`

```yaml
waline:
  enable: true
  serverURL: "your server url"
  locale: {} # https://waline.js.org/guide/features/i18n.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80
  emoji:
    - https://unpkg.com/@waline/emojis@1.2.0/weibo
    - https://unpkg.com/@waline/emojis@1.2.0/alus
    - https://unpkg.com/@waline/emojis@1.2.0/bilibili
    - https://unpkg.com/@waline/emojis@1.2.0/qq
    - https://unpkg.com/@waline/emojis@1.2.0/tieba
    - https://unpkg.com/@waline/emojis@1.2.0/tw-emoji
  meta:
    - nick
    - mail
    - link
  requiredMeta:
    - nick
    - mail
  wordLimit: 0
  pageSize: 10
  pageview: true
```

If using [twikoo](https://twikoo.js.org)  
Please refer to their [official documentation](https://twikoo.js.org/quick-start.html) to complete Tencent Cloud or Vercel deployment, then set `twikoo.enable` to `true` in the inner `params.yml` and fill in your `envId`

```yml
twikoo:
  enable: true
  envId: # Tencent cloud environment fill envId; Vercel environment fill address (https://xxx.vercel.app)
  region:
```

If using [giscus](https://giscus.app/)  
Please refer to the documentation to complete repository configuration, then set `giscus.enable` to `true` in the inner `params.yml` and fill in the corresponding data

```yml
giscus:
  enable: true
  repo: "your repo"
  repoId: "your repoId"
  category: "your category"
  categoryId: "your categoryId"
  mapping: mapping
  strict: 0
  reactionsEnabled: 1
  emitMetadata: 0
  inputPosition: bottom
```

If using [gitalk](https://gitalk.github.io/)  
Please refer to their [official documentation](https://github.com/gitalk/gitalk?tab=readme-ov-file#usage) to complete repository configuration, then set `gitalk.enable` to `true` in the inner `params.yml` and fill in the corresponding data

```yml
gitalk:
  enable: true
  clientID: "your application client ID"
  clientSecret: "your application client secret"
  repo: "your repo"
  owner: "repo owner"
  admin: "repo owner and collaborators"
  md5: false # Whether to use md5 to encrypt the path
```

</details>
<details>
<summary>Site search</summary>

Based on [Algolia](https://www.algolia.com/), please add the following configuration to your outer `hugo.toml`:

```toml
[outputs]
home = ["Algolia", "HTML", "RSS"]

[outputFormats.Algolia]
baseName = "algolia"
isPlainText = true
mediaType = "application/json"
notAlternative = true
```

This will generate an `algolia.json` file in the `public` folder, which is used for Algolia search. You can then use plugins like `atomic-algolia` to upload it to Algolia.

Also, in `params.yml`, set `algolia_search.enable` to `true` and fill in the relevant information (**Important! Enter the Search-Only Key here, NOT the Admin Key!! Otherwise, your account may be vulnerable to attacks**)

```yaml
algolia_search:
  enable: true
```

</details>
<details>

<summary>Mathematical formulas</summary>

### Mathematical formulas

First, add the following configuration to your outer `hugo.toml`:

```toml
[markup.goldmark.extensions.passthrough]
enable = true
delimiters.block = [["\\[", "\\]"], ["$$", "$$"]]
delimiters.inline = [["\\(", "\\)"], ["$", "$"]]
```

Then, add `math: true` to the Front matter of any article where you want to use mathematical formulas:

```yaml
---
math: true
---
```

> Note: Do not enable both KaTeX and MathJax3 simultaneously

#### KaTex

If using [KaTeX](https://github.com/KaTeX/KaTeX), set `math.katex.enable` to `true` in `params.yml`:

```yaml
math:
  katex:
    enable: true
```

#### MathJax3

If using [MathJax3](https://www.mathjax.org/), set `math.mathjax.enable` to `true` in `params.yml`. You can add configurations in `options` (since Hugo automatically converts object keys to lowercase, configurations need to be placed in an array to avoid default behavior):

```yaml
math:
  mathjax:
    enable: true
    options: [{}]
```

</details>
<details>
<summary>Mermaid</summary>

### Mermaid

Flow charts are based on [Mermaid](https://mermaid.js.org/#/). Add `mermaid: true` to the Front matter of articles where you want to use flow charts:

```yaml
---
mermaid: true
---
```

</details>
<details>
<summary>RSS</summary>

### RSS

You can configure the RSS in `params.yml`.

```yaml
rss:
  limit: 10 # The number of recent articles to be output, write -1 to output all
  showFullContent: false # output full content or description
  showCopyright: false # If true, add copyright to the end of article.
```

</details>

<details>
<summary>Icon</summary>

### Icon

Icons default to using the iconfont provided by this project:

```yml
icon_font: 4552607_0khxww3tj3q9
```

If you want to continue using FontAwesome icons, set `icon_font` to `false`. This will use the corresponding FontAwesome configuration from `vendor.yml`:

```yml
fontawesome:
  high_priority:
    - src: webcache|@fortawesome/fontawesome-free@6.5.1/css/regular.min.css
      integrity: sha384-k5640LgghgAohDLPwSqVWa96yQwWouT6wsAL+J1g0CFJVITNKYkIh1XpPLYKQe7Y
    - src: webcache|@fortawesome/fontawesome-free@6.5.1/css/solid.min.css
      integrity: sha384-8yO/A/BtltnG0hDxdwmmkza8UAleyDoAD1FhXiH6rsOQQsCho1P6WZP9TpBBH3YP
  low_priority:
    - src: webcache|@fortawesome/fontawesome-free@6.5.1/css/brands.min.css
      integrity: sha384-/BRyRRN0wxxRgh/DAXU621go9pdoMHl6LFPiX5Pp8PZYZlKBQCDXj9X9DHx6LOud
    - src: webcache|@fortawesome/fontawesome-free@6.5.1/css/v5-font-face.min.css
      integrity: sha384-/mBKnLlGtog8q2qQrgugURRDV+iHWHAPvM5KulYXT1C2ErKOKkBI0vbff8ZPq7rL
    - src: webcache|@fortawesome/fontawesome-free@6.5.1/css/v4-font-face.min.css
      integrity: sha384-d2Yn1/9Iw78r3oqwk5B+EcpRcmepXR5LyhmRF2a+WoSe9mpRGvVk0ZviFwDGDOTO
```

</details>

<details>
<summary>Extended features</summary>

### Extended features

#### Dark Mode

The default setting is `auto`, which automatically switches based on the user's system settings. It can be set to `true` or `false` to change the default state.

```yaml
dark_mode:
  # true means that the dark mode is enabled by default
  # false means that the dark mode is disabled by default
  # auto means that the dark mode is automatically switched according to the system settings
  enable: auto # true | false | auto
```

#### Pace Progress Bar

Enabled by default

```yaml
pace:
  enable: true
```

#### Firework

Enabled by default

```yaml
firework:
  enable: true
```

For detailed configuration, please check [mouse-firework](https://github.com/D-Sketon/mouse-firework)

#### PJAX

Disabled by default

```yaml
pjax:
  enable: false
```

> PJAX is for users who need SPA features like music players. However, it's still experimental and may cause issues like **scripts not executing**, **scripts executing multiple times**, or **page rendering problems**. Please consider carefully!

#### ServiceWorker

Disabled by default

```yaml
service_worker:
  enable: false
```

#### Live2D

Disabled by default

```yaml
live2d:
  enable: false
  position: left # left | right
```

#### Live2D Widgets

Disabled by default

```yaml
live2d_widgets:
  enable: false
  position: left # left | right
```

#### Reimu Cursor

Enabled by default

```yml
reimu_cursor: true
```

#### Responsive Banner

Disabled by default. When enabled and provided with corresponding image sizes and media queries, it can improve mobile LCP to some extent

```yml
banner_srcset:
enable: false
srcset:
  - src: "images/banner-600w.webp"
    media: "(max-width: 479px)"
  - src: "images/banner-800w.webp"
    media: "(max-width: 799px)"
  - src: "images/banner.webp"
    media: "(min-width: 800px)"
```

#### Article Copyright Notice

Disabled by default

```yml
article_copyright:
  enable: false # Show copyright card?
  content:
    author: # true | false Show author in copyright card?
    link: # true | false Show link in copyright card?
    title: # true | false Show title in copyright card?
    date: # true | false Show creation date in copyright card?
    updated: # true | false Show update date in copyright card?
    license: # true | false Show license in copyright card?
    license_type: by-nc-sa # https://creativecommons.org/licenses
```

Additionally, it can be controlled through article front-matter, which takes priority over global configuration

```yaml
---
copyright: true # Show copyright card?
---
```

#### Quicklink

Enabled by default. When enabled, it preloads links while users stay on the page, improving user experience

```yaml
quicklink:
  enable: true
  timeout: 3000 # Timeout for quicklink
  priority: true # Whether to prioritize loading the page
  ignores: [] # Ignore the specified link, only support string
```

#### Outdated Notice

Disabled by default

```yaml
outdate:
  enable: false
  daysAgo: 180 # How many days old before an article is considered outdated
  message:
    en: This article was last updated on {time}. Please note that the content may no longer be applicable.
    zh-CN: 本文最后更新于 {time}，请注意文中内容可能已不适用。
    zh-TW: 本文最後更新於 {time}，請注意文中內容可能已不適用。
    ja: この記事は最終更新日：{time}。記載内容が現在有効でない可能性がありますのでご注意ください。
```

#### Sponsorship

Disabled by default

```yaml
sponsor:
  enable: false # Show sponsorship QR codes?
  tip: # Sponsorship tip
    zh-CN: 请作者喝杯咖啡吧
    zh-TW: 請作者喝杯咖啡吧
    en: Buy me a coffee
    ja: コーヒーを買ってください
  icon:
    url: "../images/taichi.png" # Sponsor icon path relative to css/main.css
    rotate: true # Rotate icon?
    mask: true # Use image as mask (only show PNG image outline)?
  qr:
    - name: Alipay # QR code name
      src: "sponsor/alipay.jpg" # Example QR code path at static/sponsor/alipay.jpg
```

Can also be controlled through article front-matter, which takes priority over global configuration

```yaml
---
sponsor: true # Show sponsorship QR codes?
---
```

#### Music Player (v0.4.0+)

> Recommended to enable PJAX first, otherwise the player may automatically pause

Uses Aplayer + Meting (optional), disabled by default

##### Pure Aplayer

Set `player.aplayer.enable` to `true` and configure `player.aplayer.options` according to [Aplayer Docs](https://aplayer.js.org/#/home?id=options)

```yaml
player:
  aplayer:
    enable: true
    options:
      audio: [] # audio list
      fixed:
      autoplay:
      loop:
      order:
      preload:
      volume:
      mutex:
      listFolded:
      lrcType:
```

##### Aplayer + Meting

Set both `player.aplayer.enable` and `player.meting.enable` to `true`. Configure `player.meting.options` according to [Meting Docs](https://github.com/metowolf/MetingJS?tab=readme-ov-file#option) and `player.aplayer.options` for Aplayer configuration

```yaml
player:
  aplayer:
    enable: true
    options:
      audio: [] # this option will be overwritten by meting
      fixed:
      autoplay:
      loop:
      order:
      preload:
      volume:
      mutex:
      listFolded:
      lrcType:
  meting:
    enable: true
    meting_api: # custom api
    options:
      id:
      server:
      type:
      auto:
```

#### Share Link / Card (v0.5.0+)

Disabled by default, currently supports `facebook`, `twitter`, `linkedin`, `reddit`, `weibo`, `qq`, `weixin`.

```yaml
share:
  # - facebook
  # - twitter
  # - linkedin
  # - reddit
  # - weibo
  # - qq
  # - weixin
```

For `weixin`, it generates a share card with QR code that can be saved locally and shared to WeChat Moments (Note: when the article cover has cross-origin issues, html-to-image cannot correctly generate cards with images!)

#### Homepage Category Cards (v0.6.0+)

Disabled by default. When enabled, it shows category cards on the homepage as an alternative to the widget categories

```yml
home_categories:
  enable: false # Show homepage category cards?
  content:
    - categories: # Category name (string)
      cover: # Card cover, uses random cover if not specified
    - categories:
      cover:
```

</details>

<details>
<summary>Built-in Card Shortcodes</summary>

### Built-in Card Shortcodes

#### friendLink Card

```yaml
{{< friendsLink >}}
```

No parameters, directly reads from the `data/friends.yml` file

#### postLinkCard - Internal Link Card

```yaml
{{<postLinkCard path="?" cover="?" escape="?" >}}
```

The first parameter is the article's `path`; the second parameter (optional) is the cover image shown on the card - if set to `auto`, it will automatically use the blog's `banner`; the third parameter (optional, `true | false`) indicates whether the article title should be escaped

#### externalLinkCard - External Link Card

```yaml
{{<externalLinkCard title="?" link="?" cover="?">}}
```

The first parameter is the article's title; the second parameter is the external link to the article; the third parameter (optional) is the cover image shown on the card - if set to `auto`, it will automatically use the default cover

#### Heat Map Card Article Heatmap (Experimental Feature in v0.8.0+)

```yaml
{{< heatMapCard levelStandard="?" >}}
```

The first parameter is the level standard for the heatmap (graded based on the word count of the articles), with the default value being `"1000,5000,10000"`.

</details>

<details>
<summary>Customize theme</summary>

#### Dynamic Theme Color Adaptation (Experimental Feature in v0.8.0+)

Disabled by default. When enabled, it dynamically generates theme colors based on the dominant color of the article's banner image, following Google's Material You design guidelines.

```yml
material_theme:
  enable: false # true | false
```

> Note: When this feature is enabled, the `crossorigin="anonymous"` attribute will be added to the `img` element of the banner to fetch the dominant color of the image. Please ensure your image server supports cross-origin access or use a third-party image proxy.

#### Manual Customizing Theme Colors

hugo-theme-reimu supports customizing theme colors through CSS variables. You can customize your theme colors by modifying the CSS variables under the `:root` pseudo-class.

~~The variables file is located at `assets/css/_variables.scss`. You can find all CSS variables there, but you only need to modify the variables under these pseudo-classes~~

v0.9.0 added `internal_theme` configuration to customize theme colors. You can change the theme colors by modifying the `internal_theme` configuration in `params.yml`. The default theme colors are as follows:

```yaml
internal_theme:
  light:
    --red-0: "#ff0000"
    --red-1: "#ff5252"
    --red-2: "#ff7c7c"
    --red-3: "#ffafaf"
    --red-4: "#ffd0d0"
    --red-5: "#ffecec"
    --red-5-5: "#fff3f3"
    --red-6: "#fff7f7"
    --color-red-6-shadow: "rgba(255, 78, 78, 0.6)"
    --color-red-3-shadow: "rgba(255, 78, 78, 0.3)"

    --highlight-nav: "#e6e6e6"
    --highlight-scrollbar: "#d6d6d6"
    --highlight-background: "#f7f7f7"
    --highlight-current-line: "#dadada"
    --highlight-selection: "#e9e9e9"
    --highlight-foreground: "#4d4d4d"
    --highlight-comment: "#7d7d7d"
    --highlight-red: "#c8362b"
    --highlight-orange: "#b66014"
    --highlight-yellow: "#cb911d"
    --highlight-green: "#2ea52e"
    --highlight-aqua: "#479d9d"
    --highlight-blue: "#1973b8"
    --highlight-purple: "#7135ac"
  dark:
    --red-4: "rgba(255, 208, 208, 0.5)"
    --red-5: "rgba(255,228,228,0.15)"
    --red-5-5: "rgba(255,236,236,0.05)"
    --red-6: "rgba(255, 243, 243, 0.2)"

    --highlight-nav: "#2e353f"
    --highlight-scrollbar: "#454d59"
    --highlight-background: "#22272e"
    --highlight-current-line: "#393939"
    --highlight-selection: "#515151"
    --highlight-foreground: "#cccccc"
    --highlight-comment: "#999999"
    --highlight-red: "#f47067"
    --highlight-orange: "#f69d50"
    --highlight-yellow: "#ffcc66"
    --highlight-green: "#99cc99"
    --highlight-aqua: "#66cccc"
    --highlight-blue: "#54b6ff"
    --highlight-purple: "#dcbdfb"
```

#### Customize theme font

You can define Google Fonts through the following configuration:

```yaml
# https://fonts.google.com/
font:
  enable: true # Enable Google Fonts
  article:
    - Mulish
    - Noto Serif SC
  code:
    # - Ubuntu Mono
    # - Source Code Pro
    # - JetBrains Mono
```

v0.2.0 added `local_font` configuration for defining local fonts, which has lower priority than Google Fonts:

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

v0.9.0 added `custom_font` configuration for defining custom fonts, which has the highest priority:

```yaml
custom_font:
  enable: true
  article:
    - css: https://fontsapi.zeoseven.com/292/main/result.css # font css
      name: LXGW WenKai # font css
  code:
```

#### Customizing Icons

##### Header / Sidebar Icons

The `menu` configuration structure changed in v0.1.0, allowing users to customize icons. When icon is empty, it defaults to using the Taichi icon. You can fill in a hexadecimal number to customize the icon, supporting both FontAwesome and icon font.

v0.10.2 icon supports image path, such as `/avatar/avatar.webp`.

```yaml
menu:
  - name: home
    url: /
    icon: # Default Taichi icon when empty
  - name: archives
    url: /archives
    icon: f0c1 # You can fill in a hexadecimal number to customize the icon
  - name: about
    url: /about
    icon:
  - name: friend
    url: /friend
    icon:
```

##### Footer / Back to Top / Sponsor Icons

v0.1.0 added `icon` configuration to `footer`, `top`, and `sponsor` for customizing icons.

- `url` is the icon path relative to `css/main.css`, so you need to go up one level to find the images folder.
- `rotate` determines whether to rotate the icon, default is `true`.
- `mask` determines whether to use the image as a mask (only showing PNG image outline), default is `true`.

```yaml
footer:
  icon:
    url: "../images/taichi.png" # Path relative to css/main.css
    rotate: true
    mask: true

top:
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

##### Loading Icon

v0.1.0 added `icon` configuration to `preloader` for customizing the loading icon. When icon is empty, it defaults to using inline SVG (ensuring first-screen loading speed). You can enter a link to customize the loading icon.

It's not recommended to use large icons to avoid affecting loading speed.

```yaml
preloader:
  enable: true
  text:
    zh-CN: 少女祈祷中...
    zh-TW: 少女祈禱中...
    en: Loading...
    ja: 少女祈祷中...
  icon: # Default uses inline SVG when empty, you can enter a link like '/images/taichi.png'
  rotate: true
```

##### Anchor Icon

v0.1.0 added `anchor_icon` configuration for customizing anchor icons. Default uses the `#` icon. You can fill in a hexadecimal number to customize the icon, supporting both FontAwesome and icon font.

```yaml
anchor_icon: # Default uses # icon when empty
```

##### Cursor Icon (v0.5.0+)

v0.5.0 added `reimu_cursor.cursor` configuration for customizing the cursor icon. You can fill in a path relative to `css/main.css` to customize the cursor icon.

```yaml
reimu_cursor:
  enable: true
  cursor:
    default: ../images/cursor/reimu-cursor-default.png
    pointer: ../images/cursor/reimu-cursor-pointer.png
    text: ../images/cursor/reimu-cursor-text.png
```

</details>

<details>
<summary>Vendor</summary>

`vendor` is used to store third-party resources such as fontawesome, iconfont, katex, mathjax, etc.

The `vendor` structure in hugo-theme-reimu is very flexible and supports the following formats:

- `:cdn|:package@:version/:file`: Uses CDN acceleration, for example `cdn_jsdelivr_gh|katex@0.13.11/dist/katex.min.css`. The `:cdn` can be configured in `vendor`. Currently includes the following CDN sources:
  ```yaml
  cdn_jsdelivr_gh: https://cdn.jsdelivr.net/gh/ # GitHub acceleration only
  cdn_jsdelivr_npm: https://cdn.jsdelivr.net/npm/ # NPM acceleration only
  fastly_jsdelivr_gh: https://fastly.jsdelivr.net/gh/ # GitHub acceleration only
  fastly_jsdelivr_npm: https://fastly.jsdelivr.net/npm/ # NPM acceleration only
  unpkg: https://unpkg.com/ # NPM acceleration only
  webcache: https://npm.webcache.cn/ # NPM acceleration only
  local: /resources/ # Local resources
  ```
  Users can switch CDN sources based on their network conditions.
- Starting with `https://:path`: Uses absolute links directly, such as `https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css`
- Starting with `:path`: Local resources. You can place resources in the `static` folder, then reference them using paths like `katex.min.css`

Additionally, `vendor` supports SRI (Subresource Integrity) verification. You can use `SHA-384` in `vendor` to verify resource integrity, for example:

```yaml
js:
  clipboard: # Using SRI verification
    src: webcache|clipboard@2.0.11/dist/clipboard.min.js
    integrity: sha384-J08i8An/QeARD9ExYpvphB8BsyOj3Gh2TSh1aLINKO3L0cMSH2dN3E22zFoXEi0Q
  lazysizes: webcache|lazysizes@5.3.2/lazysizes.min.js # Without SRI verification
```

Both formats are supported. It's recommended to use SRI verification for external CDN resources to ensure resource integrity.

</details>

## Contributors

[![](https://contributors-img.web.app/image?repo=D-Sketon/hugo-theme-reimu)](https://github.com/D-Sketon/hugo-theme-reimu/graphs/contributors)

## License

MIT
