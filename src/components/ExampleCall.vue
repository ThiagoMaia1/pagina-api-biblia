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
            background: $gradient;
            // color: white;
        //     background-color: rgb(247, 247, 247);
        //    background-color: #ffffff;
        //     opacity: 1;
        //     background: radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #ffffff 20%, #ffffff 80%, transparent 80%, transparent) 10px 10px, linear-gradient(#dcfae3 0.8px, transparent 0.8px) 0 -0.4px, linear-gradient(90deg, #dcfae3 0.8px, #ffffff 0.8px) -0.4px 0;
        //     background-size: 20px 20px, 20px 20px, 10px 10px, 10px 10px;
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
                background-color: white;
                color: initial;
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
