<template>
    <a :href='path'>
        <img :src="`${publicPath}Logo.svg`">
        <span>{{$t('app.title')}}</span>
    </a>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'

    @Component
    export default class Logo extends Vue {
        path = window.location.origin;
        publicPath = process.env.BASE_URL
    }
</script>

<style lang="scss" scoped>
    a {
        height: 15vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: initial;
        > span {
            width: 8em;
            font-weight: 800;
            font-size: 1.4em;
        }
        img {
            height: 100%;
        }
    }
</style>
