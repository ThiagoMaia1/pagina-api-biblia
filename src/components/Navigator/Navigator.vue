<template>
  <div id="navigator" v-bind:style="{'--direction': direction}">
    <div id='scroll-container'>
      <NavBar/>
      <transition name='slide'>
        <router-view/>
      </transition>
      <Footer/>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator'
  import NavBar from '@/components/Navigator/NavBar/NavBar.vue'
  import Footer from '@/components/Footer/Footer.vue'
  import { routesPath } from '@/router/index'
  import { Route } from 'node_modules/vue-router/types/router';
  const routes = routesPath.map(r => '/' + r.id);

  @Component({
      components: {
        NavBar,
        Footer,
      },
      watch: {
      $route(to : Route, from : Route) {
        console.log({to, from});
        this.$data.direction = routes.indexOf(to.path) > routes.indexOf(from.path) ? 1 : -1;
      }
    }
  })
  export default class Navigator extends Vue {
    direction = 1;
  }
</script>

<style scoped>
  #scroll-container {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
  }
  .router-container {
    position: relative;
  }
  .slide-leave {
    transform: translateX(0vw);
  }
  .slide-leave-to {
    transform: translateX(calc(-100vw*var(--direction)));
  }
  .slide-enter {
    transform: translateX(calc(100vw*var(--direction)));
  }
  .slide-enter-to {
    transform: translateX(0vw);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s ease-in-out;
  }
  .slide-leave-active {
    position: absolute;
  }
</style>
