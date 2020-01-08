<template>
  <div class="women">
    <div class="container">
      <store-grid :products="products" title="Femmes" />
    </div>
  </div>
</template>

<script>
import StoreGrid from '@/components/shop/store-grid';

export default {
  name: 'Women',

  components: {
    StoreGrid
  },

  computed: {
    products() {
      return this.$store.getters['getWomenProducts'];
    }
  }
};
</script>
