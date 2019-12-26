<template>
  <v-container>
    <div class="product">
      <div class="product__info">
        <div class="product__info-left">
          <v-img
            :src="product.thumbnail_url"
            aspect-ratio="1"
            class="img"
            max-width="400"
            max-height="400"
          ></v-img>
        </div>
        <div class="product__info-right">
          <h2 class="product__title">{{ product.title }}</h2>
          <div class="price">{{ (product.price * quantity).toFixed(2) }}$</div>
          <div class="quantity">
            <v-text-field
              type="number"
              label="Quantity"
              v-model="parseQuantity"
              min="1"
            ></v-text-field>
          </div>
          <div class="product__action">
            <v-btn color="success" @click="addProduct"
              >Добавить в корзину</v-btn
            >
          </div>
          <div class="product__desc">
            <h3 class="title">Описание</h3>
            <hr />
            <div class="product__desc-text">{{ product.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Card",
  data: () => ({
    quantity: 1
  }),
  computed: {
    product() {
      return this.$store.getters["getProduct"](this.$route.params.id);
    },
    parseQuantity: {
      get() {
        return parseInt(this.quantity);
      },
      set(val) {
        this.quantity = val;
      }
    }
  },
  methods: {
    addProduct() {
      return this.$store.dispatch("addProduct");
    }
  }
};
</script>
<style lang="scss" scoped>
.product {
  &__title {
    margin-bottom: 20px;
  }
  &__info {
    padding-top: 80px;
    display: flex;
    &-left {
      width: 50%;
      display: flex;
      justify-content: center;
      .img {
        border-radius: 15px;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
        padding-right: 40px;
        padding-left: 40px;
      }
    }
    &-right {
      width: 30%;
      div {
        margin-bottom: 30px;
      }
      .quantity {
        max-width: 300px;
      }
    }
  }
  &__desc {
    &-text {
      margin-top: 30px;
    }
  }
}
.price {
  font-size: 28px;
  line-height: 28px;
}
</style>
