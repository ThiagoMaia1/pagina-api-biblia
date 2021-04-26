<template>
  <div class='view'>
    <Header imageUri="LibraryWoman.svg" :title="$t('navbar.examples')" :subtitle="$t('examples.subtitle')"/>
    <ExampleCall v-for="(e, i) in examples" 
      :key="e.description" 
      :query="e.query" 
      :title="e.title"
      :description="e.description"
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
      {title: 'Serviços', query: 'servicos', description: 'Você pode obter a lista de serviços fornecidos.'},
      {title: 'Versões', query: 'versoes', description: 'Bem como a lista de versões da bíblia disponíveis no API.'},
      {title: 'Texto Formatado', query: 'texto/Marcos 1:1-5', description: 'Você pode escrever o nome do livro completo com capítulo e intervalo de versículos.'},
      {title: 'Definir Versão', query: 'texto/João 1/acf', description: 'Você pode definir a versão do texto (por padrão é NVI).'},
      {title: 'Abreviação', query: 'texto/lc1', description: 'Também pode escrever o nome do livro de forma abreviada.'},
      {title: 'Escrita Aproximada', query: 'texto/Gensis 1', description: 'Ou até errada (dentro do razoável).'},
      {title: 'Referências Encadeadas', query: 'texto/Jon1.5,mt2:1-3; nm1', description: 'Você pode incluir várias referências na mesma chamada. A separação de capítulo e versículo pode ser por ponto (.) ou dois pontos (:), e a separação de referências pode ser por vírgula (,) ou ponto e vírgula (;).'},
      {title: 'Versículos Não Contínuos', query: 'texto/Deut 7:1-5, 9, 8:10', description: 'Quando duas referências são do mesmo livro ou capítulo, você pode omitir o nome do livro ou capítulo das referências seguintes.'},
      {title: 'Referências Inválidas', query: 'texto/Lc3:1-5, x1, num10:5', description: 'Se uma das referências for inválida, isso não atrapalha o restante do resultado.'},
    ]
  }
</script>

<style lang="scss" scoped>
  header {
    margin-bottom: 15vh;
  }
</style>