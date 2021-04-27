<template>
    <section>
        <div class='column'>
            <h2>{{$t('tryOut.tryItOut')}}</h2>
            <div class='input-container' v-on:click="() => $refs.input.focus()">
                <CopyButton :copyValue="URL_API + service + reference"/>
                <span>{{URL_API + service}}</span>
                <input ref="input" type="text" v-model="reference" :placeholder="$t('tryOut.inputReferencePlaceholder')">
            </div>
            <APICaller :query="service + reference"/>
        </div>
    </section>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'
    import APICaller from '@/components/JsonBox/APICaller.vue'
    import {URL_API} from '@/models/Constants'
    import CopyButton from '@/components/CopyButton.vue'

    @Component({
        components: {APICaller, CopyButton}
    })
    export default class TryOutAPI extends Vue {
        service = 'texto/'
        reference = ''
        URL_API = URL_API
    }
</script>

<style lang="scss" scoped>
    section {
        width: 100%;
    }
    .column {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min-content;
        > * {
            margin-bottom: 1.5em;
        }
    }
    .input-container {
        border-radius: 5px;
        border: 1px lightgray solid;
        display: flex;
        align-items: center;
        width: max-content;
        padding: 0 1em;
        > span {
            color: rgb(179, 179, 179);
            cursor: pointer;
            user-select: none;
        }
        > * {
            font-size: 120%;
            padding: 0.5em 0;
        }
        input {
            width: 20em;
            height: 100%;
        }
    }
</style>
