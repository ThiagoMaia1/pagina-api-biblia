<template>
  <div class='view'>
    <Header imageUri='BookBench.svg' :title="$t('app.title')" :subtitle="$t('header.subtitle')"/>
    <APIInfo/>
    <TryOutAPI/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Header from '@/components/Header/Header.vue'
  import APIInfo from '@/components/APIInfo/APIInfo.vue'
  import TryOutAPI from '@/components/TryOutAPI/TryOutAPI.vue'

  @Component({
    components: {
      Header,
      APIInfo,
      TryOutAPI,
    },
  })
  export default class Home extends Vue {}
</script>
