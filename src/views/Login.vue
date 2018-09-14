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
                                <input type="text" name="UserID" class="input" 
                                    @click="isUserErr()"
                                    placeholder="รหัสเข้า i-Office"
                                    v-model="login.UserID"
                                    v-validate="'required'" 
                                    @keyup.enter="isLogin">
                                <span v-show="errors.has('UserID')" class="help is-danger">{{ errors.first('UserID') }}</span>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <input type="password" name="UserPassword" class="input" 
                                    @click="isUserErr()"
                                    placeholder="รหัสผ่าน"
                                    v-model="login.UserPassword"
                                    v-validate="'required'" 
                                    @keyup.enter="isLogin">                                
                                <span v-show="errors.has('UserPassword')" class="help is-danger">{{ errors.first('UserPassword') }}</span>
                            </div>
                        </div>                        

                        <div class="field">
                            <div class="control">
                            <button type="submit" class="button is-info" @click="isLogin" style="width:200px">L o g i n</button>
                            </div>
                        </div> 

                        <div class="field" v-if="userErr">
                            <div class="control">
                                <span class="help is-danger">
                                    {{ userErr }}
                                </span>
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

const AllUser = axios.create({
    baseURL: 'http://10.22.2.73:82/api/alluser/'
})

import th from 'vee-validate/dist/locale/th'
import { Validator } from 'vee-validate'
Validator.localize('th', th)
const dictionary = {
    th: {
        attributes: {
            UserID: 'รหัสพนักงาน',
            UserPassword: 'รหัสผ่าน',
        }
    }
}
Validator.localize(dictionary)

export default {
    name: 'login',

    data () {
        return {
            login: {
                UserID: '',
                UserPassword: ''
            },
            userErr: ''
        }
    },   
    
    created () {
        if(localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'dashboard' })
        }      
    },     

    methods: {

        isUserErr() {
            this.userErr = ''
        },

        isLogin () {
            this.$validator.validateAll().then( res => {
                if(res){     
                    AllUser.post('loginUser.php', this.login)
                    .then(response => {
                        if(response.data.message === false){
                            this.userErr = "รหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง"
                        } else {
                            console.log('Login ', response.data)
                            
                            this.$store.dispatch('showHeader')
                            this.$router.push({ name: 'dashboard' })
                            localStorage.setItem('UserID', response.data.UserID)
                            localStorage.setItem('UserName', response.data.UserName)
                            localStorage.setItem('UserBranch', response.data.UserBranch)
                            //localStorage.setItem('token', response.data[0])   
                            
                            this.$store.dispatch('fetchGetData');
                        }
                    })
                    .catch(error => {
                        console.log(error.response.data)                       
                    })               
                }
            })
        },

    },

}

</script>