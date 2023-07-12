<template>
    <div
      class="radio-group"
      >

      <slot></slot>

    </div>
</template>

<style lang="scss">
  .radio-group{
      @include rfs(20px, gap);
      display: flex;
  }
</style>