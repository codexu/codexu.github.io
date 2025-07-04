<template>
  <img class="feature-intro-img" src="https://s2.loli.net/2025/06/13/UbVGPrhFl3etnQz.png" />
  <div class="feature-intro">
    <h2>{{ headerTexts.title }}</h2>
    <p>{{ headerTexts.subtitle }}</p>
    <p>{{ headerTexts.description }}</p>
  </div>
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
  <div class="feature-intro">
    <h2>{{ texts.title }}</h2>
    <p>{{ texts.description1 }}</p>
    <p>{{ texts.description2 }}</p>
    <div class="button-container">
      <div>
        <a class="button" target="_blank" href="https://github.com/codexu/note-gen">{{ texts.buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress';
const { isDark, lang } = useData();

// 根据语言提供不同的页面头部文本
const headerTexts = computed(() => {
  if (lang.value === 'en') {
    return {
      title: 'Recording & Writing',
      subtitle: 'NoteGen = Note + Generator',
      description: 'Conventional note-taking apps typically do not offer recording functionality. Users need to manually copy and paste to record content, which greatly reduces recording efficiency. When faced with scattered records, it requires a significant amount of effort to organize them.',
    }
  } else {
    return {
      title: '记录 & 写作',
      subtitle: 'NoteGen = Note + Generator',
      description: '常规的笔记，通常不会提供记录的功能，用户需要手动进行复制粘贴的操作进行记录，大大降低了记录的效率，而面对零散的记录内容时，更是需要花费大量的精力进行整理。',
    }
  }
});

// 根据语言提供不同的底部文本内容
const texts = computed(() => {
  if (lang.value === 'en') {
    return {
      title: 'Enjoy the Fun of Open Source, Start Now',
      description1: 'Free forever, no ads, no bundling, no restrictions.',
      description2: 'Use it, modify it, share it, and let more people enjoy the fun of open source.',
      buttonText: 'Contribute',
    }
  } else {
    return {
      title: '享受开源的乐趣，从现在开始',
      description1: '永久免费，无任何广告，无任何捆绑，无任何限制。',
      description2: '使用它，改造它，分享它，让更多人享受到开源的乐趣。',
      buttonText: '参与开源',
    }
  }
});

// 根据语言和暗黑模式提供不同的内容项
const items = computed(() => {
  if (lang.value === 'en') {
    return [
      {
        src: isDark.value ? 'https://s2.loli.net/2025/05/23/oEvigIts459qyUX.jpg' : 'https://s2.loli.net/2025/05/23/vGN4wMz8IJDEe62.jpg',
        title: 'Recording',
        description: 'The recording function consists of content recording and AI assistant. It has two modes: conversation mode and organization mode. In conversation mode, the AI assistant can help you complete records. In organization mode, the AI assistant can help you organize records into a readable note.',
      },
      {
        src: isDark.value ? 'https://s2.loli.net/2025/05/23/OB7nR31HgptlxZ6.png' : 'https://s2.loli.net/2025/05/23/nafSLluZvXrNqVF.jpg',
        title: 'Writing',
        description: 'The writing function consists of a file manager and a Markdown editor, supporting WYSIWYG, AI writing assistance, version control, synchronization, and other features. At the same time, through RAG technology, it retrieves existing articles to improve the quality of AI conversations.',
      },
    ];
  } else {
    return [
      {
        src: isDark.value ? 'https://s2.loli.net/2025/05/23/oEvigIts459qyUX.jpg' : 'https://s2.loli.net/2025/05/23/vGN4wMz8IJDEe62.jpg',
        title: '记录',
        description: '记录功能是由内容记录和 AI 助手组成，模式分为对话模式和整理模式，对话模式下，AI 助手可以协助你完成记录，整理模式下，AI 助手可以协助你将记录整理成一篇可读的笔记。',
      },
      {
        src: isDark.value ? 'https://s2.loli.net/2025/05/23/OB7nR31HgptlxZ6.png' : 'https://s2.loli.net/2025/05/23/nafSLluZvXrNqVF.jpg',
        title: '写作',
        description: '写作功能是由文件管理器和 Markdown 编辑器组成，支持所见即所得，AI 写作辅助，版本控制，同步等功能。同时，通过 RAG 技术，对已有的文章进行检索，用以提高 AI 对话的质量。',
      },
    ];
  }
})
</script>

<style scoped lang="scss">
.feature-intro-img {
  width: 100%;
  margin-top: 86px;
}
.feature-intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  h2 {
    line-height: 4rem;
    text-align: center;
    border-top: none;
    font-size: 3rem;
  }
  p {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .button-container {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
    div {
      display: flex;
      gap: 16px;
      .button {
        border-color: var(--vp-button-brand-border);
        color: var(--vp-button-brand-text);
        background-color: var(--vp-button-brand-bg);
        border-radius: 20px;
        padding: 0 20px;
        line-height: 38px;
        font-size: 14px;
        height: 38px;
        text-align: center;
        text-decoration: none;
      }
    }
  }
}
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
      text-align: center;
      h2 {
        font-size: 24px;
        padding: 0;
        margin: 0;
        border: none;
      }
      p {
        text-align: left;
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