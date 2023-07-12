<template>
  <!-- transition purpose only -->
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
  // global resets

  body {
    @include pm-reset();
  }
</style>