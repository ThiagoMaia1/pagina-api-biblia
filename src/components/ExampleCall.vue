<template>
    <section :class="hasBackground ? 'background' : ''">
        <div class='line'>
            <div class='column'>
                <div class='title'>
                    <GradientCircle v-if="!hasBackground"/>
                    <h2>{{title}}</h2>
                </div>
                <span class='description'>{{description}}</span>
                <div class='query-container'>
                    <h3>{{$t('examples.query')}}</h3>
                    <span class='query'>{{query}}</span>
                </div>
            </div>
            <div class='divider'/>
            <div class='result-container'>
                <h3>{{$t('examples.result')}}</h3>
                <APICaller :query="query" timeout="0"/>
            </div>
        </div>
    </section>
</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import APICaller from '@/components/JsonBox/APICaller.vue'
    import GradientCircle from '@/components/GradientCircle.vue'

    @Component({
        components: {APICaller, GradientCircle}
    })
    export default class ExampleCall extends Vue {
        @Prop({required: true}) readonly title !: string 
        @Prop({required: true}) readonly query !: string 
        @Prop({required: true}) readonly description !: string 
        @Prop({default: false}) readonly hasBackground !: boolean
    }
</script>

<style lang="scss" scoped>
    @import '@/style.scss';
    section {
        .title {
            display: flex;
            align-items: center;
            h2 {
                margin-left: 0.5em;
            }
        }
        padding: 4em 0;
        &.background {
            background: $gradient;
            .line {
                flex-direction: row-reverse;
            }
        }
        h3 {
            text-align: left;
            width: 100%;
            margin-left: 1em;
        }
        .json-box {
            width: 100%;
            height: 60vh;
        }
        .divider {
            width: 15%;
            height: 100%;
        }
        .result-container {
            width: 100%;
        }
    }
    .line {
        display: flex;
        width: 100%;
        padding: 2em 7vw;
        .column {
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 1.1em;
            flex: 0 0 30%;
            .query-container {
                width: 100%;
                h3 {
                    margin: 2em 0;
                }
            }
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
