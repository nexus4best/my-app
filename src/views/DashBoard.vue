<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <!-- <h1>DashBoard</h1>
                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-link" @click="isLogout">Logout</button>
                    </div>
                </div> 
                -->
                <table class="table is-fullwidth" style="margin-top:5px;background-color:#EEEEEE">
                    <tr>
                        <td>S115 โลตัส มีนบุรี</td>
                        <td>คุณธานี คำสิงห์</td>
                        <td>เขต - คุณวรวรรณ</td>
                        <td>CTS - คุณชวัท</td>                    
                    </tr>
                </table>                
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
export default {
    name: 'dashboard',

    created () {
        if(!localStorage.getItem('token')) {
            this.$router.push({ name: 'login' })
        }
    }, 
    
    methods: {
        isLogout () {
            localStorage.removeItem('UserID')
            localStorage.removeItem('UserName')
            localStorage.removeItem('UserBranch')
            localStorage.removeItem('token')
            this.$router.push({ name: 'login' })
        }
    }    

}

</script>