<template>
	<div class="absolute" :style="style">
		<slot/>
	</div>

</template>

<style lang="scss" scoped>
  .absolute {
        height: 100px;
        pointer-events: none;
        position: absolute;
        width: 100px;
        z-index: -20;
    }
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'absolute',

  props: {
    top: String,
    left: String,
    width: String,
    height: String
  },

  computed: {
        style () {
            return 'top: ' + this.top + '; left:' + this.left + '; width:' + this.width + '; height:' + this.height + ';';          
        }
        
  }

}
</script>
