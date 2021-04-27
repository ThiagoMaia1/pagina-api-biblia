<template>
    <div v-on:click="copy()">
        <Icon name='clone'/> 
        <div class='copied-message' :style="{opacity: copiedMessage ? 1 : 0}">
            {{$t('tryOut.copied')}}
        </div>
    </div>
</template>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import Icon from 'vue-awesome/components/Icon.vue'
    import 'vue-awesome/icons/clone'

    @Component({
        components: {Icon}
    })
    export default class TryOutAPI extends Vue {
        @Prop({required: true}) readonly copyValue !: string
        copiedMessage = false
        copy() {
            const el = document.createElement('textarea');
            el.value = this.copyValue;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.copiedMessage = true
            setTimeout(() => this.copiedMessage = false, 1500)
        }
    }
</script>

<style lang="scss" scoped>
    div {
        cursor: pointer;
        border-radius: 100px;
        margin-right: 1em;
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.5em !important;
        position: relative;

        &:hover {
            background-color: lightgray;
        }
        max-height: 2em;
        flex: 0;
    }
    .copied-message {
        font-size: 90%;
        position: absolute;
        top: -120%;
        left: -50%;
        background: rgb(245, 245, 245);
        border: 1px rgb(224, 224, 224) solid;
        border-radius: 5px;
        padding: 0.5em;
        transition: opacity 0.5s ease-in-out;
        pointer-events: none;
    }
    .fa-icon {
        width: auto;
        height: 1em;
    }
</style>
