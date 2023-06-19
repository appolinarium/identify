<script setup lang="ts">
  const { locale, locales, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
  return (locales.value)
  })
  const router = useRouter()
  const lang = ref(locale)
  function changeLang(){
     setLocale(lang.value)
     router.push(switchLocalePath(lang.value))
  }
 
</script>

<template>
  <GroupsRadioGroups>
    <InputRadioButton   
      v-for="loc in availableLocales"
      :obj="loc"
      v-model="lang"
      @change="changeLang"
      >
    </InputRadioButton>
  </GroupsRadioGroups>
</template>
