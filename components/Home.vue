<template>
  <div class="features">
    <div v-for="(item, index) in items" :key="index" class="feature">
      <div class="feature-content">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
      <div class="feature-img">
        <img :src="item.src" :alt="item.alt">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress';
const { isDark } = useData();
const items = computed(() => [
  {
    src: isDark.value ? 'https://s2.loli.net/2025/05/23/oEvigIts459qyUX.jpg' : 'https://s2.loli.net/2025/05/23/vGN4wMz8IJDEe62.jpg',
    title: '记录',
    description: '记录功能是由内容记录和 AI 助手组成，将对话模式切换为整理模式，可以将记录整理成一篇可读的笔记。',
  },
  {
    src: isDark.value ? 'https://s2.loli.net/2025/05/23/OB7nR31HgptlxZ6.png' : 'https://s2.loli.net/2025/05/23/nafSLluZvXrNqVF.jpg',
    title: '写作',
    description: '写作功能是由文件管理器和 Markdown 编辑器组成，支持所见即所得，AI 写作辅助，版本控制，同步等功能。',
  },
])
</script>

<style scoped lang="scss">
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 16px;
  gap: 16px;
  .feature {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    .feature-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .feature-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: start;
      h2 {
        font-size: 24px;
        padding: 0;
        margin: 0;
        border: none;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .features {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>