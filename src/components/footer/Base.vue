<template>
  <footer class="base-footer">
    <slot />
  </footer>
</template>

<style lang="scss">
  .base-footer {
    @include pm-reset();
    @include padding(4px 10px);
    display: flex;
    flex-wrap: wrap;
  }
</style>