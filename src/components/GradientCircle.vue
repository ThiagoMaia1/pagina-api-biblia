<template>
    <div/>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class GradientCircle extends Vue {
    }
</script>

<style scoped lang='scss'>
    @import '@/style.scss';
    $size: calc(2*min(1vh, 1vw));
    div {
        width: $size;
        height: $size;
        background: $gradient;
        border-radius: $size;
    }
</style>