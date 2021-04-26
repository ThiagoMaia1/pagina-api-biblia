<template>
    <nav>
        <Logo/>
        <div class='vertical-line'/>
        <div>
            <NavBarButton v-for="r in routes" :key="r.path" :label="r.name" :path="r.path"/>
        </div>
    </nav>
</template>

<script lang='ts'>
    import NavBarButton from './NavBarButton.vue'
    import Logo from '@/components/Logo.vue'
    import { Component, Vue } from 'vue-property-decorator'
    import {routes} from '@/router/index'
    import { RouteConfig } from 'node_modules/vue-router/types/router'

    @Component({
        components: {
            NavBarButton,
            Logo
        }
    })
    class NavBar extends Vue {
        data() : {routes : RouteConfig[]} {
            return {
                routes: routes.filter(r => !r.redirect)
            }
        }
    }
    export default NavBar
</script>

<style lang='scss'>
    nav {
        padding: 0 2vw 0 8vw;
        margin-top: 6vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15vh;
        > div {
            display: flex;
            justify-content: flex-end;
        }
        .vertical-line {
            width: 1px;
            height: 80%;
            background: lightgray;
        }
    }
</style>