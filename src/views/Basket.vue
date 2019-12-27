<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Продукт</th>
            <th class="text-left">Имя</th>
            <th class="text-left">Цена</th>
            <th class="text-left">Количество</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <transition name="fade">
            <tr v-for="(product, index) in products" :key="index + Date.now()">
              <td>
                <v-img
                  :src="product.img"
                  aspect-ratio="1"
                  class="img"
                  max-width="100"
                  max-height="100"
                ></v-img>
              </td>
              <td>{{ product.model }}</td>
              <td>{{ product.totalPriceProduct.toFixed(2) }}</td>
              <td>{{ product.quantity }}</td>
              <td>
                <v-btn color="error" fab @click="removeBasketItem(product)">
                  <v-icon class="delete">mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </transition>
        </tbody>
      </template>
    </v-simple-table>
    <div class="result-field">Всего:{{ totalPrice }}$</div>
  </v-container>
</template>

<script>
export default {
  name: "Basket",
  computed: {
    products() {
      return this.$store.getters["basketProducts"];
    },
    totalPrice() {
      let summ = 0;

      this.products.forEach(product => {
        summ += parseFloat(product.totalPriceProduct);

        return summ;
      });
      return summ.toFixed(2);
    }
  },
  methods: {
    removeBasketItem(product) {
      return this.$store.dispatch("removeProductToBasket", product);
    }
  }
};
</script>
<style lang="scss" scoped>
.result-field {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 24px;
  line-height: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
