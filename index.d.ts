/**
 * @typedef {Object} Product
 *
 * @property {string} _id
 * @property {string} name
 * @property {string} description
 * @property {string} review
 * @property {string} pictureUrl
 * @property {number} rating
 * @property {number} price
 * @property {'Male'|'Female'} gender
 */
export interface Product {
  _id: string;
  name: string;
  description: string;
  review: string;
  pictureUrl: string;
  rating: number;
  price: number;
  gender: 'Male' | 'Female';
}

/**
 * @typedef {Object} ItemQuantity
 * @property {number} quantity
 * @typedef {Product & ItemQuantity} CartItem
 */
export interface CartItem extends Product {
  quantity: number;
}

/**
 * @typedef {CartItem[]} Cart
 */
export type Cart = CartItem[];

/**
 * @typedef {Object} State
 *
 * @property {Product[]} products
 * @property {CartItem[]} cart
 */
export interface State {
  products: Product[];
  cart: Cart;
}
