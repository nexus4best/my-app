import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
//import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

library.add(faCheck,faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy)

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: 'http://10.22.2.73/graphql',
})

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token')
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : null
//     }
//   }
// })
 
// Create the apollo client
const apolloClient = new ApolloClient({
  //link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
 
// Install the vue plugin
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }  
})

new Vue({
  router,
  store,
  //provide: apolloProvider.provide(),  
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
