<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/men">Hommes</router-link></li>
      <li><router-link to="/women">Femmes</router-link></li>
      <li>
        <router-link to="/cart">
          <div class="cart-total" v-if="cartCount > 0">{{ cartCount }}</div>
          Panier
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',

  computed: {
    cartCount() {
      return this.$store.getters['getCartCount'];
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: block;
  padding-top: 3rem;
}

ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1rem;
  list-style: none;
  border-top: 1px solid $color-grey;
  border-bottom: 1px solid $color-grey;
}

li {
  position: relative;
}

.cart-total {
  position: absolute;
  top: -1.5rem;
  right: 0.5rem;
  background: #000;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  padding: 6px 10px;
  font-weight: bold;
}

a {
  color: #000;
  font-size: 1.4rem;
  display: inline-block;
  padding: 0 3rem;
  margin: 0 2px;
  border-left: 1px solid $color-grey;
  border-right: 1px solid $color-grey;

  &.router-link-exact-active,
  &:hover {
    color: $color-primary;
  }
}
</style>
