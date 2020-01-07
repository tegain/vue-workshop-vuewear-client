import Vue from 'vue';
import Vuex from 'vuex';
import { ProductsService } from '@/services/products.service';

Vue.use(Vuex);

const productsService = new ProductsService();

/**
 * @typedef {Object} State
 *
 * @property {Product[]} products
 * @property {CartItem[]} cart
 */

/**
 * @typedef {Object} ItemQuantity
 * @property {number} quantity
 * @typedef {Product & ItemQuantity} CartItem
 */

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    /**
     * @param {State} state
     * @param {Product[]} products
     */
    setProducts(state, products) {
      state.products = products;
    },

    /**
     * @param {State} state
     * @param {CartItem} payload
     */
    addToCart(state, payload) {
      const itemExists = state.cart.find(item => item._id === payload._id);
      itemExists
        ? (itemExists.quantity += payload.quantity)
        : state.cart.push(payload);
    }
  },
  actions: {
    async fetchProducts(context) {
      const products = await productsService.fetchProducts().catch(error => {
        return Promise.reject(error);
      });

      context.commit('setProducts', products);
      return products;
    }
  },
  getters: {
    /**
     * @param {State} state
     */
    getMenProducts(state) {
      return state.products.filter(product => product.gender === 'Male');
    },

    /**
     * @param {State} state
     */
    getWomenProducts(state) {
      return state.products.filter(product => product.gender === 'Female');
    },

    /**
     * @param {State} state
     */
    getProductById(state) {
      return function(id) {
        return state.products.find(product => product._id === id);
      };
    }
  }
});
