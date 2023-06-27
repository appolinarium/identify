<script setup lang="ts">
    const { locale,locales } = useI18n()
    const props = defineProps({
        obj: Object,
        modelValue: String,
    })
    const emits = defineEmits(['update:modelValue'])
    
    function changeInput(){
        emits('update:modelValue',props.obj.code)
    }
</script>

<template>
    <span class="centered">
        <input
            :id="obj.code"               
            type="checkbox" 
            :class="locale === 'ru' ? 'checkbox_ru' : 'checkbox'" 
            @change="changeInput"
            >
        <label
            :for="obj.code" 
            :class="locale === 'ru' ? 'checkbox_ru__label' : 'checkbox__label'"
            >{{ obj.name}}</label>
    </span>
</template>

<style scoped lang="scss">
  @use 'sass:map';

    .centered{
        display: flex;
    }
    .checkbox{
        appearance: none;
        border: 2px solid map.get($colors, 'thirdy');
        border-radius: 3px;
        margin: 0 4px;
        width: 1rem;
        height: 1rem;
        
        &__label{
            font-family: 'Lato';
            color: map.get($colors, 'primary');
            @include font-size(13px);
            @include rfs(.8px,letter-spacing);
            
        }
    }
    .checkbox_ru{
        appearance: none;
        border: 2px solid map.get($colors, 'thirdy');
        border-radius: 3px;
        margin: 0 4px;
        width: 1rem;
        height: 1rem;
        
        &__label{
            font-family: 'Lato';
            color: map.get($colors, 'primary');
            @include font-size(13px);
            @include rfs(.8px,letter-spacing);
            
        }
    }
    .checkbox:checked{
        background-color: map.get($colors, 'fourthy');
        &::before{
            content: 'V';
            padding-left: 1.5px;
        }
        animation: 1s 1;
        animation-name: click;
    }

    .checkbox_ru:checked{
        background-color: map.get($colors, 'fourthy');
        &::before{
            content: 'Z';
            padding-left: 2px;
        }
        animation: 1s 1;
        animation-name: click;
    }

    @keyframes click {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100%;
        }
    }
</style>