import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/home.page')
  },
  {
    path: '/men',
    name: 'men',
    component: () => import(/* webpackChunkName: 'men' */ '../views/men.page')
  },
  {
    path: '/women',
    name: 'women',
    component: () =>
      import(/* webpackChunkName: 'women' */ '../views/women.page')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () =>
      import(/* webpackChunkName: 'product' */ '../views/product.page')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: 'cart' */ '../views/cart.page')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
