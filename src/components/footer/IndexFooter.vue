<template>
  <FooterBase class="centered">

      <TypeCopyright
        name="Identify"
        class="flex-1"
        />
  
      <ListLanguages
        class="flex-1"/>

      <div 
        class="flex-1">
        <a
          class="documents"
          target="_blank"
          href="https://appolinarium.github.io/indentify/style_guide"
          >Development documentation
        </a>
        <TypeSourceCode/>
      </div>
    
  </FooterBase>
</template>

<style lang="scss">
  .centered{
    align-items: center;
  }
  .flex-1{
    display: flex;
    justify-content: center;
    flex: 1;
  }

  .documents{
    color: var(--el-color-info);
    text-decoration: none;
    font-family: 'Lato';
    letter-spacing: 1.1px;
    @include font-size(12px);
    line-height: 1.1;
    display: flex;
    justify-content: center;
    padding-right: 10px;
    cursor: pointer;
  }
</style>
