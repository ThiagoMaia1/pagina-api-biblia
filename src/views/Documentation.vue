<template>
  <div class='view'>
    <Header imageUri="PileOfBooks.svg" :title="$t('navbar.documentation')" :subtitle="$t('documentation.subtitle')"/>
    <VueMarkdown :source="docs">
    </VueMarkdown>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header/Header.vue'; 
  import VueMarkdown from 'vue-markdown'

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
          .then(json => this.$data.docs = Buffer.from(json.content, 'base64').toString())
    }
  })
  export default class Documentation extends Vue {
    docs = ''
  }
</script>