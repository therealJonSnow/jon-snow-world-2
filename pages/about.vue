<template>
    <div class="page">

        <Profile v-parallax="0.1" :top="'0'" :left="'0'" :image="page.Profile.Photo.url" :width="'7rem'" :center="'150px'" :color="'var(--primary)'"></Profile>
        
        <absolute v-parallax="0.4" :top="'850px'" :left="'120%'">
            <Tri :scale="'(0.1)'" :top="'0'" :left="'0'" :width="'2rem'" :center="'2rem'" :color="'var(--secondary)'"></Tri>
        </absolute>

        <div v-parallax="0" class="banner">
            <Banner :dot="false" :showS="false">
                <template slot="title"><span class="span-highlight">About_Me</span></template>
                <template slot="subtitle-top">Every</template>
                <template slot="subtitle-btm">about me.</template>
            </Banner>
        </div>

        <div class="container container--mt">
          
            <h4 class="contianer__header--indent">a <span class="span-highlight">brief guide </span>to</h4>              
            <Subtitle :color="'transparent'">Jonny_Snow</Subtitle>
            <p class="container__text">Hi there! I'm Jonny, a <span class="span-highlight">Front-end Web Developer</span> and creative based out of Winchester, Hampshire.
                I am currently working as part of the amazing team at <a class="container__text--link" href="https://www.studiorepublic.com" ><span class="span-highlight">Studio Republic</span></a>, a creative agency for good, helping to make the internet shake its jazz hands.<br/>
            </p>
            <p class="container__text">
                In my spare time I like making <router-link to="/things" class="container__text--link"><span class="span-highlight">things.</span></router-link> Creating or developing my skills to bring ideas to life. Adding those extra touches that make peoples heads turn and take notice. 
            </p>
            <p/>

            <h4 class="contianer__header--indent">in emergency: <span class="span-highlight">add saltwater </span></h4>
            <Subtitle :color="'transparent'">The_Essentials</Subtitle>
            <ul class="bullets bullets--mb">
                <Bullet :yellow="true">
                    Water. Preferably in large amounts and salty. Doesn't matter if its frozen as long as I'm up a mountain.
                </Bullet>
                <Bullet :yellow="true">
                    Boardsports for sanity: windsurfing, skating, snowboarding, surfing, kitesurfing ...
                </Bullet>
                <Bullet :yellow="true">
                    Campervan for those weekend trips; boards don't carry themselves
                </Bullet>
                <Bullet :yellow="true">
                    Peanut butter. 
                </Bullet>
            </ul>

            <h4 class="contianer__header--indent">a <span class="span-highlight">mixed bag </span></h4>
            <Subtitle :color="'transparent'">My_Skillset</Subtitle>
            <p class="container__text">
                I am a strong communicator who enjoys working with diverse clients through a pragmatic and flexible process to deliver beautiful optimised digital solutions.
            </p>
            <p/>
            <ul class="bullets bullets--mb">
                <Bullet :yellow="true">
                    Strong HTML, CSS and JavaScript
                </Bullet>
                <Bullet :yellow="true">
                    Experience with Vue, Nuxt.js and Laravel
                </Bullet>
                <Bullet :yellow="true">
                    A love of css animations and ui transitions
                </Bullet>    
                <Bullet :yellow="true">
                    Comfortable with MODX and Directus CMS
                </Bullet>    
                <Bullet :yellow="true">
                    Knowledge of Git and Sourcetree 
                </Bullet>    
                <Bullet :yellow="true">
                    MEng in Marine Engineering from Southampton University
                </Bullet>
            </ul> 
            <p/>
             <p class="container__text">
                As a marine engineer turned developer I'm not your usual suspect, but if you need a website built underwater I'm your guy.
            </p>
        </div>

        <div>  
            <Contact/>
        </div>

        <div class="container container--social">  
            <Social></Social>
        </div>
    </div>

</template>

<script>
import pageQuery from '~/apollo/queries/page'

import Absolute from '../components/absolute.vue'
import Banner from '../components/banner.vue'
import Bullet from '../components/bullet.vue'
import Contact from '../components/contact.vue'
import Circ from '../components/circ.vue'
import Profile from '../components/profile.vue'
import Rectangle from '../components/rectangle.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
    name: 'About',

    props: {
    },

    components: {
        Absolute,
        Banner,
        Bullet,
        Contact,
        Circ,
        Profile,
        Rectangle,
        Social,
        Subtitle,
        Tri,
    },

    data: function () {
        return {
            page: [],
            profile: '',
            title: 'Jonny Snow - About Me'
        }
    },

    head () {
        return {
            title: this.title,
        }
    },

    apollo: {
        page: {
            prefetch: true,
            query: pageQuery
        }
    },

    methods: {

    },

    mounted() {
    },
}
</script>
