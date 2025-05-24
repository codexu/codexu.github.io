# AI 助手

AI 助手是记录中的一个重要组成部分，通过对话的形式增强记录的效率。

![](https://s2.loli.net/2025/05/23/8uylNX1SAe5ZnRf.png)

## 顶部状态栏

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
- 部分模型支持`思考`。

## 对话框工具

<h3><BotMessageSquare />选择 AI 模型</h3>

在设置中可以配置多个 AI 模型，在此可以切换以应对不同的场景。

<h3><Drama />选择 Prompt</h3>

在设置中可以配置多个 Prompt，在此可以切换以应对不同的场景。NoteGen 预设了一个简单的 Prompt，建议根据实际需求编写 Prompt。

<h3><Globe />选择对话语言</h3>

选择一个语言，AI 会以该语言与你对话。

<h3><Link />关联标签</h3>

开启后，AI 对话时会携带当前标签内的所有记录信息。

<h3><Lightbulb />AI 建议</h3>

根据对话和记录，AI 会提供一些建议，生成于 placeholder，使用 `TAB` 键可使用建议。

::: tip
可在设置 - 默认模型进行配置此项 AI 模型，建议使用速度快且廉价的模型即可。
:::

<h3><Clipboard />剪贴板监听</h3>

开启后，会监听剪贴板内容，支持文字和图片，持续 5 秒后会自动移除此消息，点击记录则会以`文本`或`插图`的形式记录在当前标签下。

<h3><AlignVerticalJustifyCenter />清除上下文</h3>

不会删除当前的对话内容，而是截断 AI 模型所能获得的上下文。鼠标滑动到清除上下文消息上，可以删除此条清除上下文，恢复 AI 的上下文。

<h3><Eraser />清空对话</h3>

清空当前标签下的所有对话内容，不会删除此标签。

## 模式

对话框右侧为切换`整理/聊天`模式，按钮也随之切换。

<script setup>
import { Drama, BotMessageSquare, MessageSquarePlus, Trash2, Globe, Link, Lightbulb, Clipboard, AlignVerticalJustifyCenter, Eraser } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>