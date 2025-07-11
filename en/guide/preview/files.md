# File Manager

If you've followed the previous chapters, you should have automatically been redirected to the writing page:

![1.png](https://s2.loli.net/2025/05/26/ZQHCG65VeY4Knqb.png)

The file manager is on the left, and the Markdown editor is on the right.

::: tip
Recording and writing are interconnected, but can also be used completely independently.
:::

## Toolbar

The file manager has a toolbar at the top with the following buttons:

<h3><CloudCog />Access Repository</h3>

Click to open the current synchronization repository (Github/Gitee). Shows a loading state when loading repository files.

<h3><FilePlus />New File</h3>

Create a new file at the same level as the currently selected file. If no file is selected, it creates in the root directory. Note that folders cannot be selected. If you want to create a file inside a folder, right-click the folder and select `New File`.

<h3><FolderPlus />New Folder</h3>

Create a new folder, similar to creating a new file.

<h3><SortAsc />Sort</h3>

Choose how to sort files, supporting name, creation time, modification time, ascending/descending order.

<h3><ChevronsDownUp />Expand/Collapse</h3>

Expand/collapse all folders.

<h3><FolderSync />Refresh</h3>

Refresh the file list and synchronization information.

## Right-Click Menu

`Right-click on a folder` provides the following menu:

- New File (created inside the folder)
- New Folder (created inside the folder)
- View Directory, opens the folder in the system file manager.
- Cut
- Copy
- Paste
- Rename
- Delete

`Right-click on a file` provides the following menu:

- View Directory
- Cut
- Copy
- Paste
- Rename
- Delete Synced File (delete file in synchronization repository)
- Delete Local File

## Drag and Drop Support

- Support for dragging files into other folders

<script setup>
import { CloudCog, FolderPlus, FilePlus, SortAsc, ChevronsDownUp, FolderSync } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
