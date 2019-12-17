<template>
 <v-col
   
        cols="12"
        sm="6"
        lg='3'
        xs='1'
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
          
            :src="product.thumbnail_url"
          ></v-img>
          <v-card-title>{{product.title}}</v-card-title>
          <v-card-subtitle>{{product.description}}</v-card-subtitle>
        </v-card>
       </v-col>
      
</template>

<script>


export default {
props: {
    product:[Object]
},
 

  data: () => ({
 
  }),
};
</script>
