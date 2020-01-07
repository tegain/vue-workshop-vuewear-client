<template>
  <div class="product-card">
    <img class="product-picture" :src="pictureUrl" :alt="product.title" />

    <h4>{{ product.title }}</h4>

    <star-rating
      :rating="product.rating"
      active-color="#000"
      :star-size="15"
      :show-rating="false"
      style="margin: 5px auto"
      read-only
    />

    <div class="price">{{ product.price | price }}</div>

    <router-link
      :to="{ name: 'product', params: { id: product._id } }"
      class="button"
    >
      Détails >
    </router-link>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating/src/star-rating';
import { environment } from '@/environment';

export default {
  name: 'ProductCard',

  components: {
    StarRating
  },

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    pictureUrl() {
      return `${environment.apiUrl}${this.product.pictureUrl}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  flex: 1 0 30%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.product-picture {
  max-width: 100%;
  max-height: 250px;
}

.button {
  display: inline-block;
  margin-top: 2rem;
}

.vue-star-rating {
  text-align: center;
}
</style>
