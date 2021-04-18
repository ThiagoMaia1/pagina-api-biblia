<template>
    <section>
        <div class='info-box'>
            {{$t('apiInfo.main')}}
        </div>
        <img src='@/assets/WomanStanding.svg'/>
    </section>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class APIInfo extends Vue {
    
  }
</script>

<style lang="scss" scoped>
    @import '@/style.scss';
    section {
        display: flex;
        padding: 2vw;
        align-items: center;
        margin-right: 2em;
        height: 100vh;
    }
    .info-box {
        padding: 4em;
        background: $gradient;
        color: white;
        font-size: 1.3em;
        max-width: 60%;
        margin: 1em;
        margin-right: 6em;
        text-align: justify;
        box-shadow: 10px 10px 0px rgba(0,0,0,0.8);
        font-family: 'Roboto Condensed';
        line-height: 1.8em;
        border-radius: 3px;
        // @include dislodged-border(white, 1em);
    }
    img {
        max-width: 40%;
        max-height: 60vh;
    }
</style>
