import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Login from './views/Login.vue'
import DashBoard from './views/DashBoard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {title: 'Login'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {title: 'DashBoard'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    }
  ]
})
