<template>
    <div>
        <table class="table is-fullwidth" style="margin-top:5px;background-color:#EEEEEE;font-size:12px">
            <tr v-for="zone in getBranch" :key="zone.BrnCode">
                <td>{{ zone.BrnCode }} {{ zone.BrnName }}</td>
                <td style="text-align:right">CTS : {{ zone.cts.CtsName }}</td>
                <td style="text-align:right">เขต : {{ zone.area.AreaName }}</td>      
                <td style="text-align:right">
                    <button type="submit" class="button is-dark is-small" @click="isLogout">Logout</button>
                </td>              
            </tr>
        </table> 
    </div>
</template>

<script>
export default {

    props: {
        getBranch: Array
    },
    
/*     computed: {
        getUserLogin () {
            return localStorage.getItem('UserName')
        }
    }, */ 
      
    methods: {
        isLogout () {
            this.$store.dispatch('hindHeader')
            localStorage.removeItem('UserID')
            localStorage.removeItem('UserName')
            localStorage.removeItem('UserBranch')
            localStorage.removeItem('token')
            this.$router.push({ name: 'login' })
        }
    }    


}
</script>

<style scoped>
    table tr td {
        font-family: 'Designil Font', 'Helvetica', sans-serif;
        font-size: 14px;
    }
</style>
