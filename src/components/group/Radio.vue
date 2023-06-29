<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.radio-group{
    display: flex;
    @include rfs(gap,20px);
    justify-content: center;
}
</style>