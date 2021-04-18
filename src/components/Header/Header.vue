<template>
    <header>
        <img src="../../assets/BookBench.svg"/>
        <!-- <GradientCircle/> -->
        <div class='api-title'>
            <h1>{{$t('app.title')}}</h1>
            <span>{{$t('header.subtitle')}}</span>
        </div>
    </header>
</template>

<script lang='ts'>
    import { Component, Vue } from 'vue-property-decorator'
    import GradientCircle from '@/components/GradientCircle.vue'

    @Component({
        components: {GradientCircle}
    })
    export default class Header extends Vue {
    }
</script>

<style scoped>
    header {
        height: 85vh;
        width: 100vw;
        position: relative;
        padding: 1vh;
    }
    img {
        left: 2vw;
        bottom: 4vh;
        position: absolute;
        height: 60vh;
        object-fit: contain;
    }
    .api-title {
        float: right;
        margin-right: 5vw;
        margin-top: 5vh;
        width: 40vw;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-evenly;
    }
    h1 {
        font-size: 5em;
    }
    span {
        font-size: 1.5em;
        max-width: 80%;
    }
</style>