import axios from 'axios';
import { environment } from '@/environment';

const httpClient = axios.create({
  baseURL: environment.apiUrl
});

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
