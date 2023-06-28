import React, { createContext, useContext } from "react";
import { create } from "zustand";

const initialCartState = [];

export const CartContext = createContext();

const useCartStore = create((set) => ({
  cart: initialCartState,
  addCartItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeCartItem: (itemId) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
}));

export default function CartProvider ({ children }) {
  const cartStore = useCartStore();

  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext };
