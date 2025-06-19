<template>
  <DownloadGroup :items="buttons" />
</template>

<script lang="ts" setup>
import DownloadGroup from './DownloadGroup.vue';
const buttons = [
  { name: 'Windows', url: 'https://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=windows&arch=x86_64' },
  { name: 'MacOS (M)', url: 'https://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=darwin&arch=aarch64' },
  { name: 'MacOS (Intel)', url: 'https://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=darwin&arch=x86_64' },
  { name: 'Linux', url: 'https://api.upgrade.toolsetlink.com/v1/tauri/download?tauriKey=tyEi-iLVFxnRhGc9c_xApw&target=linux&arch=x86_64' }
]
</script>