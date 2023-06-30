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
    <label
        class="checkbox">
        
        <input
            type="checkbox" 
            class="checkbox__field"
            @change="changeInput"
            >
        <span
            class="checkbox__checkmark"></span>

        <span
            class="checkbox__label"
            >{{ obj.name}}</span>
    </label>
</template>

<style scoped lang="scss">
  @use 'sass:map';

    .checkbox{
        display: flex;
        align-items: center;

        &__field{
            display: none;
            
        }
        
        &__checkmark{
            border: 2px solid map.get($colors, 'thirdy');
            border-radius: 3px;
            margin: 0 6px;
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            display: inline-block;
            transition: background-color 0.2s linear;
            
        }

        & input:checked + &__checkmark{
            background: map.get($colors, 'thirdy-bg') url('@/node_modules/bootstrap-icons/icons/x.svg') center/130% no-repeat;

        }

        &__label{
            font-family: 'Lato';
            color: map.get($colors, 'primary');
            @include font-size(13px);
            @include rfs(.8px,letter-spacing);
            cursor: pointer;
        }
    }
    
    .checkbox:checked{
        background-color: map.get($colors, 'fourthy');
        
    }
</style>