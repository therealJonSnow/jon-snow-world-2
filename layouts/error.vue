<template>

    <div class="banner">
        <Banner :dot="false" :showS="true" :things="false">
            <template slot="title"><span class="span-highlight">OH NO!</span><br/>You look lost.</template>
        </Banner>
        <router-link to="/" class="button--center">
          <button class="container__button container__button--AA">head home</button>
        </router-link>
    </div>

</template>

<script>
import Banner from '../components/banner.vue'

export default {
  name: 'error',

  components: {
    Banner,
  },

}
</script>