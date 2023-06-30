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
    font-family: 'Lato';
    letter-spacing: 1.1px;
    @include font-size(12px);
    line-height: 1.1;
    justify-content: center;
  }
</style>
