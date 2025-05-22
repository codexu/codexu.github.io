# 贡献指南

💗 NoteGen 是一个开源且免费的社区项目，我们将持续为爱发电，并接受任何形式的贡献。 💗

---

Hi! 非常感谢你参与 NoteGen 的贡献！在此之前，请花一些时间阅读以下内容：

## 如何贡献

不论是贡献代码还是提交问题，都应该先创建 Issue。

### Issues

请始终使用 https://github.com/codexu/note-gen/issues 创建新问题，尽量详细描述问题，包括重现步骤、预期行为和实际行为。

### Discussions

如果你想发起讨论，可以使用 https://github.com/codexu/note-gen/discussions，或加入 [交流群](https://github.com/codexu/note-gen/discussions/110)。

### Pull Request

- 在修复 bug 前，请先检查 issues 是否具有相同的问题。
- 如果你要开发一个功能，请先提交 issue，与项目维护者讨论该功能是否被需要，这有助于节省维护者和贡献者的时间。

## 技术栈

NoteGen 主要用到以下几个技术栈：

- [Tauri 2](https://v2.tauri.app/)
- [Next.js 15](https://nextjs.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
  
- 查看 [package.json](https://github.com/codexu/note-gen/blob/dev/package.json) 中前端依赖包。
- 查看 [src-tauri/Cargo.toml](https://github.com/codexu/note-gen/blob/dev/src-tauri/Cargo.toml) 中 Rust 依赖包。

如果你本次贡献需要更新或添加依赖，请在 issue 中添加 `package.json` 或 `src-tauri/Cargo.toml` 的更新说明。

## 开发环境

请先阅读 [Tauri 2 前置要求](https://v2.tauri.app/zh-cn/start/prerequisites/) 文档，按照文档要求配置开发环境。

环境装好后，**fork** 仓库到你的 GitHub 账号下，然后克隆到本地：

```bash
# 1. fork 到你的 GitHub 账号下

# 2. 克隆到本地
git clone https://github.com/your-username/note-gen.git
```

然后进入项目目录，安装依赖：

```bash
# 3. 进入项目目录 & 安装依赖
cd note-gen
pnpm install

# 4. 启动本地开发，如果遇到白屏情况，尝试右键 reload。
pnpm tauri dev
```

## 目录说明

- `src`：前端应用目录。
  - `apps`：前端应用目录。
    - `core`：主应用核心功能目录。
      - `article`：写作。
      - `image`：图床管理。
      - `record`： 记录。
      - `search`：搜索。
      - `setting`：设置。
    - `screenshot`：截图窗口。
  - `components`：组件目录，shadcn 和通用组件。
  - `lib`：常用工具库，例如 ai、github 请求等。
  - `db`：SQLite 数据库。
  - `store`：状态管理目录，采用 zustand。
- `src-tauri`：Rust 代码目录。
- `messages`：多语言配置目录。

## Pull Request 指南

NoteGen 未使用 master 或 main 分支，一切发开都在 dev 分支下进行，通过合并到 release 分之后触发 Github Action 进行版本发布和构建。

Fork 仓库后，请使用 dev 分支创建一个新的分支，命名为本次贡献的名称，例如 `fix/123` 或 `feat/121`。

你可以多次提交代码，直到完成所有修改，在提交 Pull Request 时，我们会通过 `Squash and Merge`  合并成一个提交。

请在 PR 标题中添加 `fix(#xxx): ***` 或 `feat(#xxx): ***`，#xxx 是 issue 编号，例如 [NoteGen 更新计划 #46](https://github.com/codexu/note-gen/issues/46)。

在提交 PR 前，确保本地运行 `pnpm tauri build` 可以正常构建及运行。