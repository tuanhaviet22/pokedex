import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.use(axios)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// Api 
Vue.prototype.$api = {
  'pokeapi' : 'https://pokeapi.co/api/v2/',
  'image' : 'https://pokeres.bastionbot.org/images/pokemon/'
}

new Vue({
  render: h => h(App),
}).$mount('#app')
