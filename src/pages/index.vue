<template>

  <HeroHeaderSubheader>
    <template #header>
      {{$t('app.description')}}
    </template>

    <template #subheader>
      <CounterUsers /> {{ $t('entry.subtitle.content') }} <a href="#">{{$t('entry.subtitle.accent') }}</a>
    </template>

    <template #action>
      <InputSignUp/>
    </template>

  </HeroHeaderSubheader>

  <FooterIndexFooter/>

</template>

<style lang="scss">
  @use 'sass:map';

 #__app,body,#index,html{
    height: 100vh;
 }
  html{
    background-color: map.get($colors, 'primary-bg');
  }

  a{
    color: map.get($colors, 'fourthy');
  }
  
  .hero{
    @include padding(120px 330px);
    &__subheader{
      @include margin(20px 0);
    }

  }

  footer{
    display: flex;
    justify-content: space-between;
    padding: 30px 110px;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    
  }

  .checkbox__label{
    color: map.get($colors, 'secondary') !important;
  }
</style>
