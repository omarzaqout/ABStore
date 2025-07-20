import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import { useDispatch } from "react-redux";
import cartSlice from "./features/cart/cartSlice";

// const persistProductConfig = {
//   key: "product",
//   storage,
// };
// const persistCartConfig = {
//   key: "cart",
//   storage,
// };

// const persistedProductReducer = persistReducer(
//   persistProductConfig,
//   productSlice
// );
// const persistedCartReducer = persistReducer(persistCartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
