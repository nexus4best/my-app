<template>
    <div>
        <div class="columns">
            <div class="column">
                <table class="table is-fullwidth is-bordered">
                    <tr>
                        <th>ชื่อเครื่อง</th>
                        <th>รหัสเครื่องขาย</th>
                        <th>สรรพากร</th>
                    </tr>
                    <tr v-for="brn in cshBranch" :key="brn.CshDatabaseServerAlone">
                        <td>{{ brn.CshDatabaseServerAlone }}</td>
                        <td>{{ brn.CshCode }}</td>
                        <td>{{ brn.CshReceiptPosCashier }}</td>
                    </tr>
                </table>
            </div>
        </div>    

        <article class="message">
            <div class="message-body">
                <div v-if="!loading">
                    {{cshBranch[0].BrnAddress}}
                </div>
                <div v-if="!loading">
                    โทรศัพท์&nbsp;{{cshBranch[0].BrnTel}}
                        &nbsp;&nbsp;
                    โทรสาร&nbsp;{{cshBranch[0].BrnFax}}
                </div>            
            </div>
        </article>

    </div>
</template>

<script>
import axios from 'axios'
const HTTP = axios.create({
    baseURL: 'http://10.22.2.73:81/'
})

export default {

    data () {
        return {
            cshBranch: [],
            loading: false
        }
    },

    async created () {
        
        if(!localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'login' })
        }

        this.loading = true
        try {
            let response = await HTTP.get('CshReceiptPosBrnCode.php?BrnCode='+localStorage.getItem('UserBranch'))
            this.cshBranch = response.data
            this.loading = false
        } catch (error) {
            console.log(error)
        }         
    },      

}
</script>

<style scoped>
    table, .message {
        font-family: 'Designil Font', 'Helvetica', sans-serif;
        font-size: 14px;
    }
</style>
