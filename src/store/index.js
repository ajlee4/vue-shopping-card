import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth'
import productList from "./modules/productList";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    productList,
    auth
  }
});
