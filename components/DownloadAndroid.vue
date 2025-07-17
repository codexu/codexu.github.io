<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'Android arm', url: 'https://download.upgrade.toolsetlink.com/download?appKey=EL9I7RGe5r_hjC3ZF1zfhA' },
  { name: 'Android arm64', url: 'https://download.upgrade.toolsetlink.com/download?appKey=9YXz-aEnn4cdwNkB2nqPww' },
  { name: 'Android x86', url: 'https://download.upgrade.toolsetlink.com/download?appKey=uiv-AYoAVQFDbga6TfJwig' },
  { name: 'Android x86_64', url: 'https://download.upgrade.toolsetlink.com/download?appKey=XT0Fr-oPdhuJXiV0ME2XEg' },
]
</script>
