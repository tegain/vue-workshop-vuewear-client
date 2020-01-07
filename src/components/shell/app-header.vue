<template>
  <div class="header">
    <div class="container">
      <h1>
        <router-link to="/">VueWear</router-link>
      </h1>
      <app-navigation />
    </div>
  </div>
</template>

<script>
import AppNavigation from '@/components/shell/app-navigation';

export default {
  name: 'AppHeader',

  components: {
    AppNavigation
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 4rem 4rem 0;
  text-align: center;
}

h1 {
  margin: 4rem auto;

  a {
    color: inherit;
  }
}
</style>
