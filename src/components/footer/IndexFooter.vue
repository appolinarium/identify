<template>
  <FooterBase class="index-footer">

      <TypeCopyright
        name="Indentify"
        class="index-footer__item"
        />
  
      <ListLanguages
        class="index-footer__item"
        />

      <div 
        class="index-footer__item">
        <a
          class="index-footer__link"
          target="_blank"
          href="https://appolinarium.github.io/indentify/"
          >Development documentation
        </a>
        
        <TypeSourceCode/>
        
      </div>
    
  </FooterBase>
</template>

<style lang="scss">
  @use 'sass:map';
  
  .index-footer {
    align-items: center;

    &__item {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    &__link {
      color: map.get($colors, 'primary');
      text-decoration: none;
      font-family: 'Lato';
      letter-spacing: 1.1px;
      @include font-size(12px);
      line-height: 1.1;
      display: flex;
      justify-content: center;
      padding-right: 10px;
    }
  }
</style>
