import { environment } from '@/environment';

export const pictureUrl = {
  computed: {
    pictureUrl() {
      if (!this.product) {
        return;
      }
      return `${environment.apiUrl}${this.product.pictureUrl}`;
    }
  }
};
