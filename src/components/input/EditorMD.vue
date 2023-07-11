<script setup>
    import {marked} from 'marked'
    const rawInput = ref('')
    const inputMD = inject('inputMD')

    watch(rawInput,newV => {
        if(mdValidator(newV)){
            inputMD.value = marked(newV)
        }
        else{
            inputMD.value = new Error('This shit is unaccepted!')
        }
    })
    
    function mdValidator(string){
      if(string.match(/# /) || string.match(/\\n # /)){
        return false
      }
      else{
        return true
      }
  
    }
    
    const fontSize = ref(16)
    
</script>

<template>
    <div
        class="md-editor"
        >
        <textarea
            v-on:keyup.alt.up.exact="fontSize++"
            v-on:keyup.alt.down.exact="fontSize--"
            class="md-editor__inputfield"
            rows="10"
            v-model="rawInput"
            :style="{
                fontSize: `${fontSize}px`
            }"
            >
        </textarea>
        
        <span
            class="md-editor__filebutton">
            
        </span>
    </div>
</template>

<style scoped lang="scss">
@use 'sass:map';
    .md-editor{
        background-color: map.get($colors, 'secondary-bg');
        display: flex;
        border: 1px solid map.get($colors, 'thirdy');

        &__inputfield{
            background-color: transparent;
            color: white;
            @include padding(15px);
            width: 100%;
            border: none;
            resize: none;
            outline: none;
        }
    }
</style>