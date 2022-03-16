<template>
  <div class="abar">
    <v-app-bar density="compact" absolute color="#D3AD79">
      <router-link to="/frontend/product">
      <img src="https://inwfile.com/s-dc/s4mipo.png" class="img" alt="food" >
      </router-link>
      <v-spacer></v-spacer>
      <router-link class="rtl" to="/frontend/product">
        <v-btn class="mr-3" text>Product</v-btn>
      </router-link>
      <router-link class="rtl" to="/frontend/aboutAfterlogin">
        <v-btn class="mr-3" text>About Me</v-btn>
      </router-link>
      <router-link class="rtl" to="/frontend/contactAfterlogin">
        <v-btn class="mr-3" text>Contact</v-btn>
      </router-link>
      
      <v-spacer></v-spacer>
      <v-icon left icon="mdi-handshake-outline"></v-icon>
      
      

      <v-divider inset vertical></v-divider>
      

      <router-link class="rtl" to="/frontend/cart">
        <v-btn class="mr-4 ml-5" color="#1C2951" plain>
          <i class="bx bxs-cart-add cart"></i>
        </v-btn>
      </router-link>
      

        <v-btn @click="loggedout" class="mr-4 ml-5" color="#1C2951" plain>
          <span>Logout</span>
          <i class="bx bx-log-out-circle login"></i>
        </v-btn>
        <v-avatar size="40">
          <v-img content-class="dog"
          src="https://i.pinimg.com/564x/da/2e/7b/da2e7b434f85f88cbbefd48cc0dfa6f0.jpg"
        ></v-img>
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
import http from "../../Services/FrontendService"
export default {
  name: "Home",
  data() {
    return {
      keyword:""
    }
  },
  methods: {
    loggedout(){
      http.post("logout").then((response)=>{
        console.log(response.data)
        window.location.href = "/"
      }).catch(error =>{
        console.log(error.message)
      })
    },
    
  },
};
</script>

<style>
.abar {
  margin-bottom: 100px;
}
.rtl {
  text-decoration: none;
}
.cart {
  font-size: 35px;
}
.login {
  font-size: 35px;
}
.img {
  width: 150px;
}
.dog{
  cursor: pointer;
}
</style>
