import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck,faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
