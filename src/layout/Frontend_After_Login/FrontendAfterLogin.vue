<template>
  <div>
      <Header/>
      <router-view/>
  </div>
</template>

<script>
import Header from "../../components/frontend/NavFrontend.vue"
export default {
    components:{
        Header
    }

}
</script>

<style>

</style>