<template>
  <div id="app">
    <app-header />

    <main>
      <transition name="route">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/shell/app-header';

export default {
  name: 'App',

  components: {
    AppHeader
  },

  created() {
    this.setCartIfStored();
    this.fetchProducts();
  },

  methods: {
    setCartIfStored() {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          this.$store.commit('setCart', JSON.parse(storedCart));
        }
      } catch (e) {
        // eslint-disable-next-line
        console.log(e.message);
      }
    },
    fetchProducts() {
      this.$store.dispatch('fetchProducts');
    }
  }
};
</script>

<style scoped>
main {
  margin-top: 4rem;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s;
}
.route-enter,
.route-leave-to {
  opacity: 0;
}
</style>
