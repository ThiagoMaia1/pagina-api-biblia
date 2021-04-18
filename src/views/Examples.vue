<template>
  <div class='view'>
    <Header imageUri="Library.svg" :title="$t('navbar.examples')" :subtitle="$t('examples.subtitle')"/>
    <ExampleCall v-for="e in examples" 
      :key="e.description" 
      :query="'texto/' + e.query" 
      :description="e.description"/>
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
      {query: 'Marcos 1:1-5', description: 'Nome do livro completo com capítulo e intervalo de versículos.'},
      {query: 'lc1', description: 'Você também pode escrever o nome do livro de forma abreviada.'},
      {query: 'Gensis 1', description: 'Ou até errada (dentro do razoável).'},
      {query: 'Jon1.5,mt2:1-3; nm1', description: 'Você pode incluir várias referências na mesma chamada. A separação de capítulo e versículo pode ser por ponto (.) ou dois pontos (:), e a separação de referências pode ser por vírgula (,) ou ponto e vírgula (;).'},
      {query: 'Deut. 7:1-5, 9, 8:10', description: 'Quando duas referências são do mesmo livro ou capítulo, você pode omitir o nome do livro ou capítulo das referências seguintes.'},
      {query: 'Lc3:1-5, x1, num10:5', description: 'Se uma das referências for inválida, isso não atrapalha o restante do resultado.'},
    ]
  }
</script>