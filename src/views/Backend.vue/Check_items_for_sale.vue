<template>
  <v-container grid-list-xs>
    <v-toolbar-title><h3>Order History</h3></v-toolbar-title>
    <v-card elevation="5">
      <v-simple-table height="auto">
        <template>
          <thead>
            <tr>
              <th class="text-left">Number</th>
              <th class="text-left">Image</th>
              <th class="text-left">Name</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Total</th>
              <th class="text-left">Description</th>
              <th class="text-left">Firstname</th>
              <th class="text-left">Lastname</th>
              <th class="text-left">Date</th>
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
              <td>{{ item.quantity }}</td>
              <td>{{ item.total }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.users.firstName }}</td>
              <td>{{ item.users.lastName }}</td>
              <td>{{ date(item.created_at) }}</td>

              <td>
                <i
                  class="bx bx-trash trash bin"
                  style="color: #888888"
                  @click="removecart(item)"
                ></i>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import http from "../../Services/FrontendService";
import moment from "moment"
import Swal from "sweetalert2";

export default {
  data() {
    return {
      Increase_and_decrease_the_product: [],
    };
  },
  created() {
    http
      .get("productCartRead")
      .then((response) => {
        console.log(response.data);
        this.Increase_and_decrease_the_product = response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.header);
        }
      });
  },
  methods: {
    date(value){
      return moment(String(value)).format("DD/DD/YYYY");
    },
    removecart(item){
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
            .delete(`productCartDelete/${item.id}`)
            .then(() => {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                window.location.href =
                  "/backend/check_items_for_sale";
              });
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      });
    }
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
  background: #26c085;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.bin:hover {
  padding: 10px;
  font-size: 13px;
  background: #fa0303;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>

