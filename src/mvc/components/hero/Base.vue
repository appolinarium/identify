<template>
  <div class="hero">
    <header class="hero__header">
      <slot name="header"></slot>
      <slot name="subheader"></slot>
    </header>
    <div class="hero__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .hero {
    @include pm-reset();
    display: flex;
    flex-direction: column;
    align-items: center;
    @include rfs(105px, gap);

    &__header {
      @include pm-reset();
      display: flex;
      flex-direction: column;
      align-items: center;
      @include rfs(12px ,gap);
    }

    &__action {
      @include pm-reset();
    }
  }
</style>
