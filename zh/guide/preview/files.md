# 文件管理器

如果你按照前面的章节进行操作，此时已经自动跳转到写作页面：

![1.png](https://s2.loli.net/2025/05/26/ZQHCG65VeY4Knqb.png)

左侧是文件管理器，右侧是 Markdown 编辑器。

::: tip
记录与写作是相互关联的，但也可以完全独立使用。
:::

## 工具栏

文件管理器顶部有工具栏，包含以下按钮：

<h3><CloudCog />访问仓库</h3>

点击后，会打开当前使用的同步仓库（Github/Gitee），加载仓库内文件时则为 loading 状态。

<h3><FilePlus />新建文件</h3>

创建新文件，位置为当前选择的文件的同级下创建新文件，如果没有选择，则创建在根目录，注意文件夹是无法选择，如果想在文件夹内部创建文件，请右键文件夹，选择`新建文件`。

<h3><FolderPlus />新建文件夹</h3>

创建新文件夹，方式与新建文件类似。

<h3><SortAsc />排序</h3>

选择文件的排序方式，支持名称、创建时间、修改时间，增序/降序。

<h3><ChevronsDownUp />展开/折叠</h3>

展开/折叠全部文件夹。

<h3><FolderSync />刷新</h3>

刷新文件列表和同步信息。

## 右键菜单

`右键文件夹`，有以下菜单：

- 新建文件（创建于文件夹内部）
- 新建文件夹（创建于文件夹内部）
- 查看目录，在系统的文件管理器所在的文件夹打开。
- 剪切
- 复制
- 粘贴
- 重命名
- 删除

`右键文件`，有以下菜单：

- 查看目录
- 剪切
- 复制
- 粘贴
- 重命名
- 删除同步文件（删除同步仓库内文件）
- 删除本地文件

## 拖拽支持

- 支持将文件拖拽到其他文件夹内部

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