<script setup lang="ts">
  import forge from 'node-forge'

  const rsa = forge.pki.rsa
  rsa.generateKeyPair({bits: 2048, workers: 2}, function(err, keypair) {
  console.log(keypair)
  })

  const usersCounter = ref(999)
  const key = ref(123)
</script>

<template>
  <h1>{{key}}</h1>
  <div class="entry">
    <main class="content">

      <HeroHeaderSubheader>
        <template #header>
          {{$t('app.description')}}
        </template>

        <template #subheader>
          {{ `${usersCounter} ${$t('entry.subtitle.content')} ${$t('entry.subtitle.accent')}`}}
        </template>

        <template #action>
          <FormAuth />
        </template>
      </HeroHeaderSubheader>

    </main>

    <FooterThreeColumns />
  </div>
</template>

<style lang="scss">
@use 'sass:map';

body {
  background-color: map.get($colors, 'primary-bg');
}

.entry {
  @include padding(24px 100px);
}

.content {
  @include padding(0 190px);
  @include padding-top(115px);
  @include padding-bottom(125px);
}
</style>
