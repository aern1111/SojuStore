<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card elevation="5">
            <v-simple-table height="auto">
              <template>
                <thead>
                  <tr>
                    <th class="text-left">Number</th>
                    <th class="text-left">Image</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">total</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in cart" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td><img :src="item.image" width="50px" /></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                      <i class="bx bx-minus minusQty" @click="reduce(item)"></i>
                      {{ item.qty }}
                      <i class="bx bx-plus plusQty" @click="increase(item)"></i>
                    </td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.total }}</td>
                    <td>
                      <i
                        class="bx bx-trash trash"
                        style="color: #888888"
                        @click="removeProduct(item)"
                      ></i>
                    </td>
                    
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="cart.length > 0">
        <v-col></v-col>
        <v-col>
          <v-card tile elevation="6">
            <v-card-text class="d-flex justify-center text-h5"
              ><b>รวมทั้งสิ้น {{ total }} บาท </b>
            </v-card-text>
            <v-card-actions>
              <v-btn block outlined @click="dialog = true" color="success"
                >BUY</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="dialog" width="900px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Use Google's location service?</span>
            </v-card-title>
            <v-card-text>
              <v-simple-table height="auto">
                <template>
                  <thead>
                    <tr>
                      <th class="text-left">Image</th>
                      <th class="text-left">Name</th>
                      <th class="text-left">Price</th>
                      <th class="text-left">Amount</th>
                      <th class="text-left">Description</th>
                      <th class="text-left">total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="item in cart" :key="item.id">
                      <td><img :src="item.image" width="50px" /></td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.price }}</td>
                      <td>
                        {{ item.qty }}
                      </td>
                      <td>{{ item.description }}</td>
                      <td>{{ item.total }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-actions>
              <h3>รวม {{ total }} บาท</h3>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Cancle
              </v-btn>
              <v-btn color="green darken-1" text @click="addToDB()">
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import http from "../../Services/FrontendService";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      cart: [],
      dialog: false,
    };
  },
  methods: {
    increase(item) {
      item.qty = item.qty + 1;
      item.total = parseInt(item.price) * item.qty;
      console.log(typeof item.total);
    },
    reduce(item) {
      item.qty = item.qty - 1;
      if (item.qty <= 1) {
        item.qty = 1;
      }
      item.total = parseInt(item.price) * item.qty;
    },
    removeProduct(item) {
      var index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
      localStorage.removeItem("product");
    },

    addToDB() {
      let userStorage = localStorage.getItem("user");
      let userStorageJSON = JSON.parse(userStorage);
      let user = userStorageJSON["user"];
      let user_id = user.id;

      this.cart.forEach((item) => {
        let productCart = {
          name: item.name,
          image: item.image,
          price: item.price,
          description: item.description,
          quantity: item.qty,
          total: item.total,
          category: item.category,
          user_id: user_id,
        };

        http.post("productCartCreate", productCart).then(() => {
          Swal.fire({
            icon: "success",
            title: "success",
          }).then(() => {
            this.dialog = false;
            window.location.href = "/frontend/product";
          });
        });
      });
    },
  },
  created() {
    this.cart = this.$store.getters.itemInCart;
  },
  computed: {
    total() {
      var sum = 0;
      this.cart.forEach((item) => {
        sum += parseInt(item.total);
      });
      return sum;
    },
  },
};
</script>

<style>
</style>