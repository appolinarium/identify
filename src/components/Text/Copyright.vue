<script setup lang="ts">
  const props = defineProps({
    name: String
  })
</script>

<template>
  <span class="copyright">
    © {{ `${name} ${new Date().getFullYear()}` }} 
  </span>
</template>

<style scoped lang="scss">
  .copyright {
    color: var(--el-color-info);
  }
</style>
