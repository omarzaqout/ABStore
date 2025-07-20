import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "./types";
import { getProduct } from "./productService";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const products = await getProduct();
    return products;
  }
);

const initialState: ProductState = {
  products: [],
  categoryCount: {},
  loading: false,
};

const CalculateCategoryCount = (products: Product[]) => {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
          state.categoryCount = CalculateCategoryCount(action.payload);
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default productSlice.reducer;
