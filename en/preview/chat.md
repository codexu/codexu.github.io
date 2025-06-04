# AI Assistant

The AI assistant is an important component of the recording process, enhancing efficiency through conversation.

![](https://s2.loli.net/2025/05/23/8uylNX1SAe5ZnRf.png)

## Top Status Bar

<h3><Drama />Prompt</h3>

You can configure Prompts in settings. The AI will converse based on your input Prompt. NoteGen only provides a very simple writing assistant Prompt.

<h3><BotMessageSquare />AI Model</h3>

AI model, including model name and provider name, for display only.

<h3><MessageSquarePlus />Start Conversation in New Tab</h3>

Click to open a dialog box, enter a new tab name to start a new conversation, which will create a new tab.

<h3><Trash2 />Delete Conversation</h3>

Delete the current tab, along with all conversations and records under this tab (use with caution).

## Conversation History

The middle area shows conversation history, including user input, AI responses, clipboard detection information, etc. The left side shows bot information, and the right side shows user input information.

- Conversations are isolated under different tabs.
- AI responses can be recorded as text using the `Record` button in the toolbar below each message.
- Translation: translate AI conversations to your desired language.
- Clipboard events are triggered when the program gains focus (when switching to the window).
- Clipboard content only exists for 5 seconds; if not recorded, it disappears.
- Clicking `X` deletes the conversation, and the clipboard will be cleared.
- Some models support `thinking`.

## Conversation Tools

<h3><BotMessageSquare />Select AI Model</h3>

You can configure multiple AI models in settings and switch between them here for different scenarios.

<h3><Drama />Select Prompt</h3>

You can configure multiple Prompts in settings and switch between them here for different scenarios. NoteGen has a preset simple Prompt, but it's recommended to write Prompts based on actual needs.

<h3><Globe />Select Conversation Language</h3>

Choose a language, and the AI will converse with you in that language.

<h3><Link />Associate Tab</h3>

When enabled, AI conversations will include all recorded information from the current tab.

<h3><Book />Knowledge Base Retrieval</h3>

Using RAG (Retrieval Augmented Generation) technology to search existing articles to improve AI conversation quality. Requires configuring an embedding model (required) and a reranking model (optional).

<h3><Lightbulb />AI Suggestions</h3>

Based on conversations and records, AI provides suggestions generated in the placeholder. Use the `TAB` key to use the suggestion.

::: tip
You can configure the AI model for this feature in Settings - Default Model. A fast and inexpensive model is recommended.
:::

<h3><Clipboard />Clipboard Monitoring</h3>

When enabled, it monitors clipboard content, supporting text and images. The message is automatically removed after 5 seconds. Click record to save it as `text` or `illustration` under the current tab.

<h3><AlignVerticalJustifyCenter />Clear Context</h3>

This doesn't delete the current conversation content but truncates the context available to the AI model. Hover over the clear context message to delete it and restore the AI's context.

<h3><Eraser />Clear Conversation</h3>

Clears all conversation content under the current tab without deleting the tab.

## Modes

The right side of the conversation box switches between `Organize/Chat` modes, with buttons changing accordingly.

<script setup>
import { Drama, BotMessageSquare, MessageSquarePlus, Trash2, Globe, Link, Lightbulb, Clipboard, AlignVerticalJustifyCenter, Eraser, Book } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
