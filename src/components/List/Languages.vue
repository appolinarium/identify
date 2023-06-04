<script setup lang="ts">
  const props = defineProps({
    languages: Array
  })
  const lang = ref('')
  const state = useState('lang', () => 'en')
  watch(lang,(newV) => {changeLang(newV)} )
  function changeLang(e){
    state.value = e
  }

</script>

<template>
  <GroupsRadioGroups>
    <InputRadioButton   
      v-for="(item,index) in languages"
      :label="item.name"
      :val="item.key"
      v-model="lang"
      >
    </InputRadioButton>

  </GroupsRadioGroups>
</template>


<style lang="scss">

</style>