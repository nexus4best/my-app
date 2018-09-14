<template>
  <div id="app" class="container">

    <main-header v-if="MenuHeader.getHeader"></main-header>

    <div class="columns" v-if="MenuHeader.getHeader" style="margin-top:1px;margin-bottom:1px">
      <div class="column">
            <router-link to="/repair/dashboard" tag="button" class="button is-small">หน้าหลัก</router-link>
              &nbsp;
            <router-link to="/repair/choice" tag="button" class="button is-info is-small">แจ้งซ่อม CTS</router-link>
              &nbsp;
            <router-link to="/repair/line" tag="button" class="button is-small">ส่ง Line to CTS</router-link>
              &nbsp;
            <a class="button is-small">ทรัพย์สินอื่นๆ</a>
              &nbsp;
      </div>
      <div class="column">
        <div class="level-right">
          <router-link to="/repair/branch/info" tag="button" class="button is-small">ข้อมูลสาขา</router-link>
            &nbsp;
          <button type="submit" class="button is-dark is-small" @click="isLogout">Logout</button>
        </div>
      </div>
    </div>

    <hr style="margin-top:2px;margin-bottom:15px">

    <router-view/>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainHeader from './views/MainHeader'
export default {

    components: {
        MainHeader
    },    

    computed: {
      ...mapState(['MenuHeader']),
    },   

    methods: {
        isDataBrach () {

        },

        isLogout () {
            this.$store.dispatch('hindHeader')
            localStorage.removeItem('UserID')
            localStorage.removeItem('UserName')
            localStorage.removeItem('UserBranch')
            //localStorage.removeItem('token')
            this.$router.push({ name: 'login' })
        }
    }    

}
</script>

