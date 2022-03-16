<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div class="soju">
            <h1>SoJu Welcome</h1>
            <p>
              Order products at RiderMju or call. Order and pick up.<br />
             Facebook : SoJu  Location :SoJu Pangthong Dormitory<br />
            Mae Jo, Chiang Mai Province. Yellow shop. <br />
            Open Monday - Saturday.
              <br />
             11:00 - 21:00 Tel. : 000-000-0000
            </p>
          </div>
        </v-col>
        <v-col>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <img :src="slide.img" alt="" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

   

      <v-row align="center" justify="center">
        <div class="center">
          <h1>SoJu Shop</h1>
          <p>
            Incorpore seu álbum em seu site Exiba suas fotos incríveis com o
            album de fotos digital em seu site. Esta é uma maneira fácil e
            elegante de compartilhar suas memórias com sua família e amigos ao
            redor do mundo.
          </p>
        </div>
      </v-row>

       <v-row>
        <v-card
          v-for="item in product"
          :key="item.id"
          class="mx-auto card"
          max-width="344"
        >
          <v-img :src="item.image" height="200px"></v-img>

          <v-card-title> {{ item.name }} </v-card-title>
          <v-card-subtitle> ฿{{ item.price }} </v-card-subtitle>
          <v-card-subtitle> {{ item.description }} </v-card-subtitle>
          <v-card-subtitle> {{ item.category }} </v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange lighten-2" text @click="goToLogin">
              Add To Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>

      <!-- <v-row>
        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2017/12/20/03/52/noodles-3029172_960_720.jpg">
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2016/04/22/18/52/chicken-soup-1346310_960_720.jpg">
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2015/04/06/16/21/korean-food-709606_960_720.jpg">
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2017/06/12/15/01/skewers-2395810_960_720.jpg">
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>
        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2019/12/17/08/26/food-4701098_960_720.jpg">
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>
        <v-col cols="6" sm="4">
          <v-img width="500px" height="300px" src="https://cdn.pixabay.com/photo/2017/08/14/15/52/bachelor-business-2640909_960_720.jpg">
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>
      </v-row> -->

     
 
    </v-container>
  </div>
</template>

<script>
import http from "../Services/FrontendService"
export default {
  data: () => ({
    colors: ["", "", "", "", ""],
    product:[],
    slides: [
      {
        img: "https://1.bp.blogspot.com/-J9BZBzkyfbY/XeUwxGMiThI/AAAAAAAAAqs/v1t5wgNFDR0eW1c_lH6mh8Y0pUf3Yq8vwCNcBGAsYHQ/s1600/eiliv-aceron-697462-unsplash-750x549.jpg",
      },
      {
        img: "https://img-global.cpcdn.com/recipes/f42b9d3d8815100f/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%AB%E0%B8%A5-%EC%A7%9C%EC%9E%A5%EB%A9%B4-%E0%B8%88%E0%B8%B2%E0%B8%88%E0%B8%87%E0%B8%A1%E0%B8%A2%E0%B8%AD%E0%B8%99.jpg",
      },
      {
        img: "https://readspoonful.co/wp-content/uploads/2020/04/DSC_3457r-e1438228412843-4.jpg",
      },
      {
        img: "https://sites.google.com/site/khoreafoodyvc2016/_/rsrc/1473521590598/bibimbab-phi-bimbab/1410228518-662140img1-o.jpg",
      },
    ],
  }),
  methods: {
    goToLogin(){
      this.$router.push('/login')
    }
  },
  created() {
    http.get('productReadTree').then((ressponse)=>{
      this.product = ressponse.data
    })
  },
};
</script>

<style>
.center {
  margin-left: 80px;
}
.soju h1 {
  font-size: 40px;
}
.soju p {
  padding: 20px;
}
</style>