<template>
    <div class="profile__container">
        <svg class="profile__circle__contianer" :style="style" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle" :class="styleBlock" :fill="color" :cx="center" :cy="center" :r="width" preserveAspectRatio="xMidYMid meet"/>
        </svg>  
        <div class="profile__circle__image" :style="styleImage"></div>      
        <svg class="profile__circle__contianer" :style="style" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle outline" :cx="center" :cy="center" :r="width" preserveAspectRatio="xMidYMid meet"/>
        </svg>        
    </div>
</template>

<style lang="scss" scoped>

.profile__container {
    height: 100px;
    left: 60%;
    pointer-events: none;
    position: absolute;
    top: 23rem;
    transform: translate3d(0px, -11.25px, 0px);
    width: 100px;
    z-index: -20;

    @media (max-width: 700px) {
        left: 57%;            
        top: 26rem;
    }
    @media (max-width: 475px) {
        left: 57%;            
        top: 25rem;
    }
    @media (max-width: 400px) {
        left: 46%;            
        top: 18rem;
    }

}

.profile__circle__contianer {
    height: 300%;
    position: absolute;
    width: 300%;
}

.profile__circle__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    padding-top: 14rem;
    position: absolute;
    width: 14rem;
    top: 38px;
    left: 39px;

    @media (max-width: 1000px) {
        left: 53px;            
        top: 51px;
    }
    @media (max-width: 700px) {
        left: 66px;            
        top: 66px;
    }
    @media (max-width: 475px) {
        left: 80px;            
        top: 80px;
    }
}
</style>

<script>
/*jshint esversion: 6 */
export default {
  name: 'profile',

  props: {
    center: String,
    color: String,
    image: String,
    left: String,
    top: String,
    width: String,
  },

    computed: {
        style () {
            return 'z-index:0; top: ' + this.top + 'em; left:' + this.left + 'em;';
        },
        styleBlock () {
            return 'z-index:0; fill:' + this.color + '; width:' + this.width + '; padding-top:' + this.width + ';';
        },
        styleOutline () {
           return 'z-index:0; width:' + this.width + '; padding-top:' + this.width + ';';
        },
        styleImage () {
           return 'z-index:0; background-image: url(' + this.image + ');';
        }

    },
  created() {
    // var circ = document.getElementsByClassName('circ');
    // console.log(circ);
    // console.log(this.top);
    // circ.style.top = this.top;
    // circ.style.left = this.left;
  }
}
</script>

