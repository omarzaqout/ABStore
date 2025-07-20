export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
}

export interface cartItemsState {
  cartItems: Product[];
  totalPrice: number;
  totalItems: number;
  isLoading: boolean;
}
