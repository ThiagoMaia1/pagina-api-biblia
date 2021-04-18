<template>
  <div class='view'>
    <Header/>
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
  export default class Documentation extends Vue {}
</script>