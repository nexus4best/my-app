<template>
    <div>
        <h1>Repair Choice</h1>
    </div>
</template>

<script>
export default {

    created () {
        if(!localStorage.getItem('UserBranch')) {
            this.$router.push({ name: 'login' })
        }
    },    

}
</script>

<style>

</style>
