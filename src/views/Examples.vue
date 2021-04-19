<template>
  <div class='view'>
    <Header imageUri="Library.svg" :title="$t('navbar.examples')" :subtitle="$t('examples.subtitle')"/>
    <ExampleCall v-for="(e, i) in examples" 
      :key="e.description" 
      :query="e.query" 
      :description="e.description"
      :hasBackground="i % 2 === 0"  
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
      {query: 'versoes', description: 'Você pode obter a lista de versões da bíblia disponíveis no API.'},
      {query: 'servicos', description: 'Bem como a lista de serviços fornecidos.'},
      {query: 'texto/Marcos 1:1-5', description: 'Você pode escrever o nome do livro completo com capítulo e intervalo de versículos.'},
      {query: 'texto/João 1/acf', description: 'Você pode definir a versão do texto (por padrão é NVI).'},
      {query: 'texto/lc1', description: 'Também pode escrever o nome do livro de forma abreviada.'},
      {query: 'texto/Gensis 1', description: 'Ou até errada (dentro do razoável).'},
      {query: 'texto/Jon1.5,mt2:1-3; nm1', description: 'Você pode incluir várias referências na mesma chamada. A separação de capítulo e versículo pode ser por ponto (.) ou dois pontos (:), e a separação de referências pode ser por vírgula (,) ou ponto e vírgula (;).'},
      {query: 'texto/Deut 7:1-5, 9, 8:10', description: 'Quando duas referências são do mesmo livro ou capítulo, você pode omitir o nome do livro ou capítulo das referências seguintes.'},
      {query: 'texto/Lc3:1-5, x1, num10:5', description: 'Se uma das referências for inválida, isso não atrapalha o restante do resultado.'},
    ]
  }
</script>