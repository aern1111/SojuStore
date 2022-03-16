<template>
  <div>
    <v-container grid-list-xs>
      <br /><br /><br />
      <form>
        <v-container>
          <v-row>
            <v-col class="avatar">
              <div>
                <v-list-item-avatar tile size="350px" color="grey">
                  <img :src="pic" />
                </v-list-item-avatar>
              </div>
            </v-col>
            <v-col>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                :append-icon="show ? 'fas fa-eye' : 'mdi-eye-off'"
                v-model="password"
                :rules="passwordRules"
                :type="show ? 'text' : 'password'"
                label="Password"
                @click:append="show = !show"
                required
              ></v-text-field>

              
              
              <v-btn class="mr-4 " @click="login" color="#9DC183"> login </v-btn>
              <router-link class="admin" to="/login_admin">
                <v-btn class="mr-4" @click="cancle" color="#F898A4">
                 cancel 
                 </v-btn>
              </router-link>
              
              
            </v-col>
          </v-row>
        </v-container>
      </form>
    </v-container>
  </div>
</template>

<script>
import http from "../../Services/FrontendService";
import Swal from "sweetalert2"
export default {
  data() {
    return {

      pic: "https://pbs.twimg.com/media/DWernnmU0AErWuX.jpg",
      
       show:false,

      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],

      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be less than 6 characters",
      ],
    };
  },
  methods: {
    login() {
      http
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
        }).then(()=>{
          if (localStorage.getItem("user")) {
              let userStorage = localStorage.getItem("user");
              let userStorageJSON = JSON.parse(userStorage);
              let user = userStorageJSON["user"];

              if (user.role == 1) {
                // หาก role = 1 (Admin) ให้ส่งไปที่หน้า Dashboard
                window.location.href = "/backend/dashboard";
              } 
              else {
                // Login ไม่ผ่าน ให้แจ้งเตือน
                const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });

              Toast.fire({
                icon: "error",
                title: "Invalid login information!!!",
              });
              }
            }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
          }
        });
    },
    cancle(){
      this.email = "";
      this.password = "";
    }
  },
};
</script>

<style>
.admin{
  text-decoration: none;
}
</style>