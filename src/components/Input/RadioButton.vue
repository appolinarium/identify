<template>
    <span class="radio">
        <input  class="radio__input"
                type="radio"
                :id="label"
                :value="val"
                :checked="val === modelValue"
                @change="changeInput"
                >

        <label  :for="label"
                class="radio__label"
                :class="{'radio__label--checked': val === modelValue}"
                >
            {{label}}
        </label>
    </span>
</template>

<script setup lang="ts">
    const props = defineProps({
        label: String,
        val: String,
        modelValue: String,
    })
    const emits = defineEmits(['update:modelValue'])

    function changeInput(event){
        emits('update:modelValue',event.target.value)
    }
</script>

<style lang="scss">
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
        &:hover{
            color: #fff;
        }
        &--checked{
            color: $accent;
        }
    }
}
</style>