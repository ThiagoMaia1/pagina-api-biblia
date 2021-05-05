<template>
  <div class='view'>
    <Header imageUri="LibraryWoman.svg" :title="$t('navbar.examples')" :subtitle="$t('examples.subtitle')"/>
    <ExampleCall v-for="(q, i) in examples" 
      :key="q" 
      :query="q" 
      :title="$t(getTranslationPath(i, 0))"
      :description="$t(getTranslationPath(i, 1))"
      :hasBackground="i % 2 !== 0"  
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Header from '@/components/Header/Header.vue'
  import ExampleCall from '@/components/ExampleCall.vue'

  @Component({
    components: {
      Header,
      ExampleCall
    },
  })
  export default class Examples extends Vue {
    examples = [
      'servicos',
      'versoes',
      'texto/Marcos 1:1-5',
      'texto/João 1/acf',
      'texto/lc1',
      'texto/Gensis 1',
      'texto/Jon1.5,mt2:1-3; nm1',
      'texto/Deut 7:1-5, 9, 8:10',
      'texto/Lc3:1-5, x1, num10:5',  
    ]
    getTranslationPath = (index : number, propertyIndex : string) => `examples.exampleInfo.${index}.${propertyIndex}`
  }
</script>

<style lang="scss" scoped>
  header {
    margin-bottom: 15vh;
  }
</style>