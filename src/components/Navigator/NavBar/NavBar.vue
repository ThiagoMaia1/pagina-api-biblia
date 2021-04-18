<template>
    <nav>
        <NavBarButton v-for="r in routes" :key="r.path" :label="r.name" :path="r.path"/>
    </nav>
</template>

<script lang='ts'>
    import NavBarButton from './NavBarButton.vue'
    import { Component, Vue } from 'vue-property-decorator'
    import { RouteConfig } from 'vue-router'
    import {routes} from '@/router/index'

    @Component({
        components: {NavBarButton}
    })
    class NavBar extends Vue {
        data() : {routes : Array<RouteConfig>} {
            return {
                routes
            }
        }
    }
    export default NavBar
</script>

<style>
    nav {
        padding-top: 3vh;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        max-height: 15vh;
    }

</style>