import { defineConfig, DefaultTheme} from 'vitepress'

const themeConfig: DefaultTheme.Config = {
  nav: [
    {
      text: 'Guide',
      link: '/en/guide',
      activeMatch: '/en/guide/'
    },
    {
      text: 'Settings',
      link: '/en/settings/sync',
      activeMatch: '/en/settings/'
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
  sidebar: {
    '/en/guide/': {
      base: '',
      items: [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/en/guide/' },
            { text: 'Client Installation', link: '/en/guide/download' },
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Recording Tools', link: '/en/guide/preview/record' },
            { text: 'AI Assistant', link: '/en/guide/preview/chat' },
            { text: 'AI Organization', link: '/en/guide/preview/organize' },
            { text: 'Writing', link: '/en/guide/preview/writing' },
            { text: 'Global Search', link: '/en/guide/preview/search' },
            { text: 'Image Hosting', link: '/en/guide/preview/image' },
          ]
        },
        {
          text: 'Others',
          items: [
            { text: 'Shortcuts', link: '/en/guide/shortcuts' },
            { text: 'FAQ', link: 'https://github.com/codexu/note-gen/issues/92' },
            { text: 'Feedback', link: 'https://github.com/codexu/note-gen/discussions/110' },
            { text: 'Changelog', link: 'https://github.com/codexu/note-gen/releases' },
          ]
        }
      ]
    },
    '/en/settings/': {
      base: '',
      items: [
        {
          items: [
            { text: 'Synchronization', link: '/en/settings/sync' },
            { text: 'Image Hosting', link: '/en/settings/image-hosting' },
            { text: 'Backup Solution', link: '/en/settings/backup' },
          ]
        },
        {
          items: [
            { text: 'Model Configuration', link: '/en/settings/model-config' },
            { text: 'Default Model', link: '/en/settings/default-model' },
            { text: 'Knowledge Base', link: '/en/settings/rag' },
            { text: 'Prompt', link: '/en/settings/prompt' },
            { text: 'Organization Template', link: '/en/settings/organize-template' },
          ]
        },
        {
          items: [
            { text: 'File Management', link: '/en/settings/file-manager' },
            { text: 'Editor', link: '/en/settings/editor' },
            { text: 'OCR', link: '/en/settings/ocr' },
            { text: 'Developer', link: '/en/settings/developer' },
            { text: 'Appearance', link: '/en/settings/appearance' },
          ]
        },
      ]
    },
  },
}

export default themeConfig;