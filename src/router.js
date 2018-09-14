import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import DashBoard from './views/DashBoard.vue'
import RepairChoice from './views/RepairChoice.vue'
import RepairLine from './views/RepairLine.vue'
import InfoBranch from './views/InfoBranch.vue'

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
      path: '/repair/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {title: 'หน้าหลัก'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    },
    {
      path: '/repair/choice',
      name: 'repairChoice',
      component: RepairChoice,
      meta: {title: 'แจ้งซ่อม'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    },
    {
      path: '/repair/line',
      name: 'repairLine',
      component: RepairLine,
      meta: {title: 'Line to CTS'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    },
    {
      path: '/repair/branch/info',
      name: 'InfoBranch',
      component: InfoBranch,
      meta: {title: 'ข้อมูลสาขา'},
      beforeEnter: (to, from, next) => {
        document.title = to.meta.title
        next()
      }
    }             
  ]
})
