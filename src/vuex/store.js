import Vue from 'vue'
import Vuex from 'vuex'

import AllUser from './modules/AllUser'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        AllUser
    },
    strict: debug
})