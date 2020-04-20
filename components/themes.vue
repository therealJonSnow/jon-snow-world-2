<template>
	<div class="themes__container">
        <div @click="showPrimary | showSecondary ? '' : showPrimary = !showPrimary" class="theme__icon">
            <div class="icon__section" :style="{ 'background-color': colors[0] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[1] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[2] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[3] }"></div>
        </div>

        <transition-group
            mode="out-in"
            tag="div"
            class="themes"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <div
                v-if="showPrimary"
                @click="colorPrimary(); showPrimary = !showPrimary; showSecondary = !showSecondary;"
                class="theme__item"
                v-for="(color, index) in colors"
                :data-index="index"
                :key="color"
                :style="{ 'background-color': color }
            "></div>  
        </transition-group>

        <transition-group  
            mode="out-in" 
            tag="div" 
            class="themes"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
        >
            <div 
                v-if="showSecondary"
                @click="colorSecondary(); showSecondary = !showSecondary;"
                class="theme__item" 
                v-for="(color, index) in colors"
                :data-index="index"
                :key="color" 
                :style="{ 'background-color': color }
            "></div>
        </transition-group> 
	</div>

</template>

<style lang="scss" scoped>
    .theme-enter,
    .theme-leave-to {
        opacity: 0;
        transform: translateX(-1rem);
    }
    .theme-enter-to,
    .theme-leave {
        opacity: 1;
        transform: translateX(0);
    }
    .theme-enter-active,
    .theme-leave-active {
        transition: opacity, transform 500ms ease;
    }

    .themes__container {
        display: flex;
        position: absolute;
        top: 2.25rem;
        left: 2rem;
        z-index: 9;

        .themes {
            display: flex;

            .theme__item {
                border-radius: 50%;
                cursor: pointer;
                height: 1.5rem;
                margin: 0.5rem 0.5rem;
                transition: margin 0.5s ease, opacity 0.5s ease;
                width: 1.5rem;
            }

            div:first-of-type {
                margin-left: 1.5rem;
            }
        }

        .theme__icon {
            border-radius: 50%;
            display: flex;
            flex-wrap: wrap;
            height: 1.5rem;
            margin: 0.5rem 0;
            overflow: hidden;
            width: 1.5rem;

            .icon__section {
                width: 50%;
            }
        }
    }
</style>

<script>
    /*jshint esversion: 6 */
    export default {
        name: 'themes',

        data: function() {
            return {
                colors: ['#C3FFFA', '#FFCE80', '#ff8fae', '#96f5c0', '#Cda8ff', '#ff7272'],
                showPrimary: false,
                showSecondary: false,
            }
        },

        methods: {
            colorPrimary: function() {
                var targetColor = event.target.style.backgroundColor;
                document.documentElement.style.setProperty('--primary', targetColor);
            },
            colorSecondary: function() {
                var targetColor = event.target.style.backgroundColor;
                document.documentElement.style.setProperty('--secondary', targetColor);
            },
            beforeEnter: function(el) {
                el.style.display = 'none'
                el.style.opacity = 0
            },

            enter: function(el, index) {
                setTimeout( function() {
                    el.style.display = 'block'
                    let delay = ( el.dataset.index + 1 ) * 10
                    console.log(el)
                    setTimeout(function() {
                        el.style.opacity = 1
                    }, delay)
                }, 430)
            },

            leave: function(el, done) {
                let delay = el.dataset.index * 10
                setTimeout(function() {
                    el.style.opacity = 0
                    setTimeout(function() {
                        el.style.display = 'none'
                    }, 400)
                }, delay)
            },
        }

}
</script>
