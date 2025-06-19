<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'Android arm', url: 'http://file.notegen.top/note_gen_android_arm.apk' },
  { name: 'Android arm64', url: 'http://file.notegen.top/note_gen_android_arm64.apk' },
  { name: 'Android x86', url: 'http://file.notegen.top/note_gen_android_x86.apk' },
  { name: 'Android x86_64', url: 'http://file.notegen.top/note_gen_android_x86_64.apk' },
]
</script>
