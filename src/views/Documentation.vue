<template>
  <div class='view'>
    <Header imageUri="PileOfBooks.svg" :title="$t('navbar.documentation')" :subtitle="$t('documentation.subtitle')"/>
    <div id='content-container'>
      <VueMarkdown :source="docs">
      </VueMarkdown>
    </div>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header/Header.vue'; 
  import VueMarkdown from 'vue-markdown'
  import i18n from '@/translations'

  const locales = {
    'pt': 'Português',
    'en': 'English',
  }

  @Component({
    components: {
      Header,
      VueMarkdown
    },
    mounted() {
      fetch(
        'https://api.github.com/repos/ThiagoMaia1/api-biblia/readme', 
        {
          headers: {
            Authorization: process.env.VUE_APP_GITHUB_API_KEY,
            Accept: "application/vnd.github.v3.full+json"
          }
        }).then(result => result.json())
          .then(json => {
            let docs = Buffer.from(json.content, 'base64').toString()
            docs = docs.split(/\n(?=[^\n]*\n=========)|\n=========\n\n/)
            let locale = locales[i18n.locale]
            console.log(locale);
            for (let i = 0; i < docs.length; i++)
              if (docs[i] === locale) {
                this.$data.docs = docs[i+1]
                return
              }
            this.$data.docs = docs[1]
          })
    }
  })
  export default class Documentation extends Vue {
    docs = ''
  }
</script>

<style lang='scss'>
  @import '@/style.scss'; 
  #content-container {
    width: 100%;
    > * {
      margin: 0 auto;
      width: 60%;
    }
    text-align: justify;
    h1 {
      border-bottom: 1px solid #2c3e5063;
    }
    p {
      margin-left: 2em;
    }
  }
</style>