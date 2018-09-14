<template>
    <div class="container">
        <div class="columns">
            <div class="column">

                <dash-header :getBranch="getBranch"></dash-header>

                <div style="margin-top:5px;margin-bottom:5px">
                    <router-link to="/repair/choice" tag="button" class="button is-info is-small">แจ้งซ่อม CTS</router-link>&nbsp;
                    <router-link to="/repair/line" tag="button" class="button is-success is-small">ส่ง Line to CTS</router-link>&nbsp;

                    <a class="button is-small">ทรัพย์สินอื่นๆ</a>
                </div>

                <table class="table is-fullwidth is-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>เลขที่</th>
                            <th>สถานะ</th>
                            <th>แจ้งซ่อม</th>
                            <th>เครื่อง</th>
                            <th>วันที่สร้าง</th>
                            <th>ผู้จัดทำ</th>                            
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>123456</td>
                        <td>แจ้งซ่อม</td>
                        <td>คอมพิวเตอร์</td>
                        <td>C01</td>
                        <td>04/09/2018</td>
                        <td>ธานี คำสิงห์</td>                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>123456</td>
                        <td>แจ้งซ่อม</td>
                        <td>คอมพิวเตอร์</td>
                        <td>C01</td>
                        <td>04/09/2018</td>
                        <td>ธานี คำสิงห์</td>                        
                    </tr> 
                    <tr>
                        <td>3</td>
                        <td>123456</td>
                        <td>แจ้งซ่อม</td>
                        <td>คอมพิวเตอร์</td>
                        <td>C01</td>
                        <td>04/09/2018</td>
                        <td>ธานี คำสิงห์</td>                        
                    </tr> 
                    <tr>
                        <td>4</td>
                        <td>123456</td>
                        <td>แจ้งซ่อม</td>
                        <td>คอมพิวเตอร์</td>
                        <td>C01</td>
                        <td>04/09/2018</td>
                        <td>ธานี คำสิงห์</td>                        
                    </tr>  
                    <tr>
                        <td>5</td>
                        <td>123456</td>
                        <td>แจ้งซ่อม</td>
                        <td>คอมพิวเตอร์</td>
                        <td>C01</td>
                        <td>04/09/2018</td>
                        <td>ธานี คำสิงห์</td>                        
                    </tr>                                                                            
                </table>
                
            </div>
        </div>        
    </div>
</template>

<script>
import DashHeader from './DashHeader'
import { GET_BRANCH_ZONE } from '../graphql/index.js'
export default {
    name: 'dashboard',

    components: {
        DashHeader
    },

    data () {
        return {
            getBranch: []
        }
    },

    created () {

        if(!localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'login' })
        }

        // BRANCH ZONE
        this.$apollo.query({
            query: GET_BRANCH_ZONE,
            variables: {
                filterBrnCode: localStorage.getItem('UserBranch'),
            },         
        })
        .then(data => {
            this.getBranch = data.data.getBranch
            console.log(data.data.getBranch);
        })

    },     

}

</script>

<style scoped>
    table {
        font-family: 'Designil Font', 'Helvetica', sans-serif;
        font-size: 14px;
    }
</style>
