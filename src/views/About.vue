<template>
  <div class="container">

  <div class="field">
    <div class="control">
      <input class="input" type="text" v-model="Login.UserID" placeholder="UserID">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <input class="input" type="password" v-model="Login.UserPassword" placeholder="UserPassword">
    </div>
  </div>  

  <div class="field">
    <div class="control">
      <button type="submit" class="button is-link" @click="getLogin">Login</button>
    </div>
  </div>  
   
    <h1><b>ทดสอบค้นหาเลขที่สรรพากร</b></h1>
    <br>
    <div class="field">
      <div class="select">
        <select v-model="FindBy">
          <option value="">โปรดระบุ การค้นหา</option>
          <option value="BrnCode">รหัสสาขา</option>
          <option value="BrnName">ชื่อสาขา</option>
          <option value="Revenue">เลขที่สรรพากร</option>
          <option value="CshCode">รหัสเครื่องขาย</option>
        </select>
      </div> 
      &nbsp;
      <input type="text" class="input" v-model="KeyWord" placeholder="" style="width:225px" v-show="FindBy !== 'CshCode'">
      &nbsp;
      <div class="select" v-show="FindBy === 'CshCode'">
        <select v-model="findCshCode">
          <option value="">โปรดระบุ รหัสเครื่องขาย</option>
          <option v-for="value in CshCodeGroup" :value="value.CshCode" :key="value.CshCode">
            {{ value.CshCode }}
          </option>
        </select>
      </div> 
      &nbsp;
      <button type="submit" class="button is-info" @click="getSearch">Search</button>
    </div>     
    <div class="field">
      <table class="table" v-if="Branch.length > 0">
        <tr>
          <th>#</th>
          <th>สถานะ</th>
          <th>รหัสสาขา</th>
          <th>ชื่อสาขา</th>
          <th>ชื่อเครื่องคอมพิวเตอร์</th>
          <th>รหัสเครื่องขาย</th>
          <th>เลขที่สรรพากร</th>
        </tr>
        <tr v-for="(brn,key) in Branch" :key="brn.CshDatabaseServerAlone">
          <td>{{ key + 1 }}</td>
          <td v-if="brn.BrnOpen === 0">
            <span class="icon has-text-danger"><font-awesome-icon icon="times" /></span>
          </td>
          <td v-if="brn.BrnOpen === 1">
            <span class="icon has-text-success"><font-awesome-icon icon="check" /></span>
          </td>
          <td>{{ brn.BrnCode }}</td>
          <td>{{ brn.BrnName }}</td>
          <td>{{ brn.CshDatabaseServerAlone }}</td>
          <td>{{ brn.CshCode }}</td>
          <td>{{ brn.CshReceiptPosCashier }}</td>
        </tr>
      </table>
    </div>   
  </div>
</template>

<script>
import axios from 'axios'
const HTTP = axios.create({
  baseURL: 'http://10.22.2.73/api_pacific/'
})

export default {
  name: 'about',

  data () {
    return {
      Login: {
        UserID: 'S005',
        UserPassword: 'ctsgrp'
      },
      FindBy: '',
      KeyWord: '',
      findCshCode: '',
      CshCodeGroup: [],
      Branch: [],
    }
  },

  async created () {
     if(localStorage.getItem('token')) {
       this.$router.push({ name: 'home' })
     }
    try {
      let response = await HTTP.get('CshReceiptPosCshCodeGroup.php')
      this.CshCodeGroup = response.data
    } catch (error) {
      console.log(error)
    } 
  },

  methods: {

    getLogin () {
      const formData = new FormData()
      
      formData.append('UserID', this.Login.UserID)
      formData.append('UserPassword', this.Login.UserPassword)
      
      HTTP.post('LoginUser.php', formData)
        .then(response => {
          this.$router.push({ name: 'home' })
          console.log(response.data)
          localStorage.setItem('UserID', response.data.UserID)
          localStorage.setItem('UserName', response.data.UserName)
          localStorage.setItem('UserBranch', response.data.UserBranch)
          localStorage.setItem('token', response.data[0])
        })
    },

    async getSearch () {
      if(this.FindBy === 'BrnCode'){
        try {
          let response = await HTTP.get('CshReceiptPosBrnCode.php?'+this.FindBy+'='+this.KeyWord)
          this.Branch = response.data 
        } catch (error) {
          console.log(error)
        }
      } else if(this.FindBy === 'BrnName'){
        try {
          let response = await HTTP.get('CshReceiptPosBrnName.php?'+this.FindBy+'='+this.KeyWord)
          this.Branch = response.data 
        } catch (error) {
          console.log(error)
        }                
      } else if(this.FindBy === 'Revenue'){
        try {
          let response = await HTTP.get('CshReceiptPosRevenue.php?'+this.FindBy+'='+this.KeyWord)
          this.Branch = response.data 
        } catch (error) {
          console.log(error)
        }                  
      } else if(this.FindBy === 'CshCode'){
        try {
          let response = await HTTP.get('CshReceiptPosCshCode.php?'+this.FindBy+'='+this.findCshCode)
          this.Branch = response.data 
        } catch (error) {
          console.log(error)
        }                  
      }      
    }
  }

}
</script>
