<template>
  <!-- transition purpose only -->
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
  // global resets
  *{
    box-sizing: border-box;
  }

  body {
    @include pm-reset();
  }
</style>