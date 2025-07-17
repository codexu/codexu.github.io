<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'Windows', url: 'https://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw' },
  { name: 'MacOS (M)', url: 'https://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw' },
  { name: 'MacOS (Intel)', url: 'https://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw' },
  { name: 'Linux', url: 'https://download.upgrade.toolsetlink.com/download?appKey=tyEi-iLVFxnRhGc9c_xApw' }
]
</script>