<template>
  <loader v-if="isLoading"></loader>
  <v-container v-else>
    <productList :allProduct="products"></productList>
  </v-container>
</template>

<script>
import productList from "../components/productList";
import loader from "../components/loader";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    productList,
    loader
  },
  computed:  mapGetters(['products','isLoading']),
  methods: mapActions(['getProducts']),
 async mounted() {
    await this.getProducts()
  
  },

 
  name: "Home"
};
</script>
