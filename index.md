---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NoteGen"
  text: "一款跨平台的 Markdown AI 笔记软件"
  tagline: 致力于使用 AI 建立记录和写作的桥梁
  image:
    src: /app-icon.png
    alt: NoteGen Logo
    width: 180
    height: 180
  actions:
    - theme: brand
      text: 下载客户端
      link: /zh/download
    - theme: alt
      text: 快速入门
      link: /zh/guide
    - theme: alt
      text: Github
      link: https://github.com/codexu/note-gen

features:
  - title: 轻量
    icon:
      light: /box.svg
      dark: /box_white.svg
    details: 安装包仅十几兆，免费且无任何广告，无任何捆绑。
  - title: 全平台支持
    icon:
      light: /monitor.svg
      dark: /monitor_white.svg
    details: 支持 Mac、Windows、Linux，即将支持 IOS、Android。
  - title: 数据安全
    icon:
      light: /shield.svg
      dark: /shield_white.svg
    details: 本地离线存储，支持同步到 Github、Gitee、WebDAV。
  - title: AI 助手
    icon:
      light: /bot.svg
      dark: /bot_white.svg
    details: 支持自定义配置主流 AI 模型，协助你完成记录、写作、整理等任务。
---

<FeatureShow />

<script setup>
import FeatureShow from './components/FeatureShow.vue'

// 检测浏览器语言并重定向到相应的语言版本
if (typeof window !== 'undefined') {
  // 获取浏览器首选语言
  const userLang = navigator.language || navigator.userLanguage;
  const preferredLang = userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  
  // 获取当前路径
  const currentPath = window.location.pathname;
  
  // 仅当在根路径时进行重定向，避免重复重定向
  if (currentPath === '/' || currentPath === '/index.html') {
    // 如果用户首选语言是中文，则重定向到中文版首页，否则重定向到英文版首页
    const targetPath = preferredLang === 'zh' ? '/zh/' : '/en/';
    window.location.href = targetPath;
  }
}
</script>