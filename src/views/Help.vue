<template>
  <div class='view'>
    <Header imageUri="Helping.svg" :title="$t('navbar.help')" :subtitle="$t('help.subtitle')"/>
    <SendEmail/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/Header/Header.vue'; 
  import SendEmail from '@/components/SendEmail.vue'; 

  @Component({
    components: {
      Header, 
      SendEmail
    },
  })
  export default class Help extends Vue {}
</script>