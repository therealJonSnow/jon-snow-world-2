<template>
    <div>
        <div  class="banner__container--main">
            <div class="rect rect--block"></div>
            <div class="rect rect--outline"></div>
            <h1 class="title"><slot name="title"/></h1>
        </div>

        <div v-show="things" class="banner__container banner__container--sub">
            <h3>
                <slot name="subtitle-top"/><br/> 
                <span class="span-highlight">THING<span v-show="showS">S</span><span v-show="fullStop">.</span>
                </span>
                <br/>
                <slot name="subtitle-btm"/><br/> 
            </h3>
        </div>      
    </div>
</template>

<style lang="scss">
.banner {
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 0vh;
    margin-top: 8vh;
    position: relative;

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }

    .banner__container {
        position: relative;
    }
    
    h1{
        font-size: 6.125em;
        font-weight: 400;
        padding-left: 2rem;

        @media (max-width: 400px) {
            font-size: 6em;
        }

        @media (max-width: 320px) {
            font-size: 5.5em;
        }
    }

    h3 {
        font-family: $fontSecondary;
        font-size: 2em;
        font-weight: 400;
        line-height: 1.2;

        &> span {
            font-family: $fontPrimary;
            font-size: 3.125em;

            @media (max-width: 400px) {
                font-size: 2.75em;
            }
        }
    }

    .rect {
        box-sizing: border-box;
        height: 6.25em;
        position: absolute;
        width: 1.9em;

        &--outline {
            border: 2px solid $outline;
            left: -0.6em;
            top: 4.4em;
        }

        &--block {
            background-color: var(--secondary);
            left: -1.2em;
            top: 4.9em;
        }
    }

    .highlight {
        box-sizing: border-box;
        height: 5.25em;
        left: 25em;
        position: absolute;
        top: 12em;
        width: 25em;
        z-index: -1;

        &--blue {
            background-color: var(--primary);
        }

        &--two {
            height: 5.2em;
            left: 11.5em;
            top: 7.45em;
            width: 28em;
        }     
    }
}
</style>

<script>
/*jshint esversion: 6 */
export default {
    name: 'banner',

    props: {
        fullStop: Boolean,
        showS: Boolean,
        things: { default: true, type: Boolean }, 
        yellow: Boolean,
    },

}
</script>
