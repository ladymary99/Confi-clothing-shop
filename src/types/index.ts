export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'jeans' | 'shorts' | 'jackets';
}

export interface CartItem extends Product {
  quantity: number;
}