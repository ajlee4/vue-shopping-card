import Vue from 'vue'
import VueRouter from 'vue-router'
import Card from './views/Card'
import Home from './views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',

    routes: [
      {
          path:'/',
          component:Home,

      },
      {
        path: '/card',
        component: Card,
      }
    ]
})