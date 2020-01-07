<template>
  <div class="men">
    <div class="container">
      <store-grid :products="products" />
    </div>
  </div>
</template>

<script>
import StoreGrid from '@/components/shop/store-grid';

export default {
  name: 'Men',

  components: {
    StoreGrid
  },

  computed: {
    products() {
      return this.$store.getters['getMenProducts'];
    }
  }
};
</script>
