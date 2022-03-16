<template>
  <div>
    <v-container grid-list-xs>
      <br /><br /><br />

      <form>
        <v-container>
          <v-row>
            <v-col class="avatar">
              <div>
                <v-list-item-avatar tile size="500px"  color="grey">
                  <img :src="pic" />
                </v-list-item-avatar>
              </div>
            </v-col>
            <v-col>
              <v-text-field
                v-model="first_name"
                :rules="first_nameRules"
                label="FirstName"
                required
              ></v-text-field>
              <v-text-field
                v-model="last_name"
                :rules="last_nameRules"
                label="LastName"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
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
              <v-text-field
                 :append-icon="show1 ? 'fas fa-eye' : 'mdi-eye-off'"
                v-model="confirm_password"
                :rules="confirm_passwordRules"
                :type="show1 ? 'text' : 'password'"
                label="Confirm_password"
                @click:append="show1 = !show1"
                required
              ></v-text-field>
              <v-text-field
                v-model="phoneNumber"
                :rules="phoneNumberRules"
                label="PhoneNumber"
                required
              ></v-text-field>
              

              <v-btn class="mr-4" @click="submit" color="green">
                Register
              </v-btn>
              <router-link class="admin" to="/register">
                <v-btn class="mr-4" @click="cancle" color="#F898A4">
                 cancel 
                 </v-btn>
              </router-link>
            </v-col>
          </v-row>
          </v-container
        >
      </form>
    </v-container>
  </div>
</template>

<script>
import http from "../Services/Authen";
export default {
  data() {
    return {
      pic: "https://royalwingsestore.com/wp-content/uploads/2020/12/Item-5-Jinro-Flavored-Soju-8-bottle-set.png",

      show:false,
      show1:false,
      

      first_name: "",
      first_nameRules: [
        v => !!v || 'first_name is required',
        v => v.length <= 100 || 'first_name must be less than 100 characters',
      ],

      last_name: "",
      last_nameRules: [
        v => !!v || 'last_name is required',
        v => v.length <= 100 || 'last_name must be less than 100 characters',
      ],

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

      confirm_password: "",
      confirm_passwordRules: [
        (v) => !!v || "confirm_password is required",
        (v) => v.length >= 6 || "confirm_password must be less than 6 characters",
        (v) => v=== this.password || "Password not match",
      ],

      phoneNumber: "",
     phoneNumberRules: [
        (v) => !!v || "phoneNumber is required",
        
      ],
    };
  },
  methods: {
    submit() {
      http
        .post("register", {
          firstName: this.first_name,
          lastName: this.last_name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirm_password,
          phoneNumber: this.phoneNumber,
        })
        .then((Response) => {
          console.log(Response.data);
          this.$router.push("/login");
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
      this. firstName = "";
      this.lastName = "";
      this. email = "";
      this. password = "";
      this. password_confirmation = "";
      this.phoneNumber = "";
    }
  },
};
</script>

<style>
</style>