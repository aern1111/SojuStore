<template>
  <div>
    <v-container grid-list-xs>
      <br /><br /><br />
      <form>
        <v-container>
          <v-row>
            <v-col class="avatar">
              <div>
                <v-list-item-avatar tile size="400px" color="grey">
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

              <v-btn class="mr-4" @click="login" color="#9DC183"> login </v-btn>
              <router-link class="admin" to="/login">
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
import http from "../Services/Authen";
export default {
  data() {
    return {
      pic: "https://igomartph.com/wp-content/uploads/2021/05/Untitled-design-30.png",

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
          // this.$router.push("/frontend/product");
          window.location.href = "/frontend/product";
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.header);
          }
        });
    },
    cancle() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
.admin {
  text-decoration: none;
}
.iconadmin {
  font-size: 30px;
}
</style>