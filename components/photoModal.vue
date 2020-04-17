<template>

    <div id="photo-modal" class="container__row__modal" :class="{ visible: modalVisible }">
        <img :src="modalSrc" alt="">
        <button @click="$emit(closeModal)" class="container__button container__button--small">close</button> 
    </div>

</template>

<script>

export default {
  name: 'PhotoModal',

  props: {
  	modalSrc: String,
  	modalVisible: Boolean
  },

}
</script>