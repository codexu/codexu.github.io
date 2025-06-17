# Client Download

## Official Download (beta)

<div class="button-group">
  <a href="http://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=windows&arch=x86_64">Windows</a>
  <a href="http://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=darwin&arch=aarch64">MacOS (Apple M)</a>
  <a href="http://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=darwin&arch=x86_64">MacOS (Intel)</a>
  <a href="http://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=linux&arch=x86_64">Linux</a>
</div>

> Download service provided by [UpgradeLink](http://upgrade.toolsetlink.com/), suitable for users in mainland China, if you are in other countries, please use the Github download method.

## Mobile Download (alpha)

<div class="button-group">
  <a href="http://file.notegen.top/note_gen_ios_v0.18.0.ipa">iOS</a>
  <a href="http://file.notegen.top/note_gen_android_v0.18.0.apk">Android</a>
</div>

> Mobile is currently in development, not available in any app store, please download and install it yourself to experience it.
> iOS is currently installed in ipa format, need to use xcode etc. tools to install, and trust the developer identity, please query the installation method yourself.

## Github Download

<h3 v-if="version">{{version}}</h3>
<p v-else>Failed to retrieve version information</p>

<ul v-if="assets" v-for="(item, index) in assets.assets" :key="index">
  <li v-if="!filterAssets.includes(item.name.split('.').pop())">
    <a :href="item.browser_download_url">{{ item.name }}</a>
  </li>
</ul>
<p v-else>
  Failed to retrieve download links, please visit
  <a href="https://github.com/codexu/note-gen/releases">https://github.com/codexu/note-gen/releases</a> to download.
</p>


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

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  margin: 24px 0;
}

.button-group a {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  text-decoration: none;
}

.button-group a:hover {
  background-color: var(--vp-button-brand-hover-bg);
}
</style>