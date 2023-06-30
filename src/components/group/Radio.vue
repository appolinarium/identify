<template>
    <div
        class="radio-group"
        >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.radio-group{
    @include rfs(20px,gap);
}
</style>