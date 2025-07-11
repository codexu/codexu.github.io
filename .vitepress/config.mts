import { defineConfig } from 'vitepress'
import zhConfig from '../zh/config.mts'
import enConfig from '../en/config.mts'

export default defineConfig({
  title: 'NoteGen',
  description: 'NoteGen是一款跨平台的 Markdown AI 笔记软件，致力于使用人工智能建立记录和写作的桥梁。NoteGen is a cross-platform Markdown AI note-taking software that bridges recording and writing with artificial intelligence.',
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SEWZ8WZX0C'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SEWZ8WZX0C');"
    ],
    ['meta', { name: 'author', content: 'codexu' }],
    ['meta', { name: 'keywords', content: 'markdown,nextjs,chatbot,webdav,assistant,openai,note-taking,notes-app,tauri,llm,AI笔记,人工智能笔记,AI助手,跨平台笔记,AI写作,markdown编辑器,ai note,artificial intelligence,cross-platform,note-taking app' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NoteGen - AI驱动的跨平台笔记应用 | Cross-platform AI Note-taking App' }],
    ['meta', { property: 'og:description', content: 'NoteGen是一款跨平台的 Markdown AI 笔记软件，致力于使用人工智能建立记录和写作的桥梁' }],
    ['meta', { property: 'og:image', content: 'https://notegen.top/app-icon.png' }],
    ['link', { rel: 'canonical', href: 'https://notegen.top' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'alternate', hreflang: 'zh', href: 'https://notegen.top/zh/guide' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: 'https://notegen.top/en/guide' }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: 'https://notegen.top' }]
  ],
  sitemap: {
    hostname: 'https://notegen.top'
  },
  themeConfig: {
    logo: '/app-icon.png',
    logoLink: '/',
    editLink: {
      pattern: 'https://github.com/codexu/note-gen-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present codexu'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/codexu/note-gen' }
    ]
  },
  locales: {
    zh: { 
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: zhConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en',
      themeConfig: enConfig
    },
  },
})