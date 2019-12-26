import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/product/:id",
      name: "Card",
      component: () => import("./views/Card.vue")
    },
    {
      path: "/basket",
      name: "Basket",
      component: () => import("./views/Basket.vue")
    }
  ]
});
