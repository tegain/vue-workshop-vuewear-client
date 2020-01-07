<template>
  <div id="app">
    <app-header />

    <main>
      <router-view />
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

  mounted() {
    this.fetchProducts();
  },

  methods: {
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
</style>
