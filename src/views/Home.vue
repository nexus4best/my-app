<template>
  <div class="container">
    <h1>Home</h1>
  <div class="field">
    <div class="control">
      <button type="submit" class="button is-link" @click="getLogout">Logout</button>
    </div>
  </div>      
  </div>
</template>

<script>

export default {
  name: 'home',

  created () {
     if(!localStorage.getItem('token')) {
       this.$router.push({ name: 'about' })
     }
  },

  methods: {
    getLogout () {
      localStorage.removeItem('UserID')
      localStorage.removeItem('UserName')
      localStorage.removeItem('UserBranch')
      localStorage.removeItem('token')
      this.$router.push({ name: 'about' })
    }
  }
}
</script>
