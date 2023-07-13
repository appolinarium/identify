<script setup>
    const props = defineProps({
        tabkey: String
    })

    const selectedTitle = inject('selectedTitle')
</script>

<template>
    <div
        v-show="selectedTitle === tabkey"
        >
        <slot />
    </div>
</template>