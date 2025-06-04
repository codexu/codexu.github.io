# Contribution Guidelines

💗 NoteGen is an open-source and free community project. We will continue to contribute out of passion and accept any form of contribution. 💗

Hi! Thank you very much for participating in NoteGen's development! Before you begin, please take some time to read the following:

## How to Contribute

Whether you're contributing code or submitting issues, you should first create an Issue.

### Issues

Please always use [Issues](https://github.com/codexu/note-gen/issues) to create new issues, and describe the problem in as much detail as possible, including steps to reproduce, expected behavior, and actual behavior.

### Discussions

If you want to start a discussion, you can use [Discussions](https://github.com/codexu/note-gen/discussions), or join the [community group](https://github.com/codexu/note-gen/discussions/110).

### Pull Request

- Before fixing a bug, please check [Issues](https://github.com/codexu/note-gen/issues) to see if there's a similar problem.
- If you want to develop a feature, please submit an [Issue](https://github.com/codexu/note-gen/issues) first to discuss with the project maintainers whether the feature is needed. This helps save time for both maintainers and contributors.

## Tech Stack

NoteGen primarily uses the following technologies:

- [Tauri 2](https://v2.tauri.app/)
- [Next.js 15](https://nextjs.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
  
- Check [package.json](https://github.com/codexu/note-gen/blob/dev/package.json) for frontend dependencies.
- Check [src-tauri/Cargo.toml](https://github.com/codexu/note-gen/blob/dev/src-tauri/Cargo.toml) for Rust dependencies.

If your contribution requires updating or adding dependencies, please include updates to `package.json` or `src-tauri/Cargo.toml` in your issue.

## Development Environment

Please first read the [Tauri 2 prerequisites](https://v2.tauri.app/start/prerequisites/) documentation and configure your development environment accordingly.

After setting up the environment, **fork** the repository to your GitHub account, then clone it locally:

```bash
# 1. Fork to your GitHub account

# 2. Clone locally
git clone https://github.com/your-username/note-gen.git
```

Then enter the project directory and install dependencies:

```bash
# 3. Enter the project directory & install dependencies
cd note-gen
pnpm install

# 4. Start local development. If you encounter a white screen, try right-clicking and selecting reload.
pnpm tauri dev
```

## Directory Structure

- `src`: Frontend application directory.
  - `apps`: Frontend application directory.
    - `core`: Main application core functionality.
      - `article`: Writing.
      - `image`: Image hosting management.
      - `record`: Recording.
      - `search`: Search.
      - `setting`: Settings.
    - `screenshot`: Screenshot window.
  - `components`: Component directory, shadcn and common components.
  - `lib`: Common utility libraries, e.g., AI, GitHub requests, etc.
  - `db`: SQLite database.
  - `store`: State management directory, using zustand.
- `src-tauri`: Rust code directory.
- `messages`: Multilingual configuration directory.

## Pull Request Guidelines

NoteGen doesn't use master or main branches. All development is done on the dev branch, and merging to the release branch triggers Github Actions for version release and building.

After forking the repository, please create a new branch from the dev branch, naming it after your contribution, e.g., `fix/123` or `feat/121`.

You can commit code multiple times until all changes are complete. When submitting a Pull Request, we will use `Squash and Merge` to combine into a single commit.

Please add `fix(#xxx): ***` or `feat(#xxx): ***` to the PR title, where #xxx is the issue number, e.g., [NoteGen Update Plan #46](https://github.com/codexu/note-gen/issues/46).

Before submitting a PR, ensure that `pnpm tauri build` builds and runs correctly on your local machine.
