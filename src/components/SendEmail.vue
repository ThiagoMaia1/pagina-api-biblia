<template>
    <section>
        <h2>{{$t('help.sectionTitle')}}</h2>
        <div class='column'>
            <div>
                <label for='email'>E-mail</label>
                <input id='email' v-model="emailAddress"/>
            </div>
            <div>
                <label for='content'>{{$t('help.email.content')}}</label>
                <textarea id='content' v-model="content"/>
            </div>
            <div class='button-container'>
                <button v-show="content && isValidEmail" v-on:click="sendMessage()">{{$t('help.email.send')}}</button>
            </div>
        </div>
        <a id='create-github-issue' href='https://github.com/ThiagoMaia1/api-biblia/issues' rel='noopener noreferrer' target='_blank'>
            <span>{{$t('help.github')}}</span>
            <Icon name='brands/github'/>
        </a>
    </section>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'
    import Icon from 'vue-awesome/components/Icon.vue'
    import 'vue-awesome/icons/brands/github'
    import {firebaseFunctions} from '@/firebase'
    import {emailAddress as destinationAddress} from '@/models/Constants'
    const sendEmail = firebaseFunctions.httpsCallable('enviarEmail');
    
    @Component({
        components: {
            Icon
        },
        computed: {
            isValidEmail() {
                return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.$data.emailAddress);
            }
        },
        data() {
            return {
                emailAddress: '',
                content: '',
            }
        }
    })
    export default class ExampleCall extends Vue {
        sendMessage() : void {
            sendEmail({
                to: destinationAddress,
                subject: 'Pedido de Ajuda no Api Bíblia Humana',
                text: `Usuário: ${this.$data.emailAddress}\n\nMensagem: ${this.$data.content}`
            })
        }
    }
</script>

<style lang='scss' scoped>
    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em 4em;
        > div {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1.5em;
        }
        .button-container {
            height: 15vh;
            width: 100vw;
            justify-content: center;
            align-items: center;
        }
        label {
            width: 20vw;
            text-align: right;
            margin-top: 1em;
        }
    }
    input, textarea {
        border-radius: 5px;
        border: 1px lightgray solid;
        width: 70vw;
        margin-left: 2em;
        font-size: 15px;
    }
    input {
        padding: 1em;
    }
    textarea {
        height: 50vh;
        padding: 1.5em;
    }
    #create-github-issue {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10vh;
        width: 20vw;
        background-color: black;
        color: white;
        padding: 2em;
        border: black solid 1px;
        border-radius: 10px;
        font-weight: bold;
        margin: 2vh auto;
        span {
            max-width: 60%;
        }
        &:hover {
            background-color: white;
            color: black;
        }
        .fa-icon {
            width: auto;
            height: 3em;
        }
    }
</style>

