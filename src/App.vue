<template>
  <v-app>
  <v-container>
    <toolbar></toolbar>
    <productList :allProduct='allProducts'></productList>
  </v-container>
  </v-app>
</template>

<script>
import toolbar from './components/tollbar'
import productList from './components/productList'
import {mapGetters} from 'vuex'
export default {
    components: {
    toolbar,
    productList,
  },
  computed:  mapGetters(['allProducts']),

  name: 'App',
  data: () => ({
 
  }),
};
</script>
