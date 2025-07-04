# Client Download

## Desktop (beta)

<DownloadDesktop />

[History Version](http://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw)

> [UpgradeLink offers application upgrade and download services](http://upgrade.toolsetlink.com/), suitable for users in mainland China, if you are in other countries, please use the Github download method.

## Mobile (alpha)

Mobile is currently in development, not available in any app store, please download and install it yourself to experience it.

### iOS

<DownloadIos />

Currently installed in ipa format, need to use xcode etc. tools to install, and trust the developer identity.

### Android

<DownloadAndroid />


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
  > if you see an error like option -r not recognized, it means your system’s xattr does not support -r. In that case, run these two commands instead:
  ```
  sudo xattr -d com.apple.quarantine /Applications/NoteGen.app
  sudo xattr -d com.apple.quarantine /Applications/NoteGen.app/Contents/MacOS/*
  ```
### Linux

Linux: `x86_64.rpm`

### Windows

64-bit: `x64-setup.exe`
32-bit: `x86-setup.exe`

<script setup>
import { getLatestRelease } from '../libs/download.ts'
import DownloadDesktop from '../components/DownloadDesktop.vue'
import DownloadIos from '../components/DownloadIos.vue'
import DownloadAndroid from '../components/DownloadAndroid.vue'
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
