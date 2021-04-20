import Vue from 'vue'
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const ptMessages = {
    app: {
        title: 'API Bíblia para Humanos', 
    },
    navbar : {
        home: 'Início',
        examples: 'Exemplos',
        documentation: 'Documentação',
        help: 'Ajuda',
    },
    header: {
        subtitle: 'Escreva referências do jeito que quiser, e receba de volta os textos bíblicos.',
    },
    apiInfo: {
        main: 'O @:app.title é um API rest capaz de entender referências bíblicas escritas de uma forma não rígida, na linguagem natural em que pessoas escrevem as referências, com diferentes convenções e caracteres de separação. Além disso, ele é capaz de ler mútiplas referências combinadas, para que os usuários possam pesquisar textos bíblicos de maneira rápida e sem dor de cabeça.'
    },
    tryOut: {
        tryItOut: 'Experimente o API',
        inputReferencePlaceholder: 'Digite uma referência bíblica',
        copy: 'Copiar',
        copied: 'Copiado!',
    },
    documentation: {
        subtitle: 'Leia a documentação completa'
    },
    examples: {
        subtitle: 'Veja como tirar o máximo de proveito do API'
    },
    help: {
        subtitle: 'Ficou com alguma dúvida? Pergunte!'
    },
}

const enMessages = {
    app: {
        title: 'Bible API for Humans'
    },
    navbar : {
        home: 'Home',
        examples: 'Examples',
        documentation: 'Documentation',
        help: 'Help',
    },
    header: {
        subtitle: 'Write references however you want, and get bible texts in return.',
    },
    apiInfo: {
        main: 'The @:app.title is a RESTful API capable of understanding bible references written in a non-rigid way, in natural language as people usually write references, with different conventions and separator characters. It is also capable of reading multiple chained references, to allow users to search bible texts fast and with no headache.'
    },
    tryOut: {
        tryItOut: 'Test the API',
        inputReferencePlaceholder: 'Type in a bible reference',
        copy: 'Copy',
        copied: 'Copied!',
    },
    documentation: {
        subtitle: 'Read the full documentation'
    },
    examples: {
        subtitle: 'See how you can use the API to it\'s max'
    },
    help: {
        subtitle: 'Have any doubts? Ask!'
    },
}

const messages : Record<string, typeof ptMessages> = {
    'pt': ptMessages,
    'en': enMessages
}

export const i18n = new VueI18n({
    locale: navigator.language.split('-')[0],
    messages,
    fallbackLocale: 'en',
})

export default i18n;