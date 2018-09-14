import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import MenuHeader from './modules/MenuHeader'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        MenuHeader
    },
    strict: debug
})