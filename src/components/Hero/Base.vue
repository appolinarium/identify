<template>
  <header class="hero">
    <slot name="header"></slot>
    <slot name="subheader"></slot>
  </header>
  <div class="hero__action">
    <slot name="action"></slot>
  </div>
</template>

<style lang="scss">
  .hero {
    @include pm-reset();
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--el-color-primary);

    &__action {
      @include pm-reset();
    }
  }
</style>
