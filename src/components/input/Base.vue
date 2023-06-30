<script setup>
    const props=defineProps({
        prompt : String
    })
</script>

<template>
    <div class="input">
        <input  class="input__field"
                type="text"
                :placeholder="prompt"
                >

        <template class="centered">
            <slot>
            </slot>
        </template>
        
    </div>
</template>

<style scoped lang="scss">
  @use 'sass:map';
    .input{
        display: flex;
        gap: 10px;
        background-color: map.get($colors, 'secondary-bg');
        border: 1px solid map.get($colors, 'thirdy');
        border-radius: 4px;
        padding: 16px 38px;

        &__field{
            background: none;
            border: none;
            caret-color: white;
            color: white;
            font-family: 'Lato';
            font-weight: 900;
            outline: none;
            min-width: 200px;
        }
    }
    .centered{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>
