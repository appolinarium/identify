<script setup>

    const props = defineProps({
        text: String,
        link: String
    })
</script>

<template>
    <span class="button"
          @click="">
        {{ text }}
    </span>
</template>

<style scoped lang="scss">
  @use 'sass:map';
    .button{
        cursor: pointer;
        display: flex;
        background-color: map.get($colors, 'thirdy-bg');
        font-family: 'Inter';
        font-weight: 500;
        padding: 16px 38px;
        border-radius: 4px;
        letter-spacing: 1px;
        line-height: 1.2;
        border: 1px solid map.get($colors, 'fourthy');
        text-transform: uppercase;
        align-self: center;
        color: map.get($colors, 'thirdy');
    }
</style>