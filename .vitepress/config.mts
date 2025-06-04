import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NoteGen',
  description: 'NoteGen 官方文档，一款跨平台的 Markdown AI 笔记软件，致力于使用 AI 建立记录和写作的桥梁',
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
    ['meta', { name: 'keywords', content: 'markdown,nextjs,chatbot,webdav,assistant,openai,note-taking,notes-app,tauri,llm' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NoteGen' }],
    ['meta', { property: 'og:description', content: 'NoteGen 官方文档' }],
    ['meta', { property: 'og:image', content: 'https://notegen.top/app-icon.png' }],
    ['link', { rel: 'canonical', href: 'https://notegen.top' }]
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
    root: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/guide',
      themeConfig: {
        nav: [
          {
            text: '指南',
            link: '/zh/guide'
          },
          {
            text: '下载',
            link: '/zh/download'
          },
          {
            text: '贡献指南',
            link: '/zh/CONTRIBUTING.md'
          },
          {
            text: '更新日志',
            link: 'https://github.com/codexu/note-gen/releases'
          },
        ],
        sidebar: [
          {
            text: '从此开始',
            items: [
              { text: '项目简介', link: '/zh/guide' },
              { text: '客户端安装', link: '/zh/download' },
            ]
          },
          {
            text: '功能介绍',
            items: [
              { 
                text: '记录',
                items: [
                  { text: '记录工具', link: '/zh/preview/record' },
                  { text: 'AI 助手', link: '/zh/preview/chat' },
                  { text: 'AI 整理', link: '/zh/preview/organize' },
                ]
              },
              { 
                text: '写作',
                items: [
                  { text: '文件管理器', link: '/zh/preview/files' },
                  { text: 'Markdown 编辑器', link: '/zh/preview/writing' },
                ]
              },
              { text: '全局搜索', link: '/zh/preview/search' },
              { text: '图床', link: '/zh/preview/image' },
            ]
          },
          {
            text: '配置指南',
            items: [
              { text: 'AI', link: '/zh/settings/model-config' },
              { text: '默认模型', link: '/zh/settings/default-model' },
              { text: 'Prompt', link: '/zh/settings/prompt' },
              { text: '整理模板', link: '/zh/settings/organize-template' },
              { text: '同步', link: '/zh/settings/sync' },
              { text: '文件管理', link: '/zh/settings/file-manager' },
              { text: 'OCR', link: '/zh/settings/ocr' },
              { text: '快捷键', link: '/zh/settings/shortcut' },
              { text: '外观', link: '/zh/settings/appearance' },
              { text: '开发者', link: '/zh/settings/developer' },
            ]
          },
          {
            text: '问题&反馈',
            items: [
              { text: '常见问题', link: '/zh/faq' },
              { text: '反馈', link: '/zh/feedback' },
              { text: '更新日志', link: 'https://github.com/codexu/note-gen/releases' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/guide',
      themeConfig: {
        nav: [
          {
            text: 'Guide',
            link: '/en/guide'
          },
          {
            text: 'Download',
            link: '/en/download'
          },
          {
            text: 'Contribution Guide',
            link: '/en/CONTRIBUTING.md'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/codexu/note-gen/releases'
          },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/en/guide' },
              { text: 'Client Installation', link: '/en/download' },
            ]
          },
          {
            text: 'Features',
            items: [
              { 
                text: 'Recording',
                items: [
                  { text: 'Recording Tools', link: '/en/preview/record' },
                  { text: 'AI Assistant', link: '/en/preview/chat' },
                  { text: 'AI Organization', link: '/en/preview/organize' },
                ]
              },
              { 
                text: 'Writing',
                items: [
                  { text: 'File Manager', link: '/en/preview/files' },
                  { text: 'Markdown Editor', link: '/en/preview/writing' },
                ]
              },
              { text: 'Global Search', link: '/en/preview/search' },
              { text: 'Image Hosting', link: '/en/preview/image' },
            ]
          },
          {
            text: 'Configuration Guide',
            items: [
              { text: 'AI', link: '/en/settings/model-config' },
              { text: 'Default Model', link: '/en/settings/default-model' },
              { text: 'Prompt', link: '/en/settings/prompt' },
              { text: 'Organization Template', link: '/en/settings/organize-template' },
              { text: 'Synchronization', link: '/en/settings/sync' },
              { text: 'File Management', link: '/en/settings/file-manager' },
              { text: 'OCR', link: '/en/settings/ocr' },
              { text: 'Shortcuts', link: '/en/settings/shortcut' },
              { text: 'Appearance', link: '/en/settings/appearance' },
              { text: 'Developer', link: '/en/settings/developer' },
            ]
          },
          {
            text: 'Issues & Feedback',
            items: [
              { text: 'FAQ', link: '/en/faq' },
              { text: 'Feedback', link: '/en/feedback' },
              { text: 'Changelog', link: 'https://github.com/codexu/note-gen/releases' },
            ]
          }
        ]
      }
    },
  },
})