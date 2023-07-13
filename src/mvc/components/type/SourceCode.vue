<script setup>
    import GithubIcon from '@/node_modules/bootstrap-icons/icons/github.svg'
</script>

<template>
    <a
        target="_blankb"
        href="https://github.com/appolinarium/indentify"
        class="source-code"
        >
        <GithubIcon
            fill="white"
            />
        <span>{{ $t('sourceCode') }}</span>
    </a>
</template>

<style scoped lang="scss">
    .source-code{
        color: var(--el-color-info);
        font-family: 'Lato';
        letter-spacing: 1.1px;
        @include font-size(12px);
        line-height: 1.1;
        display: flex;
        gap: 6px;
        text-decoration: none;
    }
</style>