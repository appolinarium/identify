<script setup>
  const count = ref(0)
</script>

<template>

  <HeroHeaderSubheader>
    <template #header>
      {{$t('app.description')}}
    </template>

    <template #subheader>
      {{ count }} {{ $t('entry.subtitle.content') }} <a href="#">{{$t('entry.subtitle.accent') }}</a>
    </template>

    <template #action>
      <InputSignUp/>
    </template>
  </HeroHeaderSubheader>
  <footer>
    <TextCopyright name="Identify"/>
    <ListLanguages/>
    <span>
      <IconGithub fill="white"/>
      <span>{{$t('sourceCode')}}</span>
    </span>
  </footer>
</template>

<style lang="scss">
 #__app,body,#index,html{
    height: 100vh;
 }
  html{
    background-color: $bg-color;
  }
  a{
    color: $accent;
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
    color: $secondary !important;
  }
</style>
