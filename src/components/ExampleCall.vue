<template>
    <section>
        <span>{{`${description}: ${query}`}}</span>
        <APICaller :query="query"/>
    </section>
</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import APICaller from '@/components/JsonBox/APICaller.vue'

    @Component({
        components: {APICaller}
    })
    export default class ExampleCall extends Vue {
        @Prop({required: true}) readonly query !: string 
        @Prop({required: true}) readonly description !: string 
    }
</script>

<style lang="scss" scoped>
</style>
