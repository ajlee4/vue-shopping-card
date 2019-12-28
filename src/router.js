import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
      meta: { layout: "main" },
    },
    {
      path: "/product/:id",
      name: "Card",
      component: () => import("./views/Card.vue"),
      meta: { layout: "main" },
    },
    {
      path: "/basket",
      name: "Basket",
      component: () => import("./views/Basket.vue"),
      meta: { layout: "main" },
    }, 
    {
      path:'/login',
      name:'Login',
      component:()=>import('./views/Login.vue'),
      meta: { layout: "auth" },
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=> import('./views/Register.vue'),
      meta: {layout:'auth'}
    }
  ]
});
