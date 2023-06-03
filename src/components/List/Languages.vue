<script setup lang="ts">
  const props = defineProps({
    items: []
  }) 

  const lang = useState('lang', () => 'en')

</script>

<template>
  <ul class="list" >
    <li v-for="(val, key) in items" @click="lang = key">
      <span class="list__item list__item--selected" v-if="key === lang">
        {{ val }}
      </span>
      <span class="list__item" v-else>
        {{ val }}
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .list {
    @include ul-reset();
    display: flex;
    align-items: center;
    gap: 20px;

    &__item {
      font-family: 'Lato';
      font-weight: normal;
      font-style: normal;
      cursor: pointer;
      color: white;
      text-transform: capitalize;
    }

    &__item--selected {
      color: red;
    }
  }
</style>