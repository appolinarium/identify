<script setup lang="ts">
  import Logo from '@/public/logo-color.svg'
  import Gear from '@/node_modules/bootstrap-icons/icons/gear.svg?raw'
  import Users from '@/node_modules/bootstrap-icons/icons/people.svg?raw'
  import Rooms from '@/node_modules/bootstrap-icons/icons/chat.svg?raw'
  import Wall from '@/node_modules/bootstrap-icons/icons/pencil-square.svg?raw'


  const navigations = ref([
    {name:'settings',pic: Gear},
    {name:'users',pic: Users},
    {name:'rooms',pic: Rooms},
    {name:'wall',pic: Wall},
  ])
</script>

<template>
  <div
    class="navmenu">
    <div>
      <div
        class="navmenu__logo">
        <Logo
          class="navmenu__logo__picture"/>
        <h3
          class="navmenu__logo__text">indentify</h3>
      </div>
      <ul 
          class="navmenu__list">
        <li
          v-for="nav in navigations"
          >
          <NuxtLink 
            :to="nav.name"
            class="navmenu__list__item"
            >
            <span 
              v-html="nav.pic"
              style="color: #8895A3;"
              class="navmenu__list__item__image"
              ></span>
              <span>
                {{ nav.name }}
              </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div
      class="navmenu__footer"
      >
      <div
        class="navmenu__footer__links">
        <TypeSourceCode/>
        <TypeDevelopmentDoc/>
      </div>
      
      <TypeCopyright name="Indentify"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'sass:map';
  .navmenu{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__logo{
      display: flex;
      align-items: center;
      gap: 11px;
      @include padding(25px);
      border-bottom: 1px solid #393f49;
    }

    &__logo__picture{
      width: 16px;
      height: 19px;
    }

    &__logo__text{
      @include font-size(14px);
      @include pm-reset();
      font-family: 'Inter';
      line-height: 1.5;

    }

    &__list{
      @include pm-reset();
      list-style: none;
      padding: 29px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__list__item{
      @include pm-reset();
      padding: 8px 18px;
      color: map.get($colors, 'letter-gray');
      text-decoration: none;
      text-transform: capitalize;
      align-items: center;
      font-family: 'Inter';
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: -0.1px;
      display: flex;
      gap: 13px;
    }

    &__footer{
      @include pm-reset();
      padding: 25px 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    &__footer__links{
      display: flex;
      flex-direction: column;
      gap: 7px;
    }

  }
</style>