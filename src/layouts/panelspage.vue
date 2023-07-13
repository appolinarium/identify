<script setup>
    const posXLeft = ref(26)
    const posXRight = ref(19)
    const posXContent = computed(() => { return 100 - (posXLeft.value + posXRight.value)})

    function resizeLeft(e){
        const percentage = (e.pageX / window.innerWidth) * 100

        if (percentage >= 10 && percentage <= 30) {
            posXLeft.value = percentage
        }
    }
    function resizeRight(e){
        const percentage = (e.pageX / window.innerWidth) * 100

        if (percentage >= 70 && percentage <= 90) {
            posXRight.value = 100 - percentage
        }
    }
    function startDragging (e) {
        if(e.target.id == 'leftDivider'){
            document.addEventListener('mousemove', resizeLeft)
            console.log('event added on the left')
        }
        if(e.target.id == 'rightDivider'){
            document.addEventListener('mousemove', resizeRight)
            console.log('event added on the right')
        }
    }
    function endDragging (e) {
        document.removeEventListener('mousemove', resizeLeft)
        document.removeEventListener('mousemove', resizeRight)
    }
</script>

<template>
    <div
        class="wrap"
        >
        <div
            @mouseup="endDragging"
            :style="{
                width: `${posXLeft}%`,
                height: '100%'
            }"
            >
            <NuxtLayout
                name="navigation">
            </NuxtLayout>

        </div>
        <div
            class="border"
            id="leftDivider"
            :style="{
                left: `${posXLeft}%`
            }"
            @mousedown="startDragging"
            @mouseup="endDragging"
            >
            <div
                class="border__line">
                
            </div>
        </div>
        <div
            class="middle"
            @mouseup="endDragging"
            :style="{
                width: `${posXContent}%`
            }"
            >
            <slot/>
        </div>
        <div
            class="border"
            id="rightDivider"
            :style="{
                right: `${posXRight}%`
            }"
            @mousedown="startDragging"
            @mouseup="endDragging"
            >
        </div>
        <div
            @mouseup="endDragging"
            :style="{
                width: `${posXRight}%`
                }"
            >
            
        </div>
    </div>

</template>

<style scoped lang="scss">
    @use 'sass:map';
    .wrap{
        @include pm-reset();
        height: 100vh;
        background-color: map.get($colors, 'secondary-bg');
        color: white;
        
    }
    .middle{
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
    }
    
    .border{
        height: 100vh;
        width: 7px;
        transform: translateX(-3px);
        position: absolute;
        top: 0;
        cursor: ew-resize;
        display: flex;
        justify-content: center;

        &__line{
            height: 100vh;
            width: 1px;
            background: map.get($colors, 'secondary');
            

        }
    }
</style>