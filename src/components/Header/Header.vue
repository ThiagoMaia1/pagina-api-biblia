<template>
    <header>
        <img :src="require(`@/assets/${imageUri}`)"/>
        <div class='api-title'>
            <h1>{{title}}</h1>
            <span>{{subtitle}}</span>
        </div>
    </header>
</template>

<script lang='ts'>
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import GradientCircle from '@/components/GradientCircle.vue'

    @Component({
        components: {GradientCircle}
    })
    export default class Header extends Vue {
        @Prop({required: true}) readonly imageUri !: string
        @Prop({default: ''}) readonly title !: string
        @Prop({default: ''}) readonly subtitle !: string
    }
</script>

<style scoped>
    header {
        height: 79vh;
        width: 100vw;
        position: relative;
        padding: 1vh;
    }
    img {
        left: 10vw;
        bottom: 6vh;
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