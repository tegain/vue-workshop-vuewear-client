<template>
  <div class="home">
    <div class="container">
      <store-grid :products="products" title="Tous nos produits" />
    </div>
  </div>
</template>

<script>
import StoreGrid from '@/components/shop/store-grid';

export default {
  name: 'Home',

  components: {
    StoreGrid
  },

  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>
