import graphqlClient from '../../graphql/graphql'
import { GET_BRANCH_ZONE } from '../../graphql'

const state = {
    getHeader: '',
    getBranch: '',
}

const getters = {
    getLineBranch: state => {
        if(state.getBranch.length > 0){
            return state.getBranch[0].BrnCode+' '+state.getBranch[0].BrnName
        }
        
    }
    
}

const mutations = {  
    SET_GET_DATA(state, getBranch) {
        state.getBranch = getBranch
    },      
    SHOW_HEADER(state, getHeader) {
        state.getHeader = getHeader
    },
    HIND_HEADER(state, getHeader) {
        state.getHeader = getHeader
        state.getBranch = ''
    }        
}

const actions = {
    async fetchGetData({ commit }) {
        const response = await graphqlClient.query({
          query: GET_BRANCH_ZONE,
          variables: {
              filterBrnCode: localStorage.getItem('UserBranch'),
          },
        })
        console.log('MenuHeader ', response.data.getBranch)
        commit('SET_GET_DATA', response.data.getBranch);
    },    
    async showHeader({ commit }) {
        commit('SHOW_HEADER', true);
    },
    async hindHeader({ commit }) {
        commit('HIND_HEADER', '');
    },          
}

export default {
    state, getters, mutations, actions
}