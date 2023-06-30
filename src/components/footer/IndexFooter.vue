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
        class="index-footer__item index-footer__list"
        >

        <a
          class="index-footer__link"
          target="_blank"
          href="https://appolinarium.github.io/indentify/"
          >Development documentation
        </a>
        <a
          class="index-footer__link"
          href="https://github.com/appolinarium/indentify"
          target="_blank"
          >
          <TypeSourceCode/>
        </a>
        
      </div>
    
  </FooterBase>
</template>

<style scoped lang="scss">
  @use 'sass:map';
  
  .index-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: map.get($colors, 'secondary');
    width: 100%;
    box-sizing: border-box;
    @include padding(0 100px);

    &__item {
      flex: 1;
    }

    &__list {
      display: flex;
      @include rfs(16px, gap);
    }

    &__link {
      @include pm-reset();
      color: map.get($colors, 'secondary');
      text-decoration: none;
      font-family: 'Lato';
      letter-spacing: 1.1px;
      @include font-size(12px);
      line-height: 1.1;

      &:hover {
        color: map.get($colors, 'primary');
      }
    }
  }
</style>
