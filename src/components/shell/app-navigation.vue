<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/men">Hommes</router-link></li>
      <li><router-link to="/women">Femmes</router-link></li>
      <li><router-link to="/cart">Panier</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
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
