import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NoteGen',
  description: 'NoteGen 官方文档',
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
    ]
  ],
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
              { text: '记录', link: '/zh/preview/record' },
              { text: 'AI 助手', link: '/zh/preview/chat' },
              { text: 'AI 整理', link: '/zh/preview/organize' },
              { text: '写作', link: '/zh/preview/writing' },
              { text: '数据同步', link: '/zh/preview/sync' },
              { text: '图床', link: '/zh/preview/image' },
              { text: '全局搜索', link: '/zh/preview/search' },
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
              { text: '更新日志', link: '/zh/changelog' },
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
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Download', link: '/en/download' },
            ]
          }
        ]
      }
    },
  },
})