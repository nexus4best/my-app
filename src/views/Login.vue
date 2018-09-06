<template>
    <div class="container">
        <div class="columns">
            <div class="column">&nbsp;</div>
            <div class="column">
                <div class="card" style="margin-top:120px">
                <header class="card-header">
                    <p class="card-header-title">
                        ระบบงานแจ้งซ่อมแผนก CTS
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="field">
                            <div class="control">
                            <input class="input" type="text" v-model="login.UserID" placeholder="รหัสพนักงาน">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                            <input class="input" type="password" v-model="login.UserPassword" placeholder="รหัสผ่าน">
                            </div>
                        </div>  

                        <div class="field">
                            <div class="control">
                            <button type="submit" class="button is-link" @click="isLogin">Login</button>
                            </div>
                        </div> 
                    </div>
                </div>
                <footer class="card-footer"></footer>
                </div>            
            </div>
            <div class="column">&nbsp;</div>
        </div>    
    </div>    
</template>

<script>
import axios from 'axios'
const HTTP = axios.create({
    baseURL: 'http://10.22.2.73/api_pacific/'
})

export default {
    name: 'login',

    data () {
        return {
        login: {
            UserID: '',
            UserPassword: ''
        },
        }
    },

  async created () {
     if(localStorage.getItem('token')) {
       this.$router.push({ name: 'dashboard' })
     } 
  },    

    methods: {
        isLogin () {
            const formData = new FormData()
            formData.append('UserID', this.login.UserID)
            formData.append('UserPassword', this.login.UserPassword)
            HTTP.post('LoginUser.php', formData)
                .then(response => {
                    this.$router.push({ name: 'dashboard' })
                    console.log(response.data)
                    localStorage.setItem('UserID', response.data.UserID)
                    localStorage.setItem('UserName', response.data.UserName)
                    localStorage.setItem('UserBranch', response.data.UserBranch)
                    localStorage.setItem('token', response.data[0])
                })
        }
    }
}

</script>