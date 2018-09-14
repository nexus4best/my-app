<template>
    <div>
        <h1>DashBoard</h1>
    </div>
</template>

<script>
//import { GET_BRANCH_ZONE } from '../graphql/index.js'
export default {
    name: 'dashboard',

    data () {
        return {
            //getBranch: []
        }
    },

    // beforeCreate() {
    //     this.$store.dispatch('fetchGetData');
    // },    

    created () {

        if(!localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'login' })
        }

        // BRANCH ZONE
        // this.$apollo.query({
        //     query: GET_BRANCH_ZONE,
        //     variables: {
        //         filterBrnCode: localStorage.getItem('UserBranch'),
        //     },         
        // })
        // .then(data => {
        //     this.getBranch = data.data.getBranch
        //     console.log(data.data.getBranch);
        // })

    },     

}

</script>

<style scoped>
    table {
        font-family: 'Designil Font', 'Helvetica', sans-serif;
        font-size: 14px;
    }
</style>
