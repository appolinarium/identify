<script setup lang="ts">
  const props = defineProps({
    items: []
  })
</script>

<template>
  <ul class="list">
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .list {
    @include ul-reset();
    display: flex;
  }
</style>