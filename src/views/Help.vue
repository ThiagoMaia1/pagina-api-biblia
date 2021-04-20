<template>
  <div class='view'>
    <Header imageUri="Helping.svg" :title="$t('navbar.help')" :subtitle="$t('help.subtitle')"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header/Header.vue'; 

  @Component({
    components: {
      Header
    },
  })
  export default class Help extends Vue {}
</script>