# 客户端下载

## 桌面端（beta）

桌面端已完成主要功能的开发，但仍还存在一些 Bug 和不足。

<DownloadDesktop />

[历史版本](http://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw)

> 下载服务由 [UpgradeLink](http://upgrade.toolsetlink.com/) 支持。

## 移动端（alpha）

移动端目前正在开发状态，未上架任何应用商店，可下载自行安装抢先体验。

### iOS

<DownloadIos />

目前只能通过 ipa 安装，需使用 xcode 等工具进行安装，并信任开发者身份。

### Android

<DownloadAndroid />

## Github 下载

<h3 v-if="version">{{version}}</h3>
<p v-else>获取版本信息失败</p>

<ul v-if="assets" v-for="(item, index) in assets.assets" :key="index">
  <li v-if="!filterAssets.includes(item.name.split('.').pop())">
    <a :href="item.browser_download_url">{{ item.name }}</a>
  </li>
</ul>
<p v-else>
  获取下载链接失败，请访问
  <a href="https://github.com/codexu/note-gen/releases">https://github.com/codexu/note-gen/releases</a> 下载。
</p>

## 我该下载哪个安装包？

### MacOS

MacOS intel芯片: `x64.dmg`

MacOS apple M芯片: `aarch64.dmg`

> [!WARNING]
> NoteGen 暂未签名，因此安装时会出现文件已损坏的提示，根据不同芯片解决方法如下：
> - Intel：打开来自未知开发商的 Mac 应用程序。
> - Silicon：打开终端并运行以下命令：`sudo xattr -r -d com.apple.quarantine /Applications/NoteGen.app`

### Linux

Linux: `x86_64.rpm`

### Windows

64位: `x64-setup.exe`
32位: `x86-setup.exe`

<script setup>
import { getLatestRelease } from '../libs/download.ts'
import DownloadDesktop from '../components/DownloadDesktop.vue'
import DownloadIos from '../components/DownloadIos.vue'
import DownloadAndroid from '../components/DownloadAndroid.vue'
import { ref } from 'vue'

// 过滤后缀
const filterAssets = ['sig', 'asc', 'json', 'gz']

const assets = ref(null)
const version =ref(null)

getLatestRelease('codexu','note-gen').then(res =>{
  if(res) {
    assets.value = res
    version.value = res.name
  }
})
</script>
