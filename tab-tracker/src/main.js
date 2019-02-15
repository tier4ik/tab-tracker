import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
import Store from './store/store'
import 'vuetify/dist/vuetify.css'
import VueYoutubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueYoutubeEmbed, { global: true, componentId: 'youtube-media' })

Vue.config.productionTip = false

sync(Store, Router)

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
