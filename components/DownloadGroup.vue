<template>
  <div>
    <div class="button-group">
      <a v-for="(item, index) in items" :key="index" :href="item.url" target="_blank">{{ item.name }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  items: { name: string; url: string }[];
}>()
</script>

<style lang="scss" scoped>
.button-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 24px 0;
}

.button-group a {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
  text-decoration: none;
}

.button-group a:hover {
  background-color: var(--vp-button-brand-hover-bg);
}
</style>
