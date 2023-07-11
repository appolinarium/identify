<script setup>
    import Clipboard from '@/node_modules/bootstrap-icons/icons/clipboard.svg'
    import ClipboardChecked from '@/node_modules/bootstrap-icons/icons/clipboard-check.svg'
    import AddNew from '@/node_modules/bootstrap-icons/icons/key.svg'

    const copyClick = ref(false)
    const keyClick = ref(false)
    watch(copyClick, (newV) => {
        if(copyClick.value){
            setTimeout(() => copyClick.value = !copyClick.value,800)
        }
    } )
    watch(keyClick, (newV) => {
        if(keyClick.value){
            setTimeout(() => keyClick.value = !keyClick.value,1000)
        }
    } )

    const selectedFlags = ref([])
</script>

<template>
    <div class="flex">
        <InputBase 
            :prompt="$t('input.key.placeholder')"
            class="centered"
            >
            <AddNew 
                fill="white"
                width='100%'
                height="21px"
                viewBox="0,0,16,16"
                class="button"
                :class="keyClick == false ? 'button--icon' : 'button--icon--key-animated'"
                @click="keyClick = !keyClick "
                />
            <Clipboard
                v-if="!copyClick"
                class="button"
                fill="white"
                width='100%'
                height="21px"
                viewBox="0,0,20,16"
                @click="copyClick = !copyClick "
                />
            <ClipboardChecked
                v-if="copyClick"
                class="button button--icon--copy-animated"
                fill="white"
                width='100%'
                height="21px"
                viewBox="0,0,20,16"
                />
        </InputBase >

        <InputButton
            :text="$t('button.submit.authorize.signup')"
            class="button button--main"
            />
        
    </div>
    <GroupRadio
        class="checkboxes">
        <div class="checkboxes__item-wrap">
            <InputRadioButton 
                :obj="{name:$t('checkbox.license'),code:'license'}"
                :modelValue="selectedFlags"
                />
            <InputRadioButton  
                :obj="{name:$t('checkbox.saveSession'),code:'savesession'}"
                :modelValue="selectedFlags"
                />
        </div>
    </GroupRadio>
</template>

<style scoped lang="scss">
    .flex{
        display: flex;
        justify-content: center;
        @include rfs(64px,gap);
    }
    .button{
        cursor: pointer;
        &--icon{
            // tooltip here
            &--copy-animated{
                animation: 1s;
                animation-name: copyClick;
            }
            &--key-animated{
                animation: 1s;
                animation-name: newKey;
            }
        }
        &--main{
            transition: box-shadow .5s linear;
            &:hover{
                box-shadow: inset 0 0 10px 2px #00745a;
            }
            &--animated{
                animation: 1s 1;
                animation-name: click;
            }
        }
    }
    @keyframes copyClick {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100%;
        }
    }
    @keyframes newKey {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    .checkboxes{
        display: flex;
        justify-content: center;
        @include padding (20px 0 );

        &__item-wrap{
            display: flex;
            gap: 20px;
        }
    }
</style>