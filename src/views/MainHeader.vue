<template>
    <div class="container">
        <table class="table is-fullwidth" style="margin-top:5px;background-color:#EEEEEE;font-size:12px">
            <tr v-for="zone in MenuHeader.getBranch" :key="zone.BrnCode">
                <td>{{ zone.BrnCode }} {{ zone.BrnName }}</td>
                <td style="text-align:right">
                    ผู้จัดการเขต : {{ zone.area.AreaName }}
                    &nbsp;&nbsp;
                    CTS : {{ zone.cts.CtsName }}
                </td>                  
            </tr>
        </table> 
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed: {
      ...mapState(['MenuHeader']),
    },  

}
</script>

<style>

</style>
