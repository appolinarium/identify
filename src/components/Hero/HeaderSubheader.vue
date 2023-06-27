<template>
  <HeroBase>

    <template #header>
      <h1 class="hero__header">
        <slot name="header">

        </slot>
      </h1>
    </template>

    <template #subheader>
      <h2 class="hero__subheader">
        <slot name="subheader">
          
        </slot>
      </h2>
    </template>

    <template #action>
      <slot name="action">

      </slot>
    </template>
  </HeroBase>
</template>

<style scoped lang="scss">
  .hero {
    &__header {
      @include pm-reset();
      @include font-size(38px);
      @include rfs(1.5px,letter-spacing);
      line-height: 1.5;
      font-family: 'Inter';
      font-weight: 500;
      text-align: center;
    }

    &__subheader {
      @include font-size(16px);
      @include rfs(1.2px,letter-spacing);
      font-weight: 400;
      color: $secondary;
      font-family: 'Inter';
      text-align: center;
    }
  }
</style>