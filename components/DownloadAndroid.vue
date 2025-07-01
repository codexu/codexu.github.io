<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'Android arm', url: 'http://file.notegen.top/app-arm-release.apk' },
  { name: 'Android arm64', url: 'http://file.notegen.top/app-arm64-release.apk' },
  { name: 'Android x86', url: 'http://file.notegen.top/app-x86-release.apk' },
  { name: 'Android x86_64', url: 'http://file.notegen.top/app-x86_64-release.apk' },
]
</script>
