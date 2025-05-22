# 下载
## 版本信息
<h3>NoteGen {{version}}</h3>

## 下载列表
<br>
<div v-if="assets" v-for="(item, index) in assets.assets" :key="index">
  <a :href="item.browser_download_url">{{ item.name }}</a>
</div>

<script setup>
  import { getLatestRelease } from '../common.ts'
  import { ref } from 'vue'
  const assets = ref(null)
  const version =ref(null)
  getLatestRelease('codexu','note-gen').then(res =>{
    if(res) {
      assets.value = res
      version.value =res.name
    }
  })
</script>