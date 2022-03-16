a<template>
  <v-container grid-list-xs>
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg subheader">
      <v-toolbar-title><h3>Edit Product</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined ba color="#A8D1E7" @click="dialog = true">
        + Add Product
      </v-btn>
    </v-subheader>

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
              <th class="text-left">category</th>
              <th class="text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="item in Increase_and_decrease_the_product"
              :key="item.id"
            >
              <td>{{ item.id }}</td>
              <td><img :src="item.image" width="50px" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.category }}</td>

              <td>
                <i
                  class="bx bxs-edit-alt update"
                  style="color: #888888"
                  @click="openUpdateProduct(item)"
                ></i>

                <i
                  class="bx bx-trash trash bin"
                  style="color: #888888"
                  @click="removeProduct(item)"
                ></i>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>

    <v-row justify="center">
      <v-dialog v-model="dialog" width="900px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Product</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <img v-if="image" :src="image" width="300px" />
                  <v-text-field
                    label="Iamge"
                    v-model="image"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Name" v-model="name"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Prcie"
                    v-model="price"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Amount"
                    v-model="amount"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Description"
                    v-model="description"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Category"
                    v-model="category"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              clos
            </v-btn>
            <v-btn color="green darken-1" text @click="addProduct">
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialogUpdate" width="900px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Succeed</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <img v-if="imageUpdate" :src="imageUpdate" width="300px" />
                  <v-text-field
                    label="Iamge"
                    v-model="imageUpdate"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    v-model="nameUpdate"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Prcie"
                    v-model="priceUpdate"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Amount"
                    v-model="amountUpdate"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Description"
                    v-model="descriptionUpdate"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Category"
                    v-model="categoryUpdate"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogUpdate = false">
              close
            </v-btn>
            <v-btn color="green darken-1" text @click="updateProduct(idUpdate)">
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import http from "../../Services/FrontendService";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      Increase_and_decrease_the_product: [],
      dialog: false,
      dialogUpdate: false,

      // รับค่าจาก form เพิ่มสินค้า
      image: "",
      name: "",
      price: "",
      amount: "",
      description: "",
      category: "",

      // Update สินค้า
      idUpdate: null,
      imageUpdate: "",
      nameUpdate: "",
      priceUpdate: "",
      amountUpdate: "",
      descriptionUpdate: "",
      categoryUpdate: "",
    };
  },
  methods: {
    addProduct() {
      // this.dialog = false"
      let infomation = {
        image: this.image,
        name: this.name,
        price: this.price,
        amount: this.amount,
        description: this.description,
        category: this.category,
      };
      http.post("productCreate", infomation).then(() => {
        Swal.fire({
          icon: "success",
          title: "success",
          
        }).then(() => {
          this.dialog = false;
          window.location.href = "/backend/Increase_and_decrease_the_product";
        });
      });
    },
    openUpdateProduct(item) {
      this.dialogUpdate = true;
      http
        .get(`productReadID/${item.id}`)
        .then((response) => {
          (this.idUpdate = response.data.id),
            (this.imageUpdate = response.data.image),
            (this.nameUpdate = response.data.name),
            (this.priceUpdate = response.data.price),
            (this.amountUpdate = response.data.amount),
            (this.descriptionUpdate = response.data.description),
            (this.categoryUpdate = response.data.category);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    updateProduct(id) {
      let updateInfomation = {
        image: this.imageUpdate,
        name: this.nameUpdate,
        price: this.priceUpdate,
        amount: this.amountUpdate,
        description: this.descriptionUpdate,
        category: this.categoryUpdate,
      };
      http.put(`productUpdate/${id}`, updateInfomation).then(() => {
        Swal.fire("Updated!", "Your file has been updated.", "success").then(
          () => {
            window.location.href = "/backend/Increase_and_decrease_the_product";
          }
        );
      });
    },
    removeProduct(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          http
            .delete(`productDelete/${item.id}`)
            .then(() => {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                window.location.href =
                  "/backend/Increase_and_decrease_the_product";
              });
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      });
    },
  },
  mounted() {
    http
      .get("productRead")
      .then((response) => {
        console.log(response.data.id);
        this.Increase_and_decrease_the_product = response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.message);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.header);
        }
      });
  },
};
</script>

<style>
.update {
  padding: 10px;
  font-size: 15px;
  background: #e0ffff;
  margin-right: 10px;
  border-radius: 6px;
}
.bin {
  padding: 10px;
  font-size: 13px;
  background: #ffdcdc;
  margin-right: 10px;
  border-radius: 6px;
}
.update:hover {
  padding: 10px;
  font-size: 15px;
  background: #C0E4F6;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.bin:hover {
  padding: 10px;
  font-size: 13px;
  background: #E8ABB5;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
