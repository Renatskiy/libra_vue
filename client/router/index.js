import Vue from 'vue'
import Router from 'vue-router'
import order from '../views/order'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/order',
      component: order
    }
  ]
})
