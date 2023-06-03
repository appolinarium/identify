<script setup lang="ts">
  const props = defineProps({
    items: Array
  }) 
  const lang = useState('lang', () => 'en')

  function changeLang(e : Object) {
    lang.value = e.key
  }

</script>

  
<template>
    <div class="card flex justify-content-center">
      <SelectButton
      v-on:update:modelValue="changeLang"
      :options="items"
      optionLabel="name"/>
    </div>
</template>


<style lang="scss">
.p-selectbutton{
  display: flex;
  justify-content: space-between;
}
.p-selectbutton .p-button {
  border: none !important;
  background: none !important;
  color: #c9cfd9 !important;
  @include font-size(14px);
  font-weight: 400;
  font-family: 'Lato';
  :hover{
    color: #fff !important;
  }
}
.p-button.p-highlight:hover {
  border: none !important;
}
.p-button:focus{
  box-shadow: none !important;
  span{
    color: $accent;
  }
}

</style>