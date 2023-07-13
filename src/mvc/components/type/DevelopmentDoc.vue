<template>
    <a
        class="doc"
        target="_blank"
        href="https://appolinarium.github.io/indentify/"
        >Development documentation
    </a>
</template>

<style scoped lang="scss">
    @use 'sass:map';
    .doc{
        @include pm-reset();
        color: map.get($colors, 'secondary');
        text-decoration: none;
        font-family: 'Lato';
        letter-spacing: 1.1px;
        @include font-size(12px);
        line-height: 1.1;
    }
</style>