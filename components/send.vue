<template>
    <div class="success-modal">
      <div class="banner">
          <div class="banner__container--main">
              <div class="rect rect--block"></div>
              <div class="rect rect--outline"></div>
              <h1 class="title">Message <span class="span-highlight">Sent!</span></h1>
          </div>

          <div class="banner__container banner__container--sub">
              <h3>
                  Thanks for getting in touch!<br>
                  I'll get back to you as soon as I can.
              </h3>
          </div>      
      </div>
      <nuxt-link to="/" class="button--center">
        <button class="container__button container__button--AA">back</button>
      </nuxt-link>
    </div>

</template>

<script>

export default {
  name: 'Send',
  
  methods: {

  },

}
</script>