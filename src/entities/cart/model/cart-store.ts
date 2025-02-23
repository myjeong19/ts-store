import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CartItem } from '../types';
import { CART_STORAGE_KEY } from '../constants';
import { toast } from 'sonner';
import { getCartStorage } from '../lib';

export type CartStoreActions = {
  addItem: (newItem: CartItem) => void;
  clearCart: () => void;
  removeItem: (cartId: string) => void;
  editItem: (cartId: string, amount: number) => void;
  calculateTotals: (state: CartState) => CartState;
};

export type CartStoreState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type CartState = {
  cart: CartStoreState;
} & CartStoreActions;

export const cartStore = createStore<CartState>()(
  persist(
    set => ({
      cart: getCartStorage(),

      addItem: (newItem: CartItem) =>
        set(({ cart, ...state }) => {
          const updatedItems = [...cart.cartItems];
          const existingItem = updatedItems.find(item => item.cartId === newItem.cartId);

          if (existingItem) {
            existingItem.amount += newItem.amount;
          } else {
            updatedItems.push(newItem);
          }

          const updatedCart = {
            ...cart,
            cartItems: updatedItems,
            numItemsInCart: cart.numItemsInCart + newItem.amount,
            cartTotal: cart.cartTotal + Number(newItem.price) * newItem.amount,
          };

          const updatedState = {
            cart: updatedCart,
            ...state,
          };

          toast.success('Added to cart');

          return state.calculateTotals(updatedState);
        }),

      clearCart: () =>
        set(() => ({
          cart: getCartStorage(),
        })),

      removeItem: (cartId: string) =>
        set(({ cart, ...state }) => {
          const updatedItems = cart.cartItems.filter(item => item.cartId !== cartId);
          const removedItem = cart.cartItems.find(item => item.cartId === cartId);

          if (!removedItem) return { cart, ...state };

          const updatedCart = {
            ...cart,
            cartItems: updatedItems,
            numItemsInCart: cart.numItemsInCart - removedItem.amount,
            cartTotal: cart.cartTotal - Number(removedItem.price) * removedItem.amount,
          };

          const updatedState = {
            cart: updatedCart,
            ...state,
          };

          toast.success('Item removed from cart');

          return state.calculateTotals(updatedState);
        }),

      editItem: (cartId: string, amount: number) =>
        set(({ cart, ...state }) => {
          const updatedItems = [...cart.cartItems];
          const itemToEdit = updatedItems.find(item => item.cartId === cartId);

          if (!itemToEdit) return { cart, ...state };

          const amountDiff = amount - itemToEdit.amount;
          itemToEdit.amount = amount;

          const updatedCart = {
            ...cart,
            cartItems: updatedItems,
            numItemsInCart: cart.numItemsInCart + amountDiff,
            cartTotal: cart.cartTotal + Number(itemToEdit.price) * amountDiff,
          };

          const updatedState = {
            cart: updatedCart,
            ...state,
          };

          toast.success('Cart updated');

          return state.calculateTotals(updatedState);
        }),

      calculateTotals: ({ cart, ...state }: CartState): CartState => {
        const tax = Number((0.1 * cart.cartTotal).toFixed(2));
        const orderTotal = Number((cart.cartTotal + cart.shipping + tax).toFixed(2));

        return {
          cart: {
            ...cart,
            tax,
            orderTotal,
          },
          ...state,
        };
      },
    }),
    {
      name: CART_STORAGE_KEY,
    }
  )
);
