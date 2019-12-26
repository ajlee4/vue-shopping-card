<template>
  <v-col cols="12" sm="6" lg="3" xs="1">
    <router-link :to="openCard">
      <v-hover v-slot:default="{ hover }">
        <v-card class="pa-2" :elevation="hover ? 12 : 2" outlined tile>
          <v-img :src="product.thumbnail_url"></v-img>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.description }}</v-card-subtitle>
          <div class="card-action">
            <span class="card-price">{{ product.price }}$</span>
            <v-btn color="primary">Подробнее</v-btn>
          </div>
        </v-card>
      </v-hover>
    </router-link>
  </v-col>
</template>

<script>
export default {
  props: {
    product: [Object]
  },

  data: () => ({}),

  computed: {
    openCard() {
      return `/product/${this.product.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
}
.card-price {
  margin-bottom: 20px;
}
.pa-2 {
  cursor: pointer;
}
</style>
