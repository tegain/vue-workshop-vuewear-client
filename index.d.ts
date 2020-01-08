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

export interface CartItem extends Product {
  quantity: number;
}

export type Cart = CartItem[];

export interface State {
  products: Product[];
  cart: Cart;
}
