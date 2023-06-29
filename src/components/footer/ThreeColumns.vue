<script setup lang="ts">
  import GithubIcon from '@/node_modules/bootstrap-icons/icons/github.svg'
</script>

<template>
  <FooterBase class="three-columns-footer">
    <div class="three-columns-footer__item">
      © Identify {{ new Date().getFullYear() }}
    </div>
    <div class="three-columns-footer__item">
      <ListLanguages />
    </div>
    <div class="three-columns-footer__item">
      <NuxtLink to="documentation">
        documentation
      </NuxtLink>
      <GithubIcon fill="red" />
      {{ $t('sourceCode') }}
    </div>
  </FooterBase>
</template>

<style lang="scss">
  .three-columns-footer {
    align-items: center;
    justify-content: space-between;

    &__item {
      flex: 1;
    }
  }
</style>