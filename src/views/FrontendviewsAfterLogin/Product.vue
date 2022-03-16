<template>
  <div>
    <v-container>
      <v-row>
        <v-col> </v-col>
        <v-col>
          <v-form @submit.prevent="search">
            <v-text-field
              class="mr-4"
              v-model="keyword"
              full-width
              dense
              append-icon="mdi-magnify"
              outlined
              placeholder="Search"
              rounded
            ></v-text-field>
            <button @enter="search" type="submit" hidden></button>
          </v-form>
        </v-col>
      </v-row>

      <v-row>
        <v-card
          v-for="item in product"
          :key="item.id"
          class="mx-auto card"
          max-width="344"
          min-width="344"
        >
          <v-img :src="item.image" height="200px"></v-img>

          <v-card-title> {{ item.name }} </v-card-title>
          <v-card-subtitle> ฿{{ item.price }} </v-card-subtitle>
          <v-card-subtitle> {{ item.description }} </v-card-subtitle>
          <v-card-subtitle> {{ item.category }} </v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="addToCart(item)">
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import http from "../../Services/FrontendService";

export default {
  data() {
    return {
      product: [],
      keyword: "",
    };
  },
  methods: {
    addToCart(item) {
      let items = {
        id: item.id,
        image: item.image,
        name: item.name,
        amount: item.amount,
        price: item.price,
        category: item.category,
        description: item.description,
        total: item.price,
        qty: 1,
      };
      this.$store.dispatch("itemProduct", items);
    },
    search() {
      if (this.keyword != "") {
        http.get(`productSearch/${this.keyword}`).then((response) => {
          this.product = response.data;
          console.log(response.data);
        });
      } else {
        http
          .get("productRead")
          .then((response) => {
            console.log(response.data);
            this.product = response.data;
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.header);
            }
          });
      }
    },
  },
  created() {
    http
      .get("productRead")
      .then((response) => {
        console.log(response.data);
        this.product = response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.header);
        }
      });
  },
};
</script>

<style>
.card {
  margin-bottom: 30px;
}
</style>