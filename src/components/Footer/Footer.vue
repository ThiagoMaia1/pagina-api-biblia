<template>
    <footer>
        <ContactInfo/>
    </footer>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'
    import ContactInfo from './ContactInfo.vue'

    @Component({
        components: {
            ContactInfo
        }
    })
    export default class Footer extends Vue {
      
    }
</script>

<style lang="scss" scoped>
    @import '@/style.scss';
    footer {
        margin-top: 15vh;
        box-shadow: 0 -3px 10px rgba(0,0,0,0.6);
        background: $gradient;
        padding: 3vw 15vw;
        height: 40vh;
        width: 100%;
    }
</style>
