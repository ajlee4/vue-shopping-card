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
    addProduct({ commit }) {
      return commit("updateBasket");
    }
  },
  mutations: {
    updateProductList(state, data) {
      state.allProducts = data;
      state.isLoading = false;
    },
    updateBasket(state) {
      state.addProduct++;
    }
  },
  state: {
    allProducts: [],
    isLoading: true,
    addProduct: 0
  },
  getters: {
    products: s => s.allProducts,
    isLoading: s => s.isLoading,
    getProduct: state => id => {
      return state.allProducts.find(item => item.id == id);
    },
    addProduct: s => s.addProduct
  }
};
