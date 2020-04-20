<template lang="html">
  <div class="loading-page" v-if="loading">

    <p>Loading...</p>
    <div id="lottie"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
  mounted() {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('lottie'), // Required
      path: '/data.json', // Required
      renderer: 'svg/canvas/html', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "Hello World", // Name for future reference. Optional.
    })
  }
}
</script>

<style scoped>
.lottie {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 100;
}
</style>