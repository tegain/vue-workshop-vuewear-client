import axios from 'axios';
import { environment } from '@/environment';

const httpClient = axios.create({
  baseURL: environment.apiUrl
});

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

export class ProductsService {
  constructor() {
    this.http = httpClient;
  }

  /**
   * @return {Promise<Product[]>}
   * @throws {Error}
   */
  async fetchProducts() {
    const response = await this.http.get(`/products`);
    if (!response.data) {
      throw new Error(`Error fetching products`);
    }
    return response.data;
  }
}
