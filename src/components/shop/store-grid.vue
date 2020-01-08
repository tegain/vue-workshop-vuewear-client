<template>
  <div class="store-grid" v-if="products.length > 0">
    <template v-if="filteredProducts.length > 0">
      <transition-group name="items" tag="div" class="content">
        <product-card
          v-for="product in filteredProducts"
          :key="product._id"
          :product="product"
        />
      </transition-group>
    </template>
    <div v-else class="empty-message">Pas de produits correspondant</div>
    <div class="aside">
      <div style="margin-bottom: 4rem">
        <h2 v-if="title">{{ title }}</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        doloribus esse nihil nisi pariatur qui quidem. Aperiam eius laudantium
        perferendis. Asperiores magni minima nesciunt porro? Aliquam
        perspiciatis quae sequi temporibus!
      </div>

      <h3>Filtrer par prix :</h3>
      <p style="margin-top: 5px">
        Prix max
        <strong>{{ pricerange }} €</strong>
      </p>
      <input
        v-model="pricerange"
        type="range"
        :min="min"
        :max="max"
        class="slider"
      />
      <span class="min">{{ min }} €</span>
      <span class="max">{{ max }} €</span>
    </div>
  </div>
  <div v-else class="loading-message">Chargement des produits...</div>
</template>

<script>
import ProductCard from '@/components/shop/product-card';

export default {
  name: 'StoreGrid',

  props: {
    products: {
      type: Array,
      default: () => []
    },
    title: {
    	type: String,
      default: null
    }
  },

  components: {
    ProductCard
  },

  data() {
    return {
      min: 0,
      max: 200,
      pricerange: 200
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter(p => p.price <= this.pricerange);
    }
  }
};
</script>

<style lang="scss" scoped>
.store-grid {
  width: 95%;
  display: flex;
  justify-content: space-between;
}

.aside {
  width: 25%;

  h2 {
    margin-bottom: 3rem;
  }
}

.content {
  flex: 1;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 6rem 0 0;

  > * {
    padding: 0 1rem;
    margin-bottom: 5rem;
  }
}

.max {
  display: inline-block;
  float: right;
}

.empty-message,
.loading-message {
  width: 75%;
  text-align: center;
  color: darken($color-grey, 10%);
}
</style>
