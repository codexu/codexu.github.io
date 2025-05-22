---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NoteGen"
  text: "一个跨平台笔记应用"
  tagline: 使用 AI 建立记录和写作的桥梁
  image:
    src: /app-icon.png
    alt: NoteGen Logo
    width: 180
    height: 180
  actions:
    - theme: brand
      text: 快速入门
      link: /zh/guide
    - theme: alt
      text: 下载
      link: /zh/download

features:
  - title: 轻量
    details: 安装包仅十几兆，免费且无任何广告，无任何捆绑。
  - title: 跨端
    details: 支持 Mac、Windows、Linux，得益于 `Tauri2` 的跨平台能力，未来将支持 IOS、Android
  - title: 多种记录方式
    details: 支持`截图`、`文本`、`插图`、`文件`、`链接`等多种记录方式，满足各类场景的碎片化记录需求
  - title: 数据安全
    details: 默认支持本地离线使用，原生 `Markdown(.md)` 作为存储格式，同时支持实时同步到 `Github 私有仓库`，支持历史回滚
  - title: AI 加持
    details: 可配置 ChatGPT、Gemini、Ollama、LM Studio、DeepSeek 等多种模型，支持自定义配置使用第三方模型。
---


