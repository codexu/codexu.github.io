# Markdown Editor

## Features

- Supports three editing modes: `WYSIWYG`, instant rendering, split-screen preview.
- Supports outline view.
- Export, image lazy loading, task lists, multi-platform preview, multiple themes, copy to WeChat official account/Zhihu functionality.
- Can upload images by drag-and-drop or clipboard paste.
- Real-time content saving to prevent accidental loss.
- Automatically converts pasted HTML to Markdown.
- Character counting.

## Editing Modes

### WYSIWYG

The *WYSIWYG* (What You See Is What You Get) mode is friendly for users unfamiliar with Markdown, while those familiar with Markdown can use it seamlessly as well.

### Instant Rendering

The *instant rendering* mode should be familiar to Typora users. Theoretically, this is the most elegant way to edit Markdown.

### Split-screen Preview

The traditional *split-screen preview* mode is suitable for Markdown editing on large screens.

## Syntax Support

- All CommonMark syntax: horizontal rules, ATX headings, Setext headings, indented code blocks, fenced code blocks, HTML blocks, link reference definitions, paragraphs, block quotes, lists, backslash escapes, HTML entities, inline code, emphasis, strong emphasis, links, images, inline HTML, hard line breaks, soft line breaks, and plain text.
- All GFM syntax: tables, task list items, strikethrough, autolinks, XSS filtering
- Chart syntax
  - Flowcharts, sequence diagrams, Gantt charts, supported via Mermaid
  - Graphviz
  - Line charts, pie charts, mind maps, etc., supported via ECharts
- Musical notation: supported via abc.js
- Mathematical formulas: formula blocks, inline formulas, supported via MathJax and KaTeX
- YAML Front Matter

## AI Support

AI can effectively help you complete your writing, including continuation, optimization, etc., but please don't rely on it completely.

<h3><MessageCircleQuestion />Q&A</h3>

Similar to AI conversations, you can input questions, and the AI will return answers.

<h3><ListPlus />Continuation</h3>

Based on your previous text, the AI will continue writing, helping you to continue when you lack inspiration.

<h3><Lollipop />Optimization</h3>

Select a segment of text, and the AI will polish this text.

<h3><Languages />Translation</h3>

Select a segment of text, and the AI will translate this text.

::: tip
Custom Prompts will be added in the future to implement custom tools.
:::

## Synchronization

The synchronization button in the bottom right corner allows you to synchronize the current file to your sync repository, provided you have already configured a sync repository in settings.

The button next to it allows you to view the history. Click it to check historical synchronization records, including sync information, time, and other details. You can also select a specific record to roll back to.

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
