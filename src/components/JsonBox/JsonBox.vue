<template>
    <JsonViewer 
        theme='json-box'
        :value="jsonData"
        :expand-depth=5
        :copyable="{copyText: $t('tryOut.copy'), copiedText: $t('tryOut.copied')}"
        expanded
        sort/>
</template>

<script lang='ts'>
    import {Component, Vue, Prop} from 'vue-property-decorator'
    /* eslint-disable */
    // @ts-ignore
    import JsonViewer from 'vue-json-viewer'
    /* eslint-enable */

    @Component({
        components: {JsonViewer}
    })
    export default class JsonBox extends Vue {
      @Prop({required: true}) readonly jsonData !: JSON;  
    }
</script>

<style lang="scss">
    .json-box {
        width: 100%;
        background: #fff;
        height: 70vh;
        white-space: nowrap;
        color: #525252;
        font-size: 1.1em;
        font-family: Consolas, Menlo, Courier, monospace;
        border: 1px lightgray solid;
        border-radius: 5px;
        overflow: auto;
        text-align: left;
        padding: 1em;

        .jv-tooltip.right {
            right: 2vw;
        }

        .jv-ellipsis {
            color: #999;
            background-color: #eee;
            display: inline-block;
            line-height: 0.9;
            font-size: 0.9em;
            padding: 0px 4px 2px 4px;
            border-radius: 3px;
            vertical-align: 2px;
            cursor: pointer;
            user-select: none;
        }
        .jv-button { 
            color: #111111; 
            margin-top: 1em;
            background-color: lightgray;
            border-radius: 100px;
            padding: 0.4em 0.8em;
            min-width: 8vw;
            text-align: center;
        }
        .jv-key { 
            color: #929292;
            font-weight: 800;
            &::after {
                content: " ";
            }    
        }
        .jv-item {
            line-height: 1.8;
            &.jv-array { color: #111111 }
            &.jv-boolean { color: #fc1e70 }
            &.jv-function { color: #067bca }
            &.jv-number { color: #fc1e70 }
            &.jv-number-float { color: #fc1e70 }
            &.jv-number-integer { color: #fc1e70 }
            &.jv-object { color: #111111 }
            &.jv-undefined { color: #e08331 }
            &.jv-string {
                color: #42b983;
                word-break: break-word;
                white-space: normal;
            }
        }
        .jv-code {
            .jv-toggle {
                margin-right: 0.5em;
            &:before {
                padding: 0px 2px;
                border-radius: 2px;
            }
        }
        .jv-node .jv-node {
            margin-left: 0.2em;
            margin-bottom: 0.1em;
            padding-left: 3vw;
            border-left: lightgray 1px dashed;
        }
        }
    }
</style>


