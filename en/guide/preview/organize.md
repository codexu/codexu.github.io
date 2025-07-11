# AI Organization

AI Organization is the bridge between recording and writing. By switching modes in the bottom right corner of the dialog box, you can change from chat to organization mode. The AI will organize based on your records and generate an article.

<img src="https://s2.loli.net/2025/05/26/Y6wbf1XOckg9ZVT.png" width="460" />

## Organization Templates

NoteGen provides simple organization templates, which usually cannot meet all needs. Users need to customize organization templates in `Settings` - `Organization Templates`. Organization templates are similar to Prompts, but they are only used during organization and allow you to select a time range (based on record time). For example, you can select within a week to generate a weekly report.

> For how to configure, please refer to Configuration - Organization Template

## Organizing into Articles

After selecting a template, click Start Organizing. The article will be output in the conversation as a dialog message.

<img src="https://s2.loli.net/2025/05/26/jit6KLP1xlX8MFU.png" width="580" />

At the bottom of the message, you'll notice that unlike other conversations, the record button has changed to a writing button. Click it to save this article as a Markdown file, then jump to the writing page for editing.

<img src="https://s2.loli.net/2025/05/26/81wjQg7GZpW5r39.png" width="580" />

Before conversion, there are some parameters you can customize:

<img src="https://s2.loli.net/2025/05/26/HzlNEoBdyrc1pqM.png" width="480" />

- Select directory, based on your folder structure in writing.
- The filename is automatically obtained from the AI-generated article title and can be edited manually. Note that spaces will be converted to `underscores`.
- Whether to delete records, selecting this will delete all records under the current tab.

::: tip
Even if you delete the current records and tab, you can still insert new records in your writing in the future.
:::
