# 客户端下载

## 版本信息

<h3 v-if="version">{{version}}</h3>
<p v-else>获取版本信息失败</p>

## 下载列表

<ul v-if="assets" v-for="(item, index) in assets.assets" :key="index">
  <li v-if="!filterAssets.includes(item.name.split('.').pop())">
    <a :href="item.browser_download_url">{{ item.name }}</a>
  </li>
</ul>
<p v-else>
  获取下载链接失败，请访问
  <a href="https://github.com/codexu/note-gen/releases">https://github.com/codexu/note-gen/releases</a> 下载。
</p>

> 

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