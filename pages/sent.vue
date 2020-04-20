<template>
  <Send></Send>
</template>

<script>
import Send from '../components/send.vue'

export default {
  name: 'Sent',

  components: {
    Send,
  },

  data: function () {
    return {
      title: 'Thanks for the message!'
    }
  },

  head () {
      return {
          title: this.title,
      }
  },

  methods: {

  },

}
</script>