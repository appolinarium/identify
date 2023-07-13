<script setup>
    
    const props = defineProps(({
        inputvar : String
    }))
    
    const selectedTitle = ref('md')
    provide('selectedTitle', selectedTitle)
    

</script>

<template>
    <div
        class="editor">
        <div
            class="editor__tabs">
            <ul
                class="editor__tabs__wrap">
                <li
                    class="editor__tabs__item"
                    @click="selectedTitle = 'md'"
                    >Editor</li>
                <li
                    class="editor__tabs__item"
                    @click="selectedTitle = 'manual'"
                    >Authors manual</li>
            </ul>
        </div>
        <div
            class="editor__viewbox__wrap"
            >
            <div
                class="editor__viewbox__content"
                >
                <TabsBase tabkey="md">
                    <InputEditorMD/>
                </TabsBase>
                <TabsBase tabkey="manual">
                    <TypeMdManual/>
                </TabsBase>
                <h2>{{ input }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use 'sass:map';
    .editor{
        border-radius: 4px;
        border: 1px solid map.get($colors, 'thirdy');
        background-color: map.get($colors, 'secondary-bg');
        width: 100%;

        &__tabs{
            display: flex;
        }

        &__tabs__wrap{
            @include ul-reset();
            display: flex;
            width: 100%;
        }

        &__tabs__item{
            border: .5px solid map.get($colors, 'thirdy');
            border: .5px solid map.get($colors, 'thirdy');
            display: flex;
            width: 50%;
            justify-content: center;
            color: white;
            font-family: 'Inter';
            @include font-size(10px);
            letter-spacing: 0.6px;
            line-height: 1.5;
            @include padding(6px 0);
            cursor: pointer;
        }

        &__inputfield{
            background-color: map.get($colors, 'secondary-bg');
            caret-color: white;
            border: none;
            @include padding(50px 40px 20px 40px);
            color: white;
            @include rfs(12px, font-size);
            outline: none;
            font-family: 'Inter';
            letter-spacing: .6px;
        
        }
    }
</style>