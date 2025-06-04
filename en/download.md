# Client Download

## Version Information

<h3 v-if="version">{{version}}</h3>
<p v-else>Failed to retrieve version information</p>

## Download List

<ul v-if="assets" v-for="(item, index) in assets.assets" :key="index">
  <li v-if="!filterAssets.includes(item.name.split('.').pop())">
    <a :href="item.browser_download_url">{{ item.name }}</a>
  </li>
</ul>
<p v-else>
  Failed to retrieve download links, please visit
  <a href="https://github.com/codexu/note-gen/releases">https://github.com/codexu/note-gen/releases</a> to download.
</p>

> 

## Which Package Should I Download?

### MacOS

MacOS with Intel chip: `x64.dmg`

MacOS with Apple M chip: `aarch64.dmg`

> [!WARNING]
> NoteGen is not signed yet, so you may see a warning that the file is damaged during installation. Solutions vary depending on your chip:
> - Intel: Open Mac applications from unidentified developers.
> - Silicon: Open terminal and run the following command: `sudo xattr -r -d com.apple.quarantine /Applications/NoteGen.app`

### Linux

Linux: `x86_64.rpm`

### Windows

64-bit: `x64-setup.exe`
32-bit: `x86-setup.exe`

<script setup>
import { getLatestRelease } from '../libs/download.ts'
import { ref } from 'vue'

// Filter suffixes
const filterAssets = ['sig', 'asc', 'json', 'gz']

const assets = ref(null)
const version = ref(null)

getLatestRelease('codexu','note-gen').then(res =>{
  if(res) {
    assets.value = res
    version.value = res.name
  }
})
</script>
