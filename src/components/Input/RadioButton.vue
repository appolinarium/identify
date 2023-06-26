<script setup lang="ts">
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
    <span class="radio">
        <input  class="radio__input"
                type="radio"
                :id="obj.code"
                :value="obj.code"
                :checked="obj.code === modelValue"
                @change="changeInput"
                >

        <label  :for="obj.code"
                class="radio__label"
                :class="{'radio__label--checked': obj.code === modelValue}"
                >
            {{obj.name}}
        </label>
    </span>
</template>


<style lang="scss">
@use 'sass:map';

.radio{
    padding: 1%;
    &__input{
        display: none;
    }
    &__label{
        color: #c9cfd9;
        font-family: 'Lato';
        @include font-size(14px);
        font-weight: 400;
        cursor: pointer;
        &:hover{
            color: #fff;
        }
        &--checked{
            color: map.get($colors, 'fourthy');
        }
    }
}
</style>