<template>
  <div>
      <Sidebar/>
      
      <router-view/>
  </div>
</template>

<script>
import Sidebar from "../../components/backend/Sidebar.vue"

export default {
    components:{
        Sidebar,
        
    }

}
</script>

<style>

</style>