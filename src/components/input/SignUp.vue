<script setup>
    import Clipboard from '@/node_modules/bootstrap-icons/icons/clipboard.svg'
    import ClipboardChecked from '@/node_modules/bootstrap-icons/icons/clipboard-check.svg'
    import AddNew from '@/node_modules/bootstrap-icons/icons/key.svg'

    const copied = ref(false)
    watch(copied, (newV) => {
        if(copied.value){
            setTimeout(() => copied.value = !copied.value,800)
        }
    } )

    const selectedFlags = ref([])
</script>

<template>
    <div class="flex">
        <InputBase :prompt="$t('input.key.placeholder')">
            <AddNew fill="white"
                    width='25px'
                    height="25px"
                    viewBox="0,0,20,20"
                    class="button"
                    />
            <Clipboard
            v-if="!copied"
            class="button"
            fill="white"
            @click="copied = !copied "
            />
            <ClipboardChecked
            v-if="copied"
            class="button button--animated"
            fill="white"
            />
        </InputBase >

        <InputButton :text="$t('button.submit.authorize.signup')"/>
        
    </div>
    <GroupsRadioGroups
        class="checkboxes">
        <InputRadioButton :obj="{name:$t('checkbox.license'),code:'license'}"/>
        <InputRadioButton  :obj="{name:$t('checkbox.saveSession'),code:'savesession'}"/>
    </GroupsRadioGroups>
</template>

<style scoped lang="scss">
    .flex{
        display: flex;
        justify-content: center;
        @include rfs(64px,gap);
    }
    .button{
        &--animated{
            animation: 1s 1;
            animation-name: click;
        }
        cursor: pointer;
    }

    @keyframes click {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 100%;
        }
    }

    .checkboxes{
        gap: 20px;
        padding: 20px 140px 0 0;
        
    }
</style>