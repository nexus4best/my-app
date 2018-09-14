<template>
    <div>
        <div class="columns">
            <div class="column">

                <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    ส่งข้อความ Line to CTS
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">

                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" placeholder="สาขาระบุเบอร์ติดต่อกลับหรือ id line" 
                                    name="id" v-validate="'required'" v-model="line.id">
                                <span v-show="errors.has('id')" class="help is-danger">{{ errors.first('id') }}</span>
                            </div>
                        </div>                

                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" placeholder="ข้อความ" name="msg" v-validate="'required'" v-model="line.msg"></textarea>
                                <span v-show="errors.has('msg')" class="help is-danger">{{ errors.first('msg') }}</span>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-success" @click="isSendLine">S e n d</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <div class="field" v-if="lineErr">
                        <div class="control">
                            <span class="help is-danger">
                                {{ lineErr }}
                            </span>
                        </div>
                    </div>                     
                </footer>
                </div>

            </div>
            <div class="column">
                &nbsp;
            </div>                        
        </div>   
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
const HTTP = axios.create({
    baseURL: 'http://10.22.2.73:81/'
})

import th from 'vee-validate/dist/locale/th'
import { Validator } from 'vee-validate'
Validator.localize('th', th)
const dictionary = {
    th: {
        attributes: {
            id: 'เบอร์ติดต่อกลับหรือ id line',
            msg: 'ข้อความ',
        }
    }
}
Validator.localize(dictionary)

export default {

    data () {
        return {
            line : {
                id: '',
                msg: '',
            },
            lineErr: '',
        }
    },

    created () {
        if(!localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'login' })
        }
    },

    computed: {
        ...mapGetters([
            'getLineBranch'
        ])
    },

    methods: {
        async isSendLine () {
            this.$validator.validateAll().then( res => {
                if(res){

                    HTTP.get('LineToCts.php?msg='+this.line.msg+'&id='+this.line.id+'&brn='+this.getLineBranch)
                        .then(response => {
                          //  console.log(response)
                            if(response.data === false){
                                 this.lineErr = "error line"
                            }else{
                                alert('ส่ง Line to CTS สำเร็จ')
                                this.$router.push({ name: 'dashboard' })
                            }                          
                        })
                }
            })            
        }
    },

}
</script>

