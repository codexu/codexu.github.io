import { defineConfig, DefaultTheme} from 'vitepress'

const themeConfig: DefaultTheme.Config = {
  nav: [
    {
      text: '指南',
      link: '/zh/guide',
      activeMatch: '/zh/guide/'
    },
    {
      text: '配置',
      link: '/zh/settings/sync',
      activeMatch: '/zh/settings/'
    },
    {
      text: '贡献',
      link: '/zh/CONTRIBUTING.md'
    },
    {
      text: '更新日志',
      link: 'https://github.com/codexu/note-gen/releases'
    },
  ],
  sidebar: {
    '/zh/guide/': {
      base: '',
      items: [
        {
          text: '从此开始',
          items: [
            { text: '项目简介', link: '/zh/guide/' },
            { text: '客户端安装', link: '/zh/guide/download' },
          ]
        },
        {
          text: '功能介绍',
          items: [
            { text: '记录工具', link: '/zh/guide/preview/record' },
            { text: 'AI 助手', link: '/zh/guide/preview/chat' },
            { text: 'AI 整理', link: '/zh/guide/preview/organize' },
            { text: '写作', link: '/zh/guide/preview/writing' },
            { text: '全局搜索', link: '/zh/guide/preview/search' },
            { text: '图床', link: '/zh/guide/preview/image' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: '快捷键', link: '/zh/guide/shortcuts' },
            { text: '常见问题', link: 'https://github.com/codexu/note-gen/issues/92' },
            { text: '反馈', link: 'https://github.com/codexu/note-gen/discussions/110' },
            { text: '更新日志', link: 'https://github.com/codexu/note-gen/releases' },
          ]
        }
      ]
    },
    '/zh/settings/': {
      base: '',
      items: [
        {
          items: [
            { text: '同步配置', link: '/zh/settings/sync' },
            { text: '图床配置', link: '/zh/settings/image-hosting' },
            { text: '备用方案', link: '/zh/settings/backup' },
          ]
        },
        {
          items: [
            { text: '模型配置', link: '/zh/settings/model-config' },
            { text: '默认模型', link: '/zh/settings/default-model' },
            { text: '知识库', link: '/zh/settings/rag' },
            { text: 'Prompt', link: '/zh/settings/prompt' },
            { text: '整理模板', link: '/zh/settings/organize-template' },
          ]
        },
        {
          items: [
            { text: '文件管理', link: '/zh/settings/file-manager' },
            { text: 'OCR', link: '/zh/settings/ocr' },
            { text: '开发者', link: '/zh/settings/developer' },
          ]
        },
      ]
    },
  },
}

export default themeConfig;