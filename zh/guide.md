
# NoteGen

NoteGen 是一款的跨端的 `Markdown` 笔记应用，致力于使用 AI 建立记录和写作的桥梁，将碎片化知识整理成一篇可读的笔记。

## 为什么选择 NoteGen？

- 轻量，[安装包](https://github.com/codexu/note-gen/releases)**仅十几兆**，免费且无任何广告，无任何捆绑。
- 跨端，支持 Mac、Windows、Linux，得益于 `Tauri2` 的跨平台能力，未来将支持 IOS、Android。
- 支持`截图`、`文本`、`插图`、`文件`、`链接`等多种记录方式，满足各类场景的碎片化记录需求。
- 默认支持本地离线使用，原生 `Markdown(.md)` 作为存储格式，同时支持实时同步到 `Github 私有仓库`，支持历史回滚。
- AI 加持，可配置 ChatGPT、Gemini、Ollama、LM Studio、DeepSeek 等多种模型，支持自定义配置使用第三方模型。

## 截图

记录：

![record](https://github.com/user-attachments/assets/34f7fdc7-ebab-473f-ad8b-e2e93ed0f9e3)

写作：

![writing](https://s2.loli.net/2025/04/16/LcgMvUa86IpRi4V.png)

深色模式：

![dark](https://s2.loli.net/2025/04/14/9JhgTie2X4tZLdz.png)

## 从记录到写作

常规的笔记应用，通常不会提供记录的功能，用户需要手动进行复制粘贴的操作进行记录，大大降低了记录的效率，而面对零散的记录内容时，更是需要花费大量的精力进行整理。

NoteGen 分为`记录`和`写作`两个页面，其关系是：

- 记录可以整理为笔记，转移至写作页面进行深度编写。
- 写作时可以随时插入记录。

### 记录

记录功能类似 **AI 聊天机器人**，但与其对话时可以关联已记录的内容，将对话模式切换为整理模式，可以将记录整理成一篇可读的笔记。

以下这些辅助功能可以帮助你更好地进行记录：

- **标签**，用于区分不同的记录场景。
- **面具**，支持自定义 prompt，精准控制你的 AI 助手。
- **剪贴板助手**，可以自动识别剪贴板中的文本或图片，记录到列表中。

### 写作

写作是分为**文件管理器**和**Markdown 编辑器**两个部分。

**文件管理器**

- 支持管理本地 Markdown 文件和 Github 的同步文件。
- 支持无限层级目录。
- 支持多种排序方式。

**Markdown 编辑器**

- 支持所见即所得、即时渲染、分屏预览三种模式。
- 支持版本控制，可以回溯历史记录。
- 支持 AI 辅助，可以进行对话、续写、润色、翻译功能。
- 支持图床，可以将图片上传至图床，并转换为 Markdown 图片链接。
- 支持 HTML、Markdown 转换，可以复制浏览器内容，自动转换为 Markdown 格式。
- 支持大纲、数学公式、脑图、图表、流程图、甘特图、时序图、五线谱、多媒体、语音阅读、标题锚点、代码高亮及复制、graphviz 渲染、plantumlUML 图。
- 支持实时本地保存内容，延时（10s 未进行编辑）自动同步，历史回滚。

## 其他

- 全局搜索，可以快速搜索并跳转至指定的内容。
- 图床管理，可以方便的管理图床仓库的内容。
- 主题与外观，支持深色主题，支持 Markdown、代码等外观设置。
- 支持国际化，暂支持中文、英文。

## 如何使用？

### 下载

目前支持 Mac、Windows、Linux，得益于 Tauri2 的跨平台能力，未来将支持 IOS、Android。

[下载 NoteGen (alpha)](https://github.com/codexu/note-gen/releases)

### 增强

笔记本身可以无配置直接使用，如果你想得到更好的体验，请打开设置页面，对 AI 和同步进行配置。

## 交流群

欢迎加入 NoteGen 交流群，这里你可以向我提出问题，分享使用心得，或者提出改进建议。也可以以学习 Tauri 为目的，和我一起交流。

扫码加入[交流群](https://github.com/codexu/note-gen/discussions/110)，如果二维码失效，可以加微信 xu461229187 备注 NoteGen 进群。

## Contribute

- [阅读贡献指南](CONTRIBUTING.md)
- [更新计划](https://github.com/codexu/note-gen/issues/46)
- [提交 Bug 或改进建议](https://github.com/codexu/note-gen/issues)
- [讨论](https://github.com/codexu/note-gen/discussions)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=codexu/note-gen&type=Date)](https://www.star-history.com/#codexu/note-gen&Date)
