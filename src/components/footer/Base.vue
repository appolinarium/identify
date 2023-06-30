<template>
  <footer class="base-footer">
    <slot>
    </slot>
  </footer>
</template>

<style lang="scss">
  .base-footer {
    @include pm-reset();
    display: flex;
    flex-wrap: wrap;
  }
</style>
