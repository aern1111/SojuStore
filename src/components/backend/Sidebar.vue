<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="white"
    mini-variant
    mini-variant-width="150"
  >
    <v-avatar size="130">
      <img src="https://inwfile.com/s-dc/s4mipo.png" class="img" alt="food" />
    </v-avatar>
   <v-container><div><h3 class="h3">(Admin)</h3></div></v-container>
      

    <v-divider class="mx-3 my-5"></v-divider>

    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          active-class="border"
          :ripple="false"
          style="margin-bottom:50px"
        >
          <router-link class="icon" :to="item.link">
            <v-list-item-icon>
              <v-icon
                v-text="item.icon"
                style="
                  position: absolute;
                  bottom: 10px;
                  margin-left: auto;
                  margin-right: auto;
                  left: 0;
                  right: 0;
                  text-align: center;
                "
              ></v-icon>
            </v-list-item-icon> 
            </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div
      style="
        position: absolute;
        bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      "
    >
      <v-btn icon :ripple="false">
        <v-badge bordered overlap color="red" dot>
          <v-icon>far fa-bell</v-icon>
        </v-badge> </v-btn
      ><br />
      <v-avatar size="50">
        <v-img
          src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/71112558_2507597306139060_3452728349602873344_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHapUcRtU4n_Elea43bP0SrqoySdrj0JJ-qjJJ2uPQkn6DMhFgQpVYt5n4gOEyLI7N5xXaddnw4-1lIQq82a3_f&_nc_ohc=y7-0RfVA22kAX8QYIQ8&_nc_ht=scontent.fcnx4-1.fna&oh=00_AT83XlOtdOJtOarv1XMkoWHSm5CP7rXCVceNPxH6ZXCOAw&oe=6248BA1A"
        ></v-img>
      </v-avatar>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "fas fa-chart-line ", link: "/backend/dashboard" },
      { icon: "fas fa-th-large", link: "/backend/check_items_for_sale" },
      {
        icon: "fas fa-plus",
        link: "/backend/Increase_and_decrease_the_product",
      },
      { icon: "bx bx-log-out-circle", link: "/login_admin" },
    ],
  }),
};
</script>
<style>
.icon {
  text-decoration: none;
}
.border {
  margin-left: 5px;
  margin-right: 5px;
  background: #dddddd;
  border-radius: 10px;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.h3{
  text-align: center;
}
.img{
  text-align: center;
}
</style>