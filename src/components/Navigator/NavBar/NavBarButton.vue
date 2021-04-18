<template>
    <div>
        <div>
            <router-link :to="path" :class="path === $route.path ? 'selected' : ''">{{label}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator'

    @Component
    class NavBarButton extends Vue {
        @Prop({required: true}) readonly label !: string
        @Prop({required: true}) readonly path !: string
    }
    export default NavBarButton
</script>

<style scoped lang="scss">
    @import '@/style.scss';
    a {
        font-weight: 600;
        color: $vue-color;
        border-radius: 100px;
        padding: 0.4em 0.7em;
        font-size: 1.5em;
        margin-right: 0.5em;
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }
    .selected {
        background-color: $vue-color;
        color: white;
    }
    div:hover > div {
        transform: rotateZ(-2deg);
    }
    div > div {
        transition: transform 0.2s ease-in-out;
        transform: rotateZ(0deg);
        transform-origin: left bottom;
    }
</style>