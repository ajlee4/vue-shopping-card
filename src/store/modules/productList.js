import { db } from "@/main";
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default {
  
  actions: {
    async getProducts(ctx) {
      try {
        const data = [];
        await db
          .collection("product")
          .get()
          .then(QuerySnapshot => {
            QuerySnapshot.forEach(s => {
              const productData = {
                id: s.id,
                ...s.data()
              };
              data.push(productData);
            });
          });
        return ctx.commit("updateProductList", data);
      } catch (e) {
        console.error(e);
      }
    },
    async addProductToBasket({ commit }, { product, quantity, price }) {
      return commit("updateBasket", { product, quantity, price });
    },
    removeProductToBasket({ commit }, product) {
      return commit("removeBasketItem", product);
    }
  },
  mutations: {
    updateProductList(state, data) {
      state.allProducts = data;
      state.isLoading = false;
    },
    updateBasket(state, { product, quantity, price }) {
      const record = state.basketProducts.find(
        element => element.id == product.id
      );
      if (record) {
        record.quantity += quantity;
        record.totalPriceProduct += price;
      } else {
        state.addProductToBasketCount++;
        state.basketProducts.push(product);
      }
      this.commit('saveCart');
    },
    removeBasketItem(state, product) {
      const record = state.basketProducts.find(
        element => element.id == product.id
      );
      state.basketProducts.splice(state.basketProducts.indexOf(record), 1);
      state.addProductToBasketCount--;
      this.commit('saveCart');
    },
      saveCart(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.basketProducts));
        window.localStorage.setItem('cartCount', state.addProductToBasketCount);
    }
  },
  state: {
    allProducts: [],
    isLoading: true,
   
    addProductToBasketCount: cartCount ? parseInt(cartCount) : 0,
    basketProducts: cart ? JSON.parse(cart): []
  },
  getters: {
    products: s => s.allProducts,
    isLoading: s => s.isLoading,
    getProduct: state => id => {
      return state.allProducts.find(item => item.id == id);
    },
    addProductToBasketCount: s => s.addProductToBasketCount,
    basketProducts: s => s.basketProducts
  }
};
