<script setup lang="ts">
  const props = defineProps({
    items: []
  })
</script>

<template>
  <ListBase class=".list--languages" :items="props.items"/>
</template>

<style scoped lang="scss">
  .list--languages {
    color: var(--el-color-info);
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
</style>