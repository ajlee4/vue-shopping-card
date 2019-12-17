<template>
<v-container class="grey lighten-5">
    <v-row >
     
     <productCard v-for="product in allProduct" :key="product.id" :product='product'></productCard>
     
    </v-row>
  </v-container>
</template>

<script>
import productCard from './productCard'

export default {
      props: {
 allProduct: [Array, Object]
  },
 components: {
     productCard
 }
 ,

  data: () => ({
 
  }),
};
</script>
