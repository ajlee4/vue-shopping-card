import { db } from "@/main";
export default {
  actions: {
    async getProducts(ctx) {
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
    },
    async addProductToBasket({ commit }, { product, quantity, price }) {
      return commit("updateBasket", { product, quantity, price });
    },
    removeProductToBasket({commit},product){
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
        state.addProduct++;
        state.basketProducts.push(product);
      }
    },
    removeBasketItem(state,product) {
      const record = state.basketProducts.find(element => element.id == product.id);
      state.basketProducts.splice(state.basketProducts.indexOf(record), 1);
      state.addProduct--;
    },
  //   saveCart(state) {
  //     window.localStorage.setItem('cart', JSON.stringify(state.basketProducts));
  //     window.localStorage.setItem('cartCount', state.addProduct);
  // }
  },
  state: {
    allProducts: [],
    isLoading: true,
    addProduct: 0,
    basketProducts: []
  },
  getters: {
    products: s => s.allProducts,
    isLoading: s => s.isLoading,
    getProduct: state => id => {
      return state.allProducts.find(item => item.id == id);
    },
    addProduct: s => s.addProduct,
    basketProducts: s => s.basketProducts
  }
};
