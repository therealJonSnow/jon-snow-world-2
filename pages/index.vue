<template>
    <div class="page">

        <div class="banner">
            <Banner :dot="true" :showS="true" :fullStop="true">
                <template slot="title">Hi_I'm_<span class="span-highlight">Jonny.</span></template>
                <template slot="subtitle-top">A front-end web developer who likes making</template>
            </Banner>
        </div>

        <component
          :is="dropper"
          ref="dropper"
          :image="page.HeadIcon.Image.url"
        >
        </component>

    </div>
</template>

<script>
import pageQuery from '~/apollo/queries/page'
import Banner from '../components/banner.vue'

export default {
    name: 'Home',

    data: function () {
        return {
            dropper: '',
            images: '',
            title: 'Jonny Snow'
        }
    },

    components: {
        Banner,
        Dropper: () => import('../components/dropper.vue')
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
        closeModal: function(event) {
            var modal = document.getElementById("photo-modal");
            modal.classList.remove("visible");
        }
    },

    mounted() {
        this.$nextTick(function () {
           this.dropper = 'Dropper'
        })
    },
}

</script>