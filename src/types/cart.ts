export interface CartItem {
  id: string;
  name: string;
  shortName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
