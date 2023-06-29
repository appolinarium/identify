<template>
  <footer class="base-footer">
    <slot>

    </slot>
    
  </footer>
</template>

<style lang="scss">
  .base-footer {
    @include pm-reset();
    @include padding(24px 100px);
    display: flex;
    flex-wrap: wrap;
  }
</style>