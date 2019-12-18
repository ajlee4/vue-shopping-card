<template>
 <loader v-if="isProductLoading"></loader>
      <v-container v-else>
    <productList :allProduct='allProducts'></productList>
  </v-container>
</template>

<script>

import productList from '../components/productList'
import loader from '../components/loader'
import {mapGetters,mapActions} from 'vuex'
export default {
    components: {
    productList,
    loader,
  },
  computed:  mapGetters(['allProducts','isProductLoading']),
  methods: mapActions(['getProduct']),
  mounted() {
    setTimeout(()=> this.getProduct(),1000)
  
  },

  name: 'App',
  data: () => ({
 
  }),
};
</script>
