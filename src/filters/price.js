import Vue from 'vue';

/**
 * @param {number} value
 * @return {string|*}
 */
export const priceFilter = value => {
  if (!value || typeof value !== 'number') {
    return value;
  }
  return `${value.toFixed(2)} €`;
};

Vue.filter('price', priceFilter);
