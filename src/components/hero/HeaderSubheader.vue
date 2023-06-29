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
  @use 'sass:map';

  .hero {
    &__header {
      @include pm-reset();
      @include font-size(38px);
      font-family: 'Inter';
      font-weight: 500;
      text-align: center;
      color: map.get($colors, 'primary');
    }

    &__subheader {
      @include pm-reset();
      @include font-size(16px);
      color: map.get($colors, 'secondary');
      font-family: 'Inter';
      text-align: center;
    }
  }
</style>