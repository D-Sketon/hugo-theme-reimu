
<div align = center>
  <img src="https://fastly.jsdelivr.net/gh/D-Sketon/blog-img/icon.png"/>
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

<img src="https://cdn.jsdelivr.net/gh/D-Sketon/hugo-theme-reimu/images/screenshot.png"/>
</div>

A Hakurei Reimu style Hugo theme. Migrated from [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu).

---

| framework                    | repository                                                         | version                                                                                                                                                                                     | stars                                                                                              |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Hexo](https://hexo.io/)     | [hexo-theme-reimu](https://github.com/D-Sketon/hexo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhexo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hexo-theme-reimu">  |
| [Hugo](https://gohugo.io)    | [hugo-theme-reimu](https://github.com/D-Sketon/hugo-theme-reimu)   | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fhugo-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version">  | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/hugo-theme-reimu">  |
| [Astro](https://astro.build) | [astro-theme-reimu](https://github.com/D-Sketon/astro-theme-reimu) | <img alt="version" src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FD-Sketon%2Fastro-theme-reimu%2Fraw%2Fmain%2Fpackage.json&query=%24.version&label=version"> | <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/D-Sketon/astro-theme-reimu"> |

**ISSUE and PR Welcome!**

## Features

### Basic Functions

- ✨ Full blog functionality
- 🔄 Compatible with Hugo 0.124.0+
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
  - Disqus
  - Utterances

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

- 📑 Table of Contents
- 🔄 PJAX support
- 🔧 ServiceWorker implementation
- 📰 RSS feed

### Design & Customization

- 🎨 Icon support:
  - Iconfont
  - FontAwesome7
- 🔗 Built-in shortcodes:
  - Internal links
  - External links
  - Friend links
  - Heatmap
  - Tag Roulette
  - Alert Blockquote
  - Tabs
  - Gallery
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

- If the article's Front matter contains cover set to `false`, the article won't display a header image (homepage thumbnail will still show random images)

```yaml
---
title: Hello World
cover: false
---
```

- If the article's Front matter contains cover set to `rgb(xxx,xxx,xxx)`, the article header will be a gradient of that solid color (homepage thumbnail will still show random images)

```yaml
---
title: Hello World
cover: rgb(255,117,117)
---
```

- Otherwise, the homepage thumbnail will look for `covers.yml` in the `data` folder and randomly select an image; the in-article header image will look for the `cover` configuration in `params.yml`
- If none of the above files/configurations exist, it will display the `banner` header image as a fallback

#### Banner

The banner is saved at `themes/hugo-theme-reimu/static/images/banner.webp`. You can modify the path and name in `params.yml`

```yaml
banner: "images/banner.webp"
```

#### Favicon

The favicon is saved at `themes/hugo-theme-reimu/static/favicon.ico`. You can replace it with your own file.

#### Article Summary

Disabled by default. You can choose to display the article summary in the subtitle or at the beginning of the article.

```yaml
summary:
  enable: false
  style: 'subtitle' # 'subtitle' or 'blockquote'
```

</details>

<details>

<summary>Sidebar</summary>

### Sidebar

#### Sidebar Position

Default on the right. You can modify it in `params.yml`.

```yaml
sidebar:
  position: right # left | right | false
  menu: true # whether to show the sidebar menu button, ignored on mobile devices
  article:
    show_common: true # whether to show common sidebar on article pages, ignored on mobile devices
```

Additionally, you can control it through the article's front-matter, which takes precedence over the global configuration.

```yaml
---
sidebar: left # left | right | false
---
```

> When sidebar is set to false, the sidebar will be hidden, and the aplayer player and widgets will not be displayed at the same time.

#### TOC

Default enabled. You can modify it in `params.yml`.

```yaml
toc: true # true | false
```

Additionally, you can control it through the article's front-matter, which takes precedence over the global configuration.

```yaml
---
toc: true # true | false
---
```

#### Social Links

You can configure the social links in the sidebar in `params.yml`.

```yaml
social:
  # github: https://github.com/yourname
  # bilibili: https://space.bilibili.com/yourname
  # ...
```

#### Widgets

You can configure the widgets in the sidebar in `params.yml`.

```yaml
widgets:
  - category
  - tag
  - tagcloud
  - recent_posts
```

You can also configure the behavior of the widgets through the following configuration:

```yaml
category_limits: 10
tag_limits: 10
recent_posts_limits: 5
tagcloud_limits: 20
```

</details>
<details>
<summary>Footer</summary>

### Footer

#### Basic Information

The footer section allows you to configure basic display information and statistics.

```yaml
footer:
  since: 2020 # The starting year displayed in the copyright information (e.g., 2020-current year)
  powered: true # Whether to display copyright information
  count: true # Whether to display word count and reading time statistics
  busuanzi: true # Whether to enable Busuanzi visitor counting statistics
```

#### ICP Filing

For websites hosted in mainland China, you can display ICP filing information as required by regulations.

```yaml
icp:
  icpnumber: # ICP filing number
  beian: # Public Security Bureau filing number
  recordcode: # Record code parameter from the Public Security Bureau filing link
```

#### Moe ICP Filing (v0.12.1+)

[Moe ICP Filing](https://icp.gov.moe/)

```yaml
moe_icp:
  icpnumber: # Moe ICP filing number
```

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
Please refer to their official documentation to complete the `LeanCloud` configuration, then set `valine.enable` to `true` in `params.yml` and fill in your `appId` and `appKey`

```yaml
valine:
  enable: true
  appId: "your appId"
  appKey: "your appKey"
  pageSize: 10 # comment list page size
  avatar: mp # gravatar style https://valine.js.org/#/avatar
  # lang: zh-cn # deprecated, use html.lang instead
  placeholder: Just go go # valine comment input placeholder(like: Please leave your footprints )
  guest_info: nick,mail,link #valine comment header info
  recordIP: true # whether to record the IP address of the commenters
  highlight: true # whether to highlight the code blocks
  visitor: false # whether to display the number of visitors
  serverURLs: # leancloud server url
```

If using [Waline](https://waline.js.org/)  
Please refer to their [official documentation](https://waline.js.org/guide/get-started/) to complete the `LeanCloud` configuration, then set `waline.enable` to `true` in `params.yml` and fill in your `serverURL`

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
Please refer to their [official documentation](https://twikoo.js.org/quick-start.html) to complete Tencent Cloud or Vercel deployment, then set `twikoo.enable` to `true` in `params.yml` and fill in your `envId`

```yml
twikoo:
  enable: true
  envId: # Tencent cloud environment fill envId; Vercel environment fill address (https://xxx.vercel.app)
  region:
```

If using [giscus](https://giscus.app/)  
Please refer to the documentation to complete repository configuration, then set `giscus.enable` to `true` in `params.yml` and fill in the corresponding data

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
Please refer to their [official documentation](https://github.com/gitalk/gitalk?tab=readme-ov-file#usage) to complete repository configuration, then set `gitalk.enable` to `true` in `params.yml` and fill in the corresponding data

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

If using [Disqus](https://disqus.com/)  
Please set `disqus.enable` to `true` in `params.yml`, and fill in your `shortname`

```yml
disqus:
  enable: true
  shortname: "your shortname"
  count: true # Whether to enable comment count statistics
```

If using utterance [utterances](https://utteranc.es/)  
Please set `utterances.enable` to `true` in `params.yml` and fill in your own `repo`

```yml
utterances:
  enable: true
  repo: owner/repo # Change this to "Your GitHub Username/The Repository Name" used for storing blog comments
  issue_term: title
  theme: github-light # You can use auto to automatically adapt to dark and light themes
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

> Note: Do not enable both KaTeX and MathJax3 at the same time.

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

Besides, you can configure Mermaid in `params.yml`:

```yaml
mermaid:
  zoom: false # whether to enable zooming
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
    - src: webcache|@fortawesome/fontawesome-free@7.1.0/css/regular.min.css
      integrity: sha384-4qYppzjH8EiA+cGdaubu2vL7Rk8WGiqCSj7oRuP1uwtFWkfKNHD20lPfcrbQc8dU
    - src: webcache|@fortawesome/fontawesome-free@7.1.0/css/solid.min.css
      integrity: sha384-wbMWab3UDSPm2kvIgVOn/d9KPTecgPU1+Nb3zoQrm/oVu0EkPL6IaKinjbwW0rum
  low_priority:
    - src: webcache|@fortawesome/fontawesome-free@7.1.0/css/brands.min.css
      integrity: sha384-KTGeC2hIMzpeQakhsmzB9bZfhCD5xZZCgI1iZH6f/O457SxzlkzTQg/WXFNoi3ih
    - src: webcache|@fortawesome/fontawesome-free@7.1.0/css/v5-font-face.min.css
      integrity: sha384-nJ1ThfldViXoLpJ6jlKcP2beas8BMbYq26SG9Hi8cH89bZi4RZ644v7helMCqJxd
    - src: webcache|@fortawesome/fontawesome-free@7.1.0/css/v4-font-face.min.css
      integrity: sha384-UlkrhOIvZxJFd4MElSUp7ow6/RUeYKi/orfCZIRRiOENFuQPIAA3T3HjYfmBRhNq
```

</details>

<details>
<summary>Extended features</summary>

### Extended features

#### Back to Top

Enabled by default

```yaml
top:
  enable: true
  position: right # left | right
```

#### Dark Mode

The default setting is `auto`, which automatically switches based on the user's system settings. It can be set to `true` or `false` to change the default state.

```yaml
dark_mode:
  # true means that the dark mode is enabled by default
  # false means that the dark mode is disabled by default
  # auto means that the dark mode is automatically switched according to the system settings
  enable: auto # true | false | auto
```

#### Analytics

Disabled by default, supports Baidu Analytics, Google Analytics and Microsoft Clarity

```yaml
baidu_analytics: false
google_analytics: false
clarity: false
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
  disable_on_mobile: false # whether to disable on mobile devices, which can improve performance
  options: # mouse-firework options
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
  - src: 
    - "/images/banner.avif"
    - "/images/banner.webp" # support array format
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
  ignores: [] # Ignore the specified link, only support string array
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

##### Music Player Position (v0.12.1+)

Default is after sidebar

```yml
player:
  position: before_sidebar # before_sidebar / after_sidebar / after_widget
```

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

#### Injector (v0.6.3+)

Used to inject custom code, similar to [Hexo#Injector](https://hexo.io/api/injector), supports `head`, `body` and `sidebar` injection

```yaml
injector:
  head_begin: # Inject code snippet right after <head>
  head_end: # Inject code snippet right before </head>
  body_begin: # Inject code snippet right after <body>
  body_end: # Inject code snippet right before </body>
  sidebar_begin: # Inject code snippet right after <aside>
  sidebar_end: # Inject code snippet right before </aside>
```

#### Triangle Badge (v0.13.2+)

Disabled by default. When enabled, it will display a triangle badge in the upper right corner, supporting custom links and icons.

```yaml
triangle_badge:
  enable: false
  icon: github # Same as the icon in the social config
  link: https://github.com/D-Sketon/hexo-theme-reimu
```

</details>

<details>
<summary>Built-in Shortcodes</summary>

### Built-in Shortcodes

#### friendLink Card

```markdown
{{< friendsLink >}}
```

No parameters, directly reads from the `data/friends.yml` file

#### postLinkCard - Internal Link Card (Not recommended, use Link Card instead)

```markdown
{{<postLinkCard path="?" cover="?" escape="?" >}}
```

Not recommended for use. It is advised to use the `link` shortcode instead.

The first parameter is the article's `path`; the second parameter (optional) is the cover image shown on the card - if set to `auto`, it will automatically use the blog's `banner`; the third parameter (optional, `true | false`) indicates whether the article title should be escaped

#### externalLinkCard - External Link Card (Not recommended, use Link Card instead)

```markdown
{{<externalLinkCard title="?" link="?" cover="?">}}
```

Not recommended for use. It is advised to use the `link` shortcode instead.

The first parameter is the article's title; the second parameter is the external link to the article; the third parameter (optional) is the cover image shown on the card - if set to `auto`, it will automatically use the default cover

#### Heat Map Card Article Heatmap (v0.8.0+)

```markdown
{{< heatMapCard levelStandard="?" >}}
```

The first parameter is the level standard for the heatmap (graded based on the word count of the articles), with the default value being `"1000,5000,10000"`.

#### tagRoulette (v0.12.0+)

```markdown
{{< tagRoulette tags="?" icon="?" >}}
```

tagRoulette is an interactive element that provides a random tag display feature. When the button is clicked, a tag is randomly selected and displayed from a predefined pool of tags.

- tags: Optional parameter specifying the tag pool. Multiple tags should be separated by English commas (,). If not provided, a few example tags will be used by default. Example: `tags="memory decline, loss of expression, increased laziness, numbness, so sleepy"`
- icon: Optional parameter to customize the trigger button's icon. Default: 🕹️ (game controller emoji), can be replaced with any emoji or text, such as 🎲, 🎯, 🔄, etc.

#### alertBlockquote (v0.12.1+)

```markdown
{{< alertBlockquote type="?" >}}
Your content here
{{</alertBlockquote>}}
```

It is applicable to scenarios where Hugo v0.132.0 or lower cannot use Hugo Blockquote render hooks.

The first parameter is the type of block quote, with the following optional parameters: `note`, `tip`, `important`, `warning`, `danger`

#### Link Card (v0.14.0+)

```markdown
{{< link title="?" link/path="?" cover="?" escape="?" >}}
```

An upgraded version of `externalLinkCard` and `postLinkCard`, recommended for use.

- **title**: The title of the link card. Can be omitted for internal links, in which case the article title will be used automatically.
- **link/path**: The URL of the link. For compatibility, both `link` and `path` can be used, and they have the same effect.
- **cover**: The cover image displayed on the card. If set to `auto`, the blog's `banner` or a default cover will be used automatically.
- **escape**: Whether the article title should be escaped. Values are `true | false`, with `true` as the default.

#### Tabs (v0.14.0+)

```markdown
{{< tabs [activeTab] ["center"] >}}
<!-- tabName -->
Tab content
<!-- tabName -->
Tab content
{{< /tabs >}}
```

Adapted from the next, volantis, and stellar themes, this feature supports creating tabbed switching effects within articles.

- activeTab: Optional parameter, specifies the default active tab index (counting starts from 1). Default is 1.
- "center": Optional parameter, specifies that tab titles should be center-aligned. Default is left-aligned.
- tabName: The title of each tab, must be wrapped in `<!-- tabName -->`. Supports displaying icons using `@` + icon hexadecimal code. Examples:
  - Title only: `<!-- Title -->`
  - Icon only: `<!-- @e60c -->`
  - Icon + Title: `<!-- Title@e60c -->`

#### Gallery Photo Wall (v0.14.0+)

```markdown
{{< gallery >}}
![alt text](image_url1)
![alt text](image_url2)
...
{{</gallery>}}

Display multiple images in a photo wall format, supporting automatic arrangement and responsive layout.

#### grid Grid Layout (v0.14.1+)

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

Display content in a grid layout with responsive design.

- width: Optional parameter, sets the minimum column width, e.g., `300` means a minimum column width of 300px. Default is `240`
- col: Optional parameter, sets a fixed number of columns, e.g., `3` means a fixed 3-column layout. Default is auto column count
- Use `<!-- cell -->` to separate each grid cell, and each cell's content will be rendered independently

#### details Foldable Panel (v0.14.1+)

```markdown
{{< details summary="?" >}}
Content
{{< /details >}}
```

Create a foldable panel in the article.

- summary: Optional parameter, set the title of the foldable panel

</details>

<details>
<summary>Customize theme</summary>

### Customize theme

#### Dynamic Theme Color Adaptation (Experimental Feature in v0.8.0+)

Disabled by default. When enabled, it dynamically generates theme colors based on the dominant color of the article's banner image, following Google's Material You design guidelines.

```yml
material_theme:
  enable: false # true | false
```

> Note: When this feature is enabled, the `crossorigin="anonymous"` attribute will be added to the `img` element of the banner to fetch the dominant color of the image. Please ensure your image server supports cross-origin access or use a third-party image proxy.

#### Manual Customizing Theme Colors

hugo-theme-reimu supports customizing theme colors through CSS variables. You can customize your theme colors by modifying the CSS variables under the `:root` pseudo-class.

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

    --highlight-nav: "#f5f5f5"
    --highlight-scrollbar: "#d6d6d6"
    --highlight-background: "#fdfdfd"
    --highlight-selection: "#e9e9e988"
    --highlight-foreground: "#24292e"
    --highlight-comment: "#7d7d7d"
    --highlight-red: "#d73a49"
    --highlight-orange: "#e36209"
    --highlight-yellow: "#cb911d"
    --highlight-green: "#22863a"
    --highlight-aqua: "#005cc5"
    --highlight-blue: "#032f62"
    --highlight-purple: "#6f42c1"
    --highlight-deletion: "#b31d28"
    --highlight-deletion-bg: "#ffeef0"
    --highlight-addition: "#22863a"
    --highlight-addition-bg: "#f0fff4"
  dark:
    --red-4: "rgba(255, 208, 208, 0.5)"
    --red-5: "rgba(255,228,228,0.15)"
    --red-5-5: "rgba(255,236,236,0.05)"
    --red-6: "rgba(255, 243, 243, 0.2)"

    --highlight-nav: "#222830"
    --highlight-scrollbar: "#454d59"
    --highlight-background: "#1e2027"
    --highlight-selection: "#51515155"
    --highlight-foreground: "#c9d1d9"
    --highlight-comment: "#8b949e"
    --highlight-red: "#ff7b72"
    --highlight-orange: "#ffa657"
    --highlight-yellow: "#ffcc66"
    --highlight-green: "#7ee787"
    --highlight-aqua: "#a5d6ff"
    --highlight-blue: "#79c0ff"
    --highlight-purple: "#d2a8ff"
    --highlight-deletion: "#ffa198"
    --highlight-deletion-bg: "#490202"
    --highlight-addition: "#7ee787"
    --highlight-addition-bg: "#04260f"
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

The `menu` configuration structure changed in v0.1.0, allowing users to customize icons. When icon is empty, it defaults to using the Taichi icon. You can fill in a hexadecimal number to customize the icon, supporting both FontAwesome, icon font and `false`.

v0.10.2 icon supports image path, such as `/avatar/avatar.webp`.

```yaml
menu:
  - name: home
    url: /
    icon: # Default Taichi icon when empty
  - name: archives
    url: /archives
    icon: f0c1 # You can fill in a hexadecimal number to customize the icon. If set to false, no icon will be displayed.
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
    url: "../images/taichi.png" # Path relative to css/main.css. If set to false, no icon will be displayed
    rotate: true
    mask: true

top:
  icon:
    url: "../images/taichi.png"
    rotate: true
    mask: true

sponsor:
  icon:
    url: "../images/taichi.png" # If set to false, no icon will be displayed
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

v0.11.0 `anchor_icon` supports passing `false` to hide anchor icon

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

#### Custom Scroll Animation

Based on [AOS.js](https://github.com/D-Sketon/aos.js) scroll animation effects, default is `true`, you can enable or disable through the following configuration, and set different animation effects for different pages.

```yaml
animation:
  enable: true
  options:
    header:
    home:
    article:
    archive:
```

**Available Animation Effects:**

- **Fade**: fade, fade-up, fade-down, fade-left, fade-right, fade-up-right, fade-up-left, fade-down-right, fade-down-left
- **Flip**: flip-up, flip-down, flip-left, flip-right
- **Slide**: slide-up, slide-down, slide-left, slide-right
- **Zoom**: zoom-in, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right, zoom-out, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right

#### Custom Styles

You can customize the maximum width of the main content area by modifying `layout.max_width`, default is `1350px`.

```yaml
layout:
  max_width: 1350px # Maximum width of the main content area
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

<details>
<summary>Front-matter Fields</summary>

### Front-matter Fields

| meta        | Description                                                                | Type                         | Value Logic                               | Version       |
| ----------- | -------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------- | ------------- |
| title       | Title                                                                      | `string`                     | -                                         | Hugo Built-in |
| date        | Article creation time                                                      | `datetime`                   | -                                         | Hugo Built-in |
| lastmod     | Article last modified time                                                 | `datetime`                   | -                                         | Hugo Built-in |
| summary     | Article summary                                                            | `string`                     | -                                         | Hugo Built-in |
| weight      | Article weight, used for sorting/pinning                                   | `int`                        | -                                         | Hugo Built-in |
| categories  | Article categories                                                         | `string[]`                   | -                                         | 0.0.1         |
| tags        | Article tags                                                               | `string[]`                   | -                                         | 0.0.1         |
| description | Article description                                                        | `string`                     | -                                         | 0.0.1         |
| mermaid     | Whether to enable mermaid (requires configuration with `mermaid` settings) | `boolean`                    | `false`                                   | 0.0.1         |
| math        | Whether to enable LaTeX (requires configuration with `math` settings)      | `boolean`                    | `false`                                   | 0.0.1         |
| link        | Directs the article to an external link                                    | `string`                     | -                                         | 0.0.1         |
| copyright   | Whether to enable article copyright notice                                 | `boolean`                    | Defaults to global config if not provided | 0.0.1         |
| sponsor     | Whether to enable article sponsorship                                      | `boolean`                    | Defaults to global config if not provided | 0.0.1         |
| comments    | Whether to enable article comments                                         | `boolean`                    | Defaults to global config if not provided | 0.0.1         |
| photos      | Article photo gallery                                                      | `string[]`                   | -                                         | 0.0.1         |
| sidebar     | Article sidebar position                                                   | `false \| 'left' \| 'right'` | Defaults to global config if not provided | 0.5.0         |
| toc         | Whether to enable article table of contents                                | `boolean`                    | Defaults to global config if not provided | 0.7.0         |
| outdated    | Whether the article is outdated                                            | `boolean`                    | Defaults to global config if not provided | 0.13.1        |
| author      | Article author (used for article copyright and sharing cards)              | `string`                     | Defaults to global config if not provided | 0.13.2        |
| keywords    | Article keywords for SEO                                                   | `string[] \| string`         | Defaults to global config if not provided | 0.13.4        |
</details>

## Contributors

[![](https://contributors-img.web.app/image?repo=D-Sketon/hugo-theme-reimu)](https://github.com/D-Sketon/hugo-theme-reimu/graphs/contributors)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=D-Sketon/hugo-theme-reimu&type=date&legend=top-left)](https://www.star-history.com/#D-Sketon/hugo-theme-reimu&type=date&legend=top-left)

## License

MIT
