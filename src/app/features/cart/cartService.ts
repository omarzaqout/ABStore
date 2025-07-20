import {
  arrayRemove,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { Product } from "./types";

// Helpers for LocalStorage
const CART_KEY = 'abstore_cart';
const getCartFromLS = () => {
  try {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return { cart: [], totalPrice: 0, totalItems: 0 };
    return JSON.parse(data);
  } catch {
    return { cart: [], totalPrice: 0, totalItems: 0 };
  }
};
const saveCartToLS = (cart: Product[], totalPrice: number, totalItems: number) => {
  localStorage.setItem(CART_KEY, JSON.stringify({ cart, totalPrice, totalItems }));
};

export const addToCartInFirebase = async (
  cartItems: Product[] | Product,
  userId: string,
  mode: "increment" | "replace" = "increment"
) => {
  let { cart, totalPrice, totalItems } = getCartFromLS();
  const itemsToUpdate = Array.isArray(cartItems) ? cartItems : [cartItems];
  itemsToUpdate.forEach((newItem: Product) => {
    const existingIndex = cart.findIndex((item: Product) => item.id === newItem.id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity =
        mode === "increment"
          ? (cart[existingIndex].quantity || 1) + (newItem.quantity || 1)
          : newItem.quantity || 1;
    } else {
      cart.push({ ...newItem });
    }
  });
  totalPrice = cart.reduce((total: number, item: Product) => total + item.price * (item.quantity || 1), 0);
  totalItems = cart.reduce((total: number, item: Product) => total + (item.quantity || 1), 0);
  saveCartToLS(cart, totalPrice, totalItems);
};

export const getCartFromFirebase = async (userId: string) => {
  const { cart, totalPrice, totalItems } = getCartFromLS();
  return {
    cartItems: cart,
    totalPrice,
    totalItems,
  };
};

export const removeFromCartInFirebase = async (
  product: Product,
  userId: string
) => {
  let { cart, totalPrice, totalItems } = getCartFromLS();
  cart = cart.filter((item: Product) => item.id !== product.id);
  totalPrice = cart.reduce((total: number, item: Product) => total + item.price * (item.quantity || 1), 0);
  totalItems = cart.reduce((total: number, item: Product) => total + (item.quantity || 1), 0);
  saveCartToLS(cart, totalPrice, totalItems);
};
