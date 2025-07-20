export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  quantity?: number;
}
export interface ProductState {
  products: Product[];
  categoryCount: Record<string, number>;
  loading: boolean;
}
