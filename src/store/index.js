import Vue from 'vue'
import Vuex from 'vuex'
import productList from './modules/productList'
import productCard from './modules/productCard'
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
productList,
productCard
}
})