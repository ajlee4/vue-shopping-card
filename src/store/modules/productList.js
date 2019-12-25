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
    }
  },
  mutations: {
    updateProductList(state, data) {
      state.allProducts = data;
      state.isLoading = false;
    }
  },
  state: {
    allProducts: [],
    isLoading: true
  },
  getters: {
    products: s => s.allProducts,
    isLoading: s => s.isLoading
  }
};
