<template>
    <div @click="toggleMenu" id="navMenu">   
        <div class="block"></div>
        <i><fa id="navButton" :icon="plus ? ['fa', 'plus'] : ['fa', 'minus']"/></i>
        <div class="outline"></div>
        <div class="navMenu__list">
            <nuxt-link to="/" class="navMenu__item">home</nuxt-link>
            <nuxt-link to="/about" class="navMenu__item">about</nuxt-link>
            <nuxt-link to="/things" class="navMenu__item">things</nuxt-link>
        </div>
    </div>

</template>

<style lang="scss">
    #navMenu {
        display: flex;
        height: 3rem;
        justify-content: flex-end;
        position: fixed;
        right: 2rem;
        top: 2rem;
        transition: width 0.5s ease;
        transition-delay: 0.2s;
        width: 3rem;

        &.active {
            width: 20rem;
            transition-delay: 0s;

            i {
                transform: rotate(720deg);
            }

            .navMenu__list {
                opacity: 1;
                pointer-events: auto;
                transition-delay: 0.3s;
            }
        }

        i {
            align-self: center;
            cursor: pointer;
            font-size: 1rem;
            margin-top: 0.2rem;
            margin-right: 1.1rem;
            transition: transform 1s ease;
            z-index: 1;
        }

        & .outline {
            border: 2px solid $outline;
            border-radius: 2rem;
            box-sizing: border-box;
            height: 100%;
            left: -2px;
            position: absolute;
            top: 2px;
            transform: translate(2px, -2px);
            transition: width 0.5s ease;
            width: 100%;
        }
        & .block {
            cursor: pointer;
            background-color: var(--primary);
            border-radius: 2rem;
            box-sizing: border-box;
            height: 100%;
            left: -2px;
            position: absolute;
            top: 2px;
            transform: translate(-2px, 2px);
            transition: width 0.5s ease;
            width: 100%;
        }

        .navMenu__list {
            font-size: 1.3rem;
            position: absolute;
            height: 100%;
            display: flex;
            justify-content: space-between;
            right: 4rem;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            width: 13.5rem;
            transition: opacity 0.3s ease;
            transition-delay: 0s;
        }

        .navMenu__item {
            cursor: pointer;
            font-weight: 700;
            padding: 5px;
            position: relative;
            transition: font-weight 0.5s ease;
            z-index: 1;

            &:after {
                background-color: var(--secondary);
                bottom: 11%;
                content: '';
                height: 35%;
                left: 1px;
                position: absolute;
                transition: width 0.5s ease;
                width: 0%;
                z-index: -1;
            }

            &:hover:after {
                width: 95%;
            }

            &.nuxt-link-exact-active {
                &:after {
                    width: 95%;
                }
            }
        }
    }
</style>

<script>
/*jshint esversion: 6 */
export default {
    name: 'navMenu',

    props: {
    },

    data: function () {
        return {
            plus: true,
            open: false,
        }
    },

    computed: {
    },

    methods: {
        toggleMenu: function() {
            var vm = this;
            var nav = document.getElementById("navMenu")
            var navButton = document.getElementById("navButton")
            var open = this.open;
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                setTimeout( function(){
                    vm.plus = !vm.plus;
                }, 100);

            } else {
                nav.classList.add('active');
                setTimeout( function(){
                    vm.plus = !vm.plus;
                }, 100);
            }
        }
    }
}
</script>
