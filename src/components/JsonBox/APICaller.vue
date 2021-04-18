<template>
    <JsonBox :jsonData="jsonData"/>
</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import JsonBox from '@/components/JsonBox/JsonBox.vue'
    import {URL_API} from '@/models/Constants'

    @Component({
        components: {JsonBox},
        watch: {
            query() {
                clearTimeout(this.$data.queryTimeout);
                this.$data.queryTimeout = setTimeout(() => 
                    fetch(URL_API + this.$props.query)
                        .then(async result => this.$data.jsonData = await result.json())
                , this.$props.timeout)
            }
        }
    })
    export default class APICaller extends Vue {
        @Prop({required: true}) readonly query !: string
        @Prop({default: 1000}) readonly timeout !: number
        jsonData = ''
        queryTimeout = setTimeout(() => 0, 0);
    }
</script>

<style lang="scss" scoped>
</style>
