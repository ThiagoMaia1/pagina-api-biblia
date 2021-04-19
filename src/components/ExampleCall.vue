<template>
    <section :class="hasBackground ? 'background' : ''">
        <div class='column'>
            <div class='line'>
                <span class='description'>{{description}}</span>
                <span class='query'>{{query}}</span>
            </div>
            <h3>Resultado</h3>
            <APICaller :query="query" timeout="0"/>
        </div>
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
        @Prop({default: false}) readonly hasBackground !: boolean
    }
</script>

<style lang="scss" scoped>
    @import '@/style.scss';
    section {
        padding: 2.5em 0;
        &.background {
            background-color: rgb(247, 247, 247);
            // background-color: #ffffff;
            // opacity: 1;
            // background-image:  repeating-radial-gradient( circle at 50% 50%, transparent 0, #ffffff 30px ), repeating-linear-gradient( #c6e9e155, #c6e9e1 );    
        }
        h3 {
            text-align: left;
            width: 100%;
            margin-left: 1em;
        }
    }
    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 2em 8vw;
        .line {
            display: flex;
            align-items: center;
            font-size: 1.1em;
            .query {
                font-family: Consolas;
                padding: 1em;
                margin: 0 2em;
                min-width: max-content;
                border-radius: 5px;
                border: 1px lightgray solid;
            }
        }
        > * {
            margin-bottom: 1.5em;
        }
    }
</style>
