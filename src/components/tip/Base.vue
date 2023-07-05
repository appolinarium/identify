<script setup>
  const props = defineProps({
    text: String
  })

</script>
<template>
  <div class="tooltip">
    <span class="tooltip__text">{{text}}</span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
  @use 'sass:map';

  // rewrite in auto-sizing

  .tooltip {
    position: relative;
    cursor: pointer;
    display: inline-block;

    &__text {
      position: absolute;
      width: 125%;
      left: -12.5%;
      height: 28px;
      top: 0;
      font-size: 12px;
      background: #000;
      color: map.get($colors, 'white');
      padding: 6px 10px;
      border-radius: 2px;
      box-sizing: border-box;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.28s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__text::before {
      position: absolute;
      content: "";
      height: 8px;
      width: 8px;
      background: black;
      bottom: -3px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
      transition: all 0.28s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &:hover &__text {
      top: -32px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
</style>