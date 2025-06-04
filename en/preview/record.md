# Recording

Recording is the core function of NoteGen, consisting of `Recording Tools`, `Tag Management`, and `Record Content`.

Located on the left side of the recording page.

<img width="240" src="https://s2.loli.net/2025/05/23/7TpehH9ZAOF8Cuw.png" />

## Recording Tools

Recording tools provide five methods of recording: `Screenshot`, `Illustration`, `File`, `Text`, and `Link`. Using them appropriately can improve recording efficiency in different scenarios.

<h3><ScanText />Screenshot Recording</h3>

![1.png](https://s2.loli.net/2025/05/29/QsPSBFw4qIHNgtl.png)

Select an area from a window screenshot, capture the selected area, recognize text through OCR, then generate a record description via AI (to help users distinguish content), and upload to image hosting.

- Window screenshots are ordered based on the Z-value of the currently active window.
- After selection, double-click the selected area to complete the screenshot.
- Minimized windows cannot be screenshotted.

<h3><ImagePlus />Illustration Recording</h3>

When selecting an image from your local device or when the AI assistant detects an image in the clipboard, you can record the image. The operational logic is the same as screenshot recording.

::: tip The main difference between screenshots and illustrations is in how they're organized into articles:
- `Screenshot records` are ultimately recorded as text, with the **recognized text inserted into the article**, not the screenshot itself.
- `Illustration records` are ultimately recorded as images, and will be **inserted into the article as images**, with positioning determined by AI based on the description.
:::

<h3><FilePlus />File Recording</h3>

Select a file from your local device for recording. Currently only supports `txt`, `md`, `csv`, and `pdf` formats, recording them as text.

<h3><CopySlash />Text Recording</h3>

Click to open a text recording dialog where you can directly input text. Suitable for recording large sections of text or temporary notes.

<h3><Link />Link Recording</h3>

Enter a link to crawl web content. Currently does not support crawling SPA websites. The content is ultimately recorded as text.

## Tag Management

Tag management is used to manage recording tags, making it easy for users to categorize records. Tags also affect the AI assistant's conversation history and content association.

![2.png](https://s2.loli.net/2025/05/23/VmhnPKqAlZt5xsk.png)

Feature list:

- Click the tag box to open the tag list for switching tags.
- Enter text in the search box for fuzzy searches. Non-existent tag names can be used to create new tags.
- Right-click to pin, rename, or delete tags.
- The number to the right of the tag represents the number of records under that tag.

## Record Content

Record content includes information such as `Record Type`, `Record Time`, `Record Description`, `Thumbnail`, etc.

<img width="280" src="https://s2.loli.net/2025/05/23/bYT1HlExqBWSLh5.png" />

Feature list:

- Click the description to view record details.
- Click the thumbnail to preview the full-size image.
- Right-click to open a menu offering various convenient tools, such as transferring tags, copying links, and managing records.

<script setup>
import { ScanText, ImagePlus, FilePlus, CopySlash, Link } from 'lucide-vue-next'
</script>

<style scoped>
h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
