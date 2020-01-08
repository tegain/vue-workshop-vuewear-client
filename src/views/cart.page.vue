<template>
  <div class="cart">
    <div class="container">
      <h1>Mon panier</h1>

      <div v-if="cartEmpty" class="cart-empty">
        <h4>
          Le panier est vide
        </h4>

        <p>
          <router-link to="/" class="button">Ajouter des produits</router-link>
        </p>
      </div>

      <table v-else>
        <thead>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
        </thead>

        <tbody>
          <tr v-for="item in cart" :key="item._id">
            <td>
              <div class="product-info">
                <img
                  :src="pictureUrl(item)"
                  :alt="item.name"
                  height="140"
                  class="product-img"
                />
                <h3>{{ item.name }}</h3>
              </div>
            </td>
            <td>
              <div class="price">{{ item.price | price }}</div>
            </td>
            <td>{{ item.quantity }}</td>
            <td>
              <div class="price price-total">
                {{ (item.quantity * item.price) | price }}
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="3" style="text-align: right">
              <button class="button" @click="clearCart">Vider le panier</button>
            </td>
            <td>
              <div class="price cart-total">
                {{ cartTotal | price }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { environment } from '@/environment';

export default {
  name: 'Cart',

  computed: {
    /** @type {CartItem[]} */
    cart() {
      return this.$store.state.cart;
    },

    cartTotal() {
      return this.$store.getters['getCartTotal'];
    },

    cartEmpty() {
      return this.cart.length === 0;
    }
  },

  methods: {
    pictureUrl(product) {
      if (!product) {
        return;
      }
      return `${environment.apiUrl}${product.pictureUrl}`;
    },

    clearCart() {
      this.$store.commit('clearCart');
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  margin-bottom: 4rem;
}

h1 {
  margin-bottom: 4rem;
  text-align: center;
}

table {
  width: 100%;
  margin-top: 2rem;
}

tr {
  text-align: center;
}

th {
  padding: 1rem 0;
  background: lighten($color-grey, 10%);
}

td,
th {
  border-bottom: 1px solid $color-grey;
}

td {
  width: 20%;

  &:first-child {
    width: 40%;
  }
}

.product-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-right: 3rem;
  }
}

.price-total {
  font-weight: bold;
}

.cart-total {
  font-size: 4.2rem;
}

.cart-empty {
  text-align: center;

  h4 {
    color: #aaa;
  }

  p {
    margin-top: 4rem;
  }
}
</style>
