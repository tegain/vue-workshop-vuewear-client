<template>
  <div v-if="product" class="product">
    <div class="container">
      <section class="product-inner">
        <section class="product-picture">
          <img :src="pictureUrl" :alt="product.name" />
        </section>
        <section class="product-info">
          <h1>{{ product.name }}</h1>

          <star-rating
            :rating="product.rating"
            :star-size="15"
            :show-rating="false"
            read-only
            active-color="#000"
            style="margin: 5px 0"
          />
          <h4 class="price">{{ product.price | price }}</h4>
          <p>{{ product.description }}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            velit dolores repudiandae animi quidem, eveniet quod dolor facilis
            dicta eligendi ullam error. Assumenda in fugiat natus enim similique
            nam itaque.
          </p>
          <p class="quantity">
            <button class="update-quantity" @click="decrementQuantity">
              -
            </button>
            <input type="number" v-model="quantity" />
            <button class="update-quantity" @click="incrementQuantity">
              +
            </button>
          </p>

          <p>
            <button class="button purchase" @click="addToCart">
              Ajouter au panier
            </button>
          </p>
        </section>
      </section>
      <hr />
      <div class="review">
        <h2>Avis</h2>
        <star-rating
          :rating="product.rating"
          active-color="#000"
          :star-size="15"
          :show-rating="false"
          read-only
          style="margin: 5px 0"
        />
        <p>{{ product.review }}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto
          placeat consequatur voluptas sit mollitia ratione autem, atque sequi
          odio laborum, recusandae quia distinctio voluptatibus sint, quae
          aliquid possimus exercitationem.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating/src/star-rating';
import { pictureUrl } from '@/mixins/picture-url.mixin';

export default {
  name: 'Product',

  mixins: [pictureUrl],

  components: {
    StarRating
  },

  computed: {
    /** @type {Product} */
    product() {
      return this.$store.getters['getProductById'](this.$route.params.id);
    }
  },

  data() {
    return {
      quantity: 1
    };
  },

  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      this.quantity > 0 ? this.quantity-- : (this.quantity = 0);
    },
    addToCart() {
      const item = { ...this.product };
      item.quantity = this.quantity;
      this.$store.commit('addToCart', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-inner {
  display: flex;
  margin-left: 8%;
  width: 80%;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}

.product-picture {
  width: 25%;

  img {
    max-width: 100%;
  }
}

.product-info {
  width: 75%;
}

input {
  width: 60px;
  font-size: 25px;
  margin: 0 10px;
  padding: 5px 10px;
}

.update-quantity {
  background: #000;
  border-color: #000;
  color: #fff;
  font-size: 20px;
  width: 45px;

  &:hover {
    background: #333;
    border-color: #333;
  }
}

.quantity {
  display: flex;
}

.purchase {
  padding: 2rem 4rem;
  background: $color-secondary;
  border-color: $color-secondary;
  color: #fff;
  font-size: 1.8rem;

  &:hover {
    background: darken($color-secondary, 5%);
    border-color: darken($color-secondary, 5%);
  }
}
</style>
