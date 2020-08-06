import Vue from 'vue'
import VueParallax from 'vue-parallax-js'
import Scroll from '../components/abstracts/scroll'

const components = {
  Scroll
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

Vue.use(VueParallax)
