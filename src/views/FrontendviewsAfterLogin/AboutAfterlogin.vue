<template>
  <div>
    <v-container>
    <v-row justify="space-around">
      <v-card color="#E0E0F3" width="3000">
        <v-img
          height="350px"
          src="https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-spacer></v-spacer>

          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/107847137_2761864867378968_2661108919671108925_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEC2rxxLGgLS3Lt3-2_EXmGoSr-51kGW6yhKv7nWQZbrJzuwH5yT0g9-tsxNqIiA88ZqmRKj4y-XuStaVCTLbuG&_nc_ohc=Y7lzwWPDFtwAX8rA7pf&tn=ZLYxgTm5awx8hzYw&_nc_ht=scontent.fcnx4-1.fna&oh=00_AT_rBDYWZRZVm6R8WAXHFRCprAOpXH4YsFca0O1ituoSAw&oe=62495A9C"
              >
            </v-avatar>
            <p class="ml-3 p">
              Aern Rattanaphorn
            </p>
          </v-card-title>
        </v-img>
    
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            About Me
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> {{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'Name' ,
          message:'Aern',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Current ',
          message: 'Maejo UniversityFaculty of Science Computer Science',
          color: 'red',
        },
        {
          from: 'Age',
          message: '21',
          color: 'green',
        },
        {
          from: 'Email',
          message: 'rettanaphorn@gmail.com',
          color: 'black',
        },
        {
          from: 'Facebook',
          message: 'AE RN',
          color: 'blue',
        },
        {
          from: 'Phone Number',
          message: '0821723992',
         color: 'pink',
        },
        
      ],
    }),
  }
</script>


<style>
.p{
  color: #000;
}

</style>