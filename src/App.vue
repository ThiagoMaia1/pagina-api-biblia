<template>
  <div id="app">
    <Navigator/>
  </div>
</template>

<script lang='ts'>
  import Navigator from '@/components/Navigator/Navigator.vue'
  import {Component, Vue} from 'vue-property-decorator'
  
  @Component({
      components: {Navigator}
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  @font-face {
    font-family: "Source Sans Pro";
    src: local("Source Sans Pro"),
    url('./assets/fonts/Source Sans Pro.ttf') format("truetype");
  }
  @font-face {
    font-family: "Roboto Condensed";
    src: local("Roboto Condensed"),
    url('./assets/fonts/Roboto Condensed.ttf') format("truetype");
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow-x: hidden;
  }
</style>
