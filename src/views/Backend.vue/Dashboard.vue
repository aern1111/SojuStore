<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n4">
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n5">
        <v-toolbar-title>DASHBOARD</v-toolbar-title>
      </v-toolbar>
      <v-item-group mandatory class="mt-n4">
        <v-container>
          <v-row justify="center" class="space">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#49D9A0' : 'white'"
                  class="d-flex align-center rounded-xl"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#49D9A0'"
                              >fas fa-chart-bar</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >Product</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>{{ productCount }}</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#49D9A0' : 'white'"
                  class="d-flex align-center rounded-xl"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#49D9A0'"
                              >far fa-user</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >User</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>{{ userCount }}</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#49D9A0' : 'white'"
                  class="d-flex align-center rounded-xl"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#49D9A0'"
                              >fas fa-suitcase</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >Order History</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>{{ orderCount }}</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
           
            
          </v-row>
        </v-container>
      </v-item-group>
      <v-row class="mt-n6">
        <v-col cols="12" sm="7">
          <v-chart class="chart mt-2" :option="option" />
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2">
          <h3> Promotion</h3>
            <v-spacer></v-spacer>
           
          </v-toolbar>
          <v-simple-table class="grey lighten-3">
            <template v-slot:default>
              <tbody>
                <tr v-for="item in orders" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ item.count }}</td>
                  <td>
                    <v-icon small>{{ item.icon }}</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n8">
        <v-toolbar-title>Customer</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card class="rounded-lg">
        <v-row>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://i.pinimg.com/564x/67/0f/45/670f45890282dc78cb8016a09277fa1a.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>ตูดหมึก</v-list-item-title>

                  <v-list-item-subtitle>32 Order</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://i.pinimg.com/564x/7e/a2/99/7ea299125555fc1d460d963ee8588c70.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>กิกิ</v-list-item-title>

                  <v-list-item-subtitle>32 Order</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://i.pinimg.com/564x/0a/d5/7b/0ad57bb0e28f66d539136fedab05473d.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>กิโก๊ะ</v-list-item-title>

                  <v-list-item-subtitle>10 Order</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://i.pinimg.com/564x/b2/26/74/b226740183dee3e1e48b9191d90284f6.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>โตโต๊ะ</v-list-item-title>

                  <v-list-item-subtitle>8 Order</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import http from "../../Services/FrontendService";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Home",
  data: () => ({
    productCount: 0,
    userCount: 0,
    orderCount: 0,
    toggle_exclusive: 1,
    orders: [
      {
        id: "ID23",
        title: "Chicken soup",
        state: "Soup",
        count: 200,
        icon: "fas fa-ellipsis-h",
      },
      {
        id: "ID30",
        title: "Tteokbokki",
        state: "Soup",
        count: 150,
        icon: "fas fa-ellipsis-h",
      },
      {
        id: "ID31",
        title: "Bibimbap",
        state: "Rice",
        count: 120,
        icon: "fas fa-ellipsis-h",
      },
      {
        id: "ID34",
        title: "Guksu",
        state: "Noodle",
        count: 120,
        icon: "fas fa-ellipsis-h",
      },
    ],

    option: {
      title: {
        text: "Sales Summary",
        left: "left",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },

      series: [
        {
          name: "เมนู",
          type: "pie",
          radius: "55%",
          center: ["45%", "50%"],
          data: [
            { value: 335, name: "Soju" },
            { value: 310, name: "Tteokbokki" },
            { value: 234, name: "Kimchi" },
            { value: 135, name: "Pajeon" },
            { value: 1548, name: "Chicken soup" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0)",
            },
          },
        },
      ],
    },
  }),
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "green",
  },
  created() {
    http.get("productCount").then((response) => {
      this.productCount = response.data;
    }),
      http.get("userCount").then((response) => {
        this.userCount = response.data;
      });
    http.get("productCartCount").then((response) => {
      this.orderCount = response.data;
    });
  },
};
</script>
<style>
.space {
  margin-left: -100px;
  margin-right: -100px;
}
</style>