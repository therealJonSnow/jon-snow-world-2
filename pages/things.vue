<template>
    <div class="page">

        <PhotoModal @closeModal="modalVisible = false" :modalSrc="modalSrc" :modalVisible="modalVisible"></PhotoModal>

        <absolute v-parallax="0.3" :top="'200px'" :left="'70%'">
            <Circ :top="'0'" :left="'0'" :width="'1rem'" :center="'100px'" :color="'var(--primary)'"></Circ>
        </absolute>
        <absolute v-parallax="0.1" :top="'135rem'" :left="'0%'" :height="'300px'" :width="'300px'">
            <Circ :top="'0'" :left="'0'" :width="'7rem'" :center="'150px'" :color="'var(--primary)'"></Circ>
        </absolute>
        <absolute v-parallax="0.4" :top="'390px'" :left="'95%'">
            <Tri :scale="'(0.1)'" :top="'0'" :left="'0'" :width="'2rem'" :center="'2rem'" :color="'var(--secondary)'"></Tri>
        </absolute>

       <div v-parallax="0" class="banner">
            <Banner :dot="false" :showS="true" :fullStop="true" :things="true">
                <template slot="title">Here's_my_<span class="span-highlight">Portfolio</span></template>
                <template slot="subtitle-top">of</template>
            </Banner>
        </div>

        <div class="container container--mt">
            <div class="case-study">
                <h4 class="contianer__header--indent">minimalist <span class="span-highlight">sporting </span>site</h4>                  
                <Subtitle :noMargin="true" :color="'var(--primary)'">Sam_Whaley_Sailing</Subtitle>
                <div class="container--grid-two">
                    <div style="background-color: blue"></div>
                    <div>
                        <p class="container__text">
                            Freelance site built for Sam Whaley, a member of the British Sailing Team.
                        </p>
                        <p class="container__text">
                            The site is built using Nuxt.js and Strapi, a headless CMS, allowing Sam full access to all content but keeping the speed offered by a server site rendered site.
                        </p>
                        <p class="container__text">
                            The site is built using Nuxt.js and Strapi, a headless CMS, allowing Sam full access to all content but keeping the speed offered by a server site rendered site.
                        </p>
                    </div>
                </div> 
            </div>
            <div class="case-study case-study--end">
                <h4 class="contianer__header--indent contianer__header--indent--right">minimalist <span class="span-highlight">sporting </span>site</h4>                  
                <Subtitle :noMargin="true" :color="'var(--primary)'">Sam_Whaley_Sailing</Subtitle>
                <div class="container--grid-two ">
                    <div>
                        <p class="container__text">
                            Freelance site built for Sam Whaley, a member of the British Sailing Team.
                        </p>
                        <p class="container__text">
                            The site is built using Nuxt.js and Strapi, a headless CMS, allowing Sam full access to all content but keeping the speed offered by a server site rendered site.
                        </p>
                        <p class="container__text">
                            The site is built using Nuxt.js and Strapi, a headless CMS, allowing Sam full access to all content but keeping the speed offered by a server site rendered site.
                        </p>
                    </div>
                    <div style="background-color: blue"></div>
                </div>
            </div>
        </div>

        <div v-parallax="0" class="container container--right">
            <Tri :scale="'(1)'" :top="'21em'" :left="'150px'" :width="'19rem'" :center="'25.1rem'" :color="'var(--primary)'"></Tri>
           <Subtitle :color="'var(--secondary)'">DrDoctor_Open_Mic</Subtitle>
            <ul class="bullets bullets--alt">
                <Bullet :yellow="true">
                    DrDoctor are a london based company trying to transform NHS IT systems
                </Bullet>
                <Bullet :yellow="true">
                    To help get across their new technology they launched their Open Mic series to provide 'Stories from inside DrDoctor. No fluff or sales pitches. Just quality information and insights.'
                </Bullet>
                <Bullet :yellow="true">
                    I was asked to create a succinct animation to preface their videos incorperating their logo which is now used across their social media platforms and website
                </Bullet>
            </ul> 
        </div>

        <div class="container">                
                <Rectangle class="" :top="'-3'" :left="'-3em'" :width="'80%'" :height="'100%'" :color="'var(--primary)'" :middle="true"></Rectangle>
                <Subtitle :margin="true" :color="'var(--secondary)'">Things_Finalfinal_1/*</Subtitle>

                <div class="container__row container__row--gallery ">
                    <div v-for="image in page.GalleryList.GalleryItem.slice(0, 4)" @click="triggerModal" class="container__row__item">
                        <img :src="image.Image.url" :alt="image.Title">
                        <button class="container__button container__button--small button">view</button> 
                    </div>
                    <router-link to="/gallery" class="nav-link">
                        <button class="container__button container__button">see more</button>
                    </router-link>
                   
                </div>
        </div>

        <div v-parallax="0" id="contact">  
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
import PhotoModal from '../components/photoModal.vue'
import Rectangle from '../components/rectangle.vue'
import Social from '../components/social.vue'
import Subtitle from '../components/subtitle.vue'
import Tri from '../components/tri.vue'

export default {
    name: 'Things',

    components: {
        Absolute,
        Banner,
        Bullet,
        Contact,
        Circ,
        PhotoModal,
        Rectangle,
        Social,
        Subtitle,
        Tri,
    },
    
    props: {
        msg: String
    },

    data: function () {
        return {
            modalSrc: '',
            modalVisible: false,
            page: [],
            title: 'Jonny Snow - A few things'
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
        triggerModal: function(event) {
            var target = event.target;
            var parent = target.closest('.container__row__item');
            var child = parent.firstElementChild.getAttribute('src');
            var modal = document.getElementById("photo-modal");
            this.modalSrc = child;
            this.modalVisible = true;
        }
    }
}
</script>

