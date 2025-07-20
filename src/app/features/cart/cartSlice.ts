import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartItemsState } from "./types";
import { Product } from "../product/types";
import { RootState } from "../../store";
import {
  addToCartInFirebase,
  getCartFromFirebase,
  removeFromCartInFirebase,
} from "./cartService";

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({
    cartItems,
    userId,
    mode = "increment",
  }: {
    cartItems: Product[];
    userId: string;
    mode?: "increment" | "replace";
  }) => {
    const normalizedCartItems = cartItems.map((item) => ({
      ...item,
      quantity: item.quantity ?? 1,
    }));
    await addToCartInFirebase(normalizedCartItems, userId, mode);
    return cartItems;
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId: string) => {
    const cart = await getCartFromFirebase(userId);
    return cart;
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ product, userId }: { product: Product; userId: string }) => {
    await removeFromCartInFirebase(
      { ...product, quantity: product.quantity ?? 0 },
      userId
    );
    return product;
  }
);

const initialState: cartItemsState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
  isLoading: false,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.cartItems = action.payload.cartItems || [];
          state.totalPrice = action.payload.totalPrice || 0;
          state.totalItems = action.payload.totalItems || 0;
          state.isLoading = false;
        }
      })
      .addCase(fetchCart.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(saveCart.fulfilled, (state, action) => {
        action.payload.forEach((newItem) => {
          const existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === newItem.id
          );

          if (existingItemIndex !== -1) {
            state.cartItems[existingItemIndex].quantity = newItem.quantity ?? 1;
          } else {
            state.cartItems.push({
              ...newItem,
              quantity: newItem.quantity ?? 1,
            });
          }
        });

        state.totalItems = state.cartItems.reduce(
          (total, item) => total + (item.quantity ?? 0),
          0
        );

        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + (item.quantity ?? 0) * item.price,
          0
        );

        state.isLoading = false;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalItems = state.cartItems.reduce(
          (total, item) => total + (item.quantity ?? 0),
          0
        );
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + (item.quantity ?? 0) * item.price,
          0
        );
      });
  },
});

export const cartSelector = ({ cart }: RootState) => cart;

export default cartItemsSlice.reducer;
