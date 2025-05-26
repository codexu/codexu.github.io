# Markdown 编辑器

## 特性

- 支持三种编辑模式：`所见即所得`、即时渲染、分屏预览。
- 支持大纲。
- 导出、图片懒加载、任务列表、多平台预览、多主题切换、复制到微信公众号/知乎功能。
- 可使用拖拽、剪切板粘贴上传图片。
- 实时保存内容，防止意外丢失。
- 粘贴 HTML 自动转换为 Markdown。
- 字符计数。

## 编辑模式

### 所见即所得

*所见即所得*模式对不熟悉 Markdown 的用户较为友好，熟悉 Markdown 的话也可以无缝使用。

### 即时渲染

*即时渲染*模式对熟悉 Typora 的用户应该不会感到陌生，理论上这是最优雅的 Markdown 编辑方式。

### 分屏预览

传统的*分屏预览*模式适合大屏下的 Markdown 编辑。

## 语法支持

- 所有 CommonMark 语法：分隔线、ATX 标题、Setext 标题、缩进代码块、围栏代码块、HTML 块、链接引用定义、段落、块引用、列表、反斜杠转义、HTML 实体、行级代码、强调、加粗、链接、图片、行级 HTML、硬换行、软换行和纯文本。
- 所有 GFM 语法：表格、任务列表项、删除线、自动链接、XSS 过滤
- 图表语法
  - 流程图、时序图、甘特图，通过 Mermaid 支持
  - Graphviz
  - 折线图、饼图、脑图等，通过 ECharts 支持
- 五线谱：通过 abc.js 支持
- 数学公式：数学公式块、行级数学公式，通过 MathJax 和 KaTeX 支持
- YAML Front Matter

## AI 支持

AI 可以有效的帮助你完成写作，包括续写、优化等，但请不要完全依赖。

<h3><MessageCircleQuestion />问答</h3>

类似于 AI 对话，可以输入问题，AI 会返回答案。

<h3><ListPlus />续写</h3>

根据你的上文，AI 会继续写下去，帮助你在无灵感时继续写作。

<h3><Lollipop />优化</h3>

选中一段文字，AI 会润色这段文字。

<h3><Languages />翻译</h3>

选中一段文字，AI 会翻译这段文字。

::: tip
未来会加入自定义 Prompt 来实现自定义工具。
:::

## 同步

在右下角的同步按钮，可以将当前的文件同步到同步仓库，前提是你已经在设置中配置了同步仓库。

旁边的按钮可以查看历史记录，点击后可以查询到历史同步记录，包括了同步信息、时间等信息，你也可以选择某一条记录进行回滚。

<script setup>
import { MessageCircleQuestion, ListPlus, Lollipop, Languages } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>