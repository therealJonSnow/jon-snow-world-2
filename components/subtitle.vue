<template>
    <div class="subtitle" :class="{ 'subtitle--tall': margin, 'subtitle--nm': noMargin }">   
        <div class="subtitle__highlight" :style="styleHighlight"></div>
        <div class="subtitle__title"><slot/></div>
    </div>

</template>

<script>
/*jshint esversion: 6 */
export default {
  name: 'subtitle',

  props: {
    color: String,
    margin: Boolean,
    noMargin: Boolean
  },

    computed: {
        style () {
            return 'top: ' + this.top + 'em; left:' + this.left + 'em;';
        },
        styleHighlight () {
            return 'background-color:' + this.color + ';';
        }

    },
}
</script>

<style lang="scss" scoped>
.subtitle {
    position: relative;

    &--tall {
        margin-bottom: 5rem;
        margin-top: 7rem;
    }

    &--nm {
        margin-bottom: 2rem;
    }
}

.subtitle__title {
    font-family: $fontPrimary;
    font-size: 3.25rem;
    font-weight: 300;
    text-align: left;
}

.subtitle__highlight{
    bottom: 0%;
    font-family: $fontSecondary;
    height: 42%;
    position: absolute;
    width: 104%;
    z-index: -1;
}
</style>
