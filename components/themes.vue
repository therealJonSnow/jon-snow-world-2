<template>
	<div class="themes__container">
        <div @click="showPrimary = !showPrimary" class="theme__icon">
            <div class="icon__section" :style="{ 'background-color': colors[0] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[1] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[2] }"></div>
            <div class="icon__section" :style="{ 'background-color': colors[3] }"></div>
        </div>
        <div class="themes">
          <div @click="colorPrimary(); showPrimary = !showPrimary; showSecondary = !showSecondary;" class="theme__item" :class="{ active: showPrimary }" v-for="(color, index) in colors" :key="color" :style="{ 'background-color': color }"></div>  
        </div>
        <div class="themes">
          <div @click="colorSecondary(); showSecondary = !showSecondary;" class="theme__item" :class="{ active: showSecondary }" v-for="(color, index) in colors" :key="color" :style="{ 'background-color': color }"></div>  
        </div>
	</div>

</template>

<style lang="scss" scoped>
.themes__container {
    bottom: 2rem;
    position: fixed;
    right: 2.5rem;
    z-index: 20;

    .themes {
        display: flex;
        flex-direction: column;

        .theme__item {
            border-radius: 50%;
            cursor: pointer;
            height: 1rem;
            margin: -0.5rem 0;
            opacity: 0;
            transition: margin 0.5s ease, opacity 0.5s ease;
            width: 1rem;

            &.active {
                margin: 0.5rem 0;
                opacity: 1;
            }
        }

        div:last-of-type {
            &.active {
                margin-bottom: 1.5rem;
            }
        }
    }

    .theme__icon {
        border-radius: 50%;
        display: flex;
        flex-wrap: wrap;
        height: 1rem;
        margin: 0.5rem 0;
        overflow: hidden;
        width: 1rem;

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
            }
        }

}
</script>
