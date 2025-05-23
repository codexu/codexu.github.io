# AI 助手

AI 助手是记录中的一个重要组成部分，通过对话的形式增强记录的效率。

![](https://s2.loli.net/2025/05/23/8uylNX1SAe5ZnRf.png)

## 顶部状态栏

![](https://s2.loli.net/2025/05/23/JgivxNfDZpOKwMP.png)

<h3><Drama />Prompt</h3>

你可以在设置中配置 Prompt，AI 会根据你输入的 Prompt 进行对话，NoteGen 仅提供了一个非常简单的写作助手 Prompt。

<h3><BotMessageSquare />AI 模型</h3>

AI 模型，包括模型名称和厂商名称，仅作展示。

<h3><MessageSquarePlus />使用新标签开始对话</h3>

点击后弹出对话框，输入新标签名，进行一段新的对话，同时会创建一个新的标签。

<h3><Trash2 />删除对话</h3>

删除当前标签，同时删除当前标签下的所有对话与记录（谨慎操作）。

## 对话记录

中间区域为对话记录，用户的输入、AI 回答的内容、剪贴板检测信息等都会显示在这里，左侧为机器人的信息，右侧为用户输入的信息。

- 在不同的标签下，对话记录会做隔离。
- AI 回答的内容可以通过每条信息下方的工具栏`记录`进行文本记录。
- 翻译，将 AI 对话翻译为你需要的语言。
- 触发剪贴板事件是在程序获得焦点时（切换至窗口时）。
- 剪贴板内容只会存在 5 秒，如果不进行记录则会消失。
- 点击 `X` 会删掉此条对话，并且剪贴板也会被清空。

<script setup>
import { Drama, BotMessageSquare, MessageSquarePlus, Trash2 } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>