import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import { sync } from 'vuex-router-sync'
import Store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuelidate)

sync(Store, Router)

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
