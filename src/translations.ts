import Vue from 'vue'
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const ptMessages = {
    app: {
        title: 'API Bíblia para Humanos', 
        developedBy: 'Desenvolvido por Thiago Maia',
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
        subtitle: 'Veja como tirar o máximo de proveito do API',
        result: 'Resultado',
        query: 'Requisição',
        exampleInfo: [
            ['Serviços', 'Você pode obter a lista de serviços fornecidos.'],
            ['Versões', 'Bem como a lista de versões da bíblia disponíveis no API.'],
            ['Texto Formatado', 'Você pode escrever o nome do livro completo com capítulo e intervalo de versículos.'],
            ['Definir Versão', 'Você pode definir a versão do texto (por padrão é NVI).'],
            ['Abreviação', 'Também pode escrever o nome do livro de forma abreviada.'],
            ['Escrita Aproximada', 'Ou até errada (dentro do razoável).'],
            ['Referências Encadeadas', 'Você pode incluir várias referências na mesma chamada. A separação de capítulo e versículo pode ser por ponto (.) ou dois pontos (:), e a separação de referências pode ser por vírgula (,) ou ponto e vírgula (;).'],
            ['Versículos Não Contínuos', 'Quando duas referências são do mesmo livro ou capítulo, você pode omitir o nome do livro ou capítulo das referências seguintes.'],
            ['Referências Inválidas', 'Se uma das referências for inválida, isso não atrapalha o restante do resultado.'],
        ],
        
    },
    help: {
        subtitle: 'Ficou com alguma dúvida? Pergunte!',
        sectionTitle: 'Enviar Mensagem',
        email: {
            content: 'Faça sua pergunta ou sugestão',
            send: 'Enviar',
        },
        github: 'Ou abra um problema no GitHub'
    },
}

const enMessages = {
    app: {
        title: 'Bible API for Humans',
        developedBy: 'Developed by Thiago Maia',
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
        subtitle: 'See how you can use the API to it\'s max',
        result: 'Result',
        query: 'Query',
        exampleInfo: [
            ['Services', 'You can get the list of services provided.'],
            ['Versions', 'As well as the list of bible versions available.'],
            ['Formatted Text', 'You can write the book\'s whole name with chapter and verse.'],
            ['Define Version', 'You can set the bible version (default is NIV).'],
            ['Abbreviations', 'You may also write the book\'s name in an abbreviated way.'],
            ['Approximate Spelling', 'Or even mispell it (within a reasonable margin).'],
            ['Chained References', 'You may include multiple references in a single call. The separator for chapter and verse may be a dot (.) or a colon (:), and the separator for multiple references may be a comma (,) or a semi-colon (;).'],
            ['Non-Continuous Verses', 'When two chained references are for the same book or chapter, you can ommit the book or chapter for the following references.'],
            ['Invalid References', 'If one of the references is invalid, that doesn\'t invalidate the remainder of the request.'],
        ]
    },
    help: {
        subtitle: 'Have any doubts? Ask!',
        sectionTitle: 'Send Message',
        email: {
            content: 'Make your question or suggestion',
            send: 'Send',
        },
        github: 'Or open and issue on GitHub'
    },
}

const messages : Record<string, typeof ptMessages> = {
    'pt': ptMessages,
    'en': enMessages
}

export default new VueI18n({
    locale: navigator.language.split('-')[0],
    messages,
    fallbackLocale: 'en',
})
