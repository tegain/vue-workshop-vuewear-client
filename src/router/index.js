import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.page';
import Men from '../views/men.page';
import Women from '../views/women.page';
import Product from '../views/product.page';
import Cart from '../views/cart.page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/men',
    name: 'men',
    component: Men
  },
  {
    path: '/women',
    name: 'women',
    component: Women
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
