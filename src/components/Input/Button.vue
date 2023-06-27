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
    .button{
        cursor: pointer;
        background-color: $light-accent;
        font-family: 'Inter';
        font-weight: 500;
        font-size: 12;
        padding: 16px 38px;
        border-radius: 4px;
        letter-spacing: 1px;
        line-height: 1.2;
        border: 1px solid $accent;
        text-transform: uppercase;
        align-self: center;
        color: $filler;
    }
</style>