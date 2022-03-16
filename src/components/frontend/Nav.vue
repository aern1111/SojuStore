<template>
  <div class="abar">
    <v-app-bar density="compact" absolute color="#D3AD79">
      <router-link to="/">
      <img src="https://inwfile.com/s-dc/s4mipo.png" class="img"  alt="food">
      </router-link>
      
      <v-spacer></v-spacer>
      <router-link class="rtl" to="/">
        <v-btn class="mr-3" text>Home</v-btn>
      </router-link>
      <router-link class="rtl" to="/about">
        <v-btn class="mr-3" text>About Me</v-btn>
      </router-link>
      <router-link class="rtl" to="/contact">
        <v-btn class="mr-3" text>Contact</v-btn>
      </router-link>
      
      
      <v-spacer></v-spacer>
      <v-icon left icon="mdi-handshake-outline"></v-icon>
      
        
       
       <router-link class="rtl" to="/login_admin">
        <v-btn class="mr-4 ml-5" color="#1C2951" plain>
          <span>admin</span>
          <i class='bx bx-edit register'></i>
        </v-btn>
      </router-link>
      <!-- <v-icon>mdi-account-box</v-icon> -->

      <v-divider inset vertical></v-divider>

      <router-link class="rtl" to="/register">
        <v-btn class="mr-4 ml-5" color="#1C2951" plain>
          <span>Register</span>
          <i class='bx bx-user-pin register'></i>
        </v-btn>
      </router-link>

      <router-link class="rtl" to="/login">
        <v-btn class="mr-4 ml-5" color="#1C2951" plain>
          <span>Login</span>
          <i class='bx bx-log-in Login' ></i>
        </v-btn>
      </router-link>
      <i class='bx bxs-user-circle user'></i>

      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>

<style>
.abar {
  margin-bottom: 100px;
}
.rtl {
  text-decoration: none;
}
.Login{
  font-size: 35px;
}
.register{
  font-size: 30px;
}
.img{
 width: 150px;
}
.user{
  font-size: 35px;
  cursor: pointer;
}

</style>
