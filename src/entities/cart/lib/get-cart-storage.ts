import type { CartStoreState } from '../model/cart-store';
import { CART_STORAGE_KEY } from '../constants';

const DEFAULT_CART: CartStoreState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

export const getCartStorage = (): CartStoreState => {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  let cart: CartStoreState = DEFAULT_CART;

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      cart = parsed.state.cart;
    } catch (e) {
      console.error(`Failed to parse cart from ${CART_STORAGE_KEY}:`, e);
    }
  }

  return cart || DEFAULT_CART;
};
