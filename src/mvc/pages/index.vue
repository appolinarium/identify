<template>

  <div class="content">
    <HeroHeaderSubheader>
      <template #header>
        {{$t('app.description')}}
      </template>

      <template #subheader>
        <CounterUsers />
        {{ $t('entry.subtitle.content') }}
        <TipBase
          text="Hello, im tooltip"
        >
          {{ $t('entry.subtitle.accent') }}
        </TipBase>
      </template>

      <template #action>
        <InputSignUp/>
      </template>

    </HeroHeaderSubheader>

    <FooterIndexFooter/>
  </div>

</template>

<style lang="scss">
  @use 'sass:map';

  html{
    height: 100vh;
    background-color: map.get($colors, 'primary-bg');
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    box-sizing: border-box;
    @include padding(110px 0 24px 0);
  }
</style>
