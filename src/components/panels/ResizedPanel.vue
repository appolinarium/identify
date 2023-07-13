<script setup>

    const props = defineProps(({
        side: Boolean
    }))
    const posXLeft = ref(26)
    const posXRight = ref(19)


    const panel = ref()
    
    function resize(e){
        a.value += .1
    }
    function startDragging () {
        panel.value.addEventListener('mousemove', resize)
    }
    function endDragging () {
        panel.value.removeEventListener('mousemove', resize)
    }
</script>

<template>
    <div
        class="resizablePanel"
        ref="panel"
        >
        <div
            v-if="!side"
            class="border"
            :style="{
                left: `${posXLeft}%`
            }"
            @mouseup="startDragging"
            @mouseleave="endDragging"
            >
        </div>
        <div
            >
            <slot  />
        </div>
        <div
            v-if="side"
            class="border"
            :style="{
                right: `${posXRight}%`
            }"
            @mousedown="startDragging"
            @mouseleave="endDragging"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
    .resizablePanel{
        display: flex;
        flex-grow: 1;
    }
    .border{
        height: 100vh;
        width: 6px;
        background: #fff;
        transform: translateX(-3px);
        position: absolute;
        top: 0;
        z-index: 1;
        cursor: ew-resize;
    }
</style>