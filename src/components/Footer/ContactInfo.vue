<template>
     <div class='items-container'>
        <div v-for="l in links" class='bottom-bar-link-container' :key="l.url">
            <a :href="l.url" target='_blank' rel='noopener noreferrer'>
                <Icon v-if="l.logo" :name="l.logo"/>
                <span>{{l.apelido}}</span>
            </a>
        </div>
    </div>
</template>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'
    import { emailAddress, facebookUrl, fullName, gitHubUrl, linkedinUrl, stackOverflowUrl, portfolioUrl } from '@/models/Constants';
    import Icon from 'vue-awesome/components/Icon.vue'
    import 'vue-awesome/icons/brands/linkedin'
    import 'vue-awesome/icons/brands/github'
    import 'vue-awesome/icons/brands/facebook-square'
    import 'vue-awesome/icons/envelope'
    import 'vue-awesome/icons/brands/stack-overflow'
    import i18n from '@/translations'

    type Link = {
        logo : string;
        apelido : string;
        url : string; 
    }

    @Component({
        components: {
            Icon
        }
    })
    export default class ContactInfo extends Vue {
        links : Link[] = [
            {logo: '', apelido: i18n.tc('app.developedBy'), url: portfolioUrl},
            {logo: 'brands/github', apelido: 'GitHub', url: gitHubUrl},
            {logo: 'brands/linkedin', apelido: 'LinkedIn', url: linkedinUrl},
            {logo: 'brands/stack-overflow', apelido: 'Stack Overflow', url: stackOverflowUrl},
            {logo: 'brands/facebook-square', apelido: 'Facebook', url: facebookUrl},
            {logo: 'envelope', apelido: 'E-mail', url: 'mailto:' + emailAddress},
        ]
        fullName = fullName
    }
</script>

<style lang="scss" scoped>
    .items-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        font-size: 1.1em;
    }

    .fa-icon {
        width: auto;
        height: 1.5em;
        color: white;
    }

    .bottom-bar-link-container {
        margin: 0.4em 0;
        a {
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            max-height: 5vh;
            text-decoration-line: none !important;
            &:hover {
                text-decoration-line: underline !important;
            }
        }
        
        span {
            margin: 1.5vh 1vw;
        }
    }

</style>
