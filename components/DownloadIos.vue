<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'iOS', url: 'http://file.notegen.top/NoteGen.ipa' },
]
</script>
