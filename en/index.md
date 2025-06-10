---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NoteGen"
  text: "A Cross-Platform Application"
  tagline: Bridging the Gap Between Recording and Writing with LLM.
  image:
    src: /app-icon.png
    alt: NoteGen Logo
    width: 180
    height: 180
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide
    - theme: alt
      text: Download
      link: /en/download

features:
  - title: Lightweight
    details: The installation package is only a few megabytes, free of charge, with no ads or bundled software.
  - title: Cross-Platform
    details: Supports Mac, Windows, and Linux. Thanks to the cross-platform capabilities of Tauri2, it will also support iOS and Android in the future.
  - title: Data Security
    details: Local offline storage, supports real-time synchronization to private GitHub repositories with version history rollback.
  - title: LLM-Powered
    details: Supports custom configuration of mainstream LLM, assisting you in completing recording, writing, and organization tasks.
---

<FeatureShow />

<script setup>
import FeatureShow from '../components/FeatureShow.vue'
</script>