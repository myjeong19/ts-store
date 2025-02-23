import { useStore } from 'zustand';
import { cartStore } from './cart-store';

const useCartItems = () => useStore(cartStore, state => state.cart.cartItems);
const useNumItemsInCart = () => useStore(cartStore, state => state.cart.numItemsInCart);
const useCartTotal = () => useStore(cartStore, state => state.cart.cartTotal);
const useCartShipping = () => useStore(cartStore, state => state.cart.shipping);
const useCartTax = () => useStore(cartStore, state => state.cart.tax);
const useCartOrderTotal = () => useStore(cartStore, state => state.cart.orderTotal);

export const useCartState = () => {
  return {
    cartItems: useCartItems(),
    numItemsInCart: useNumItemsInCart(),
    cartTotal: useCartTotal(),
    shipping: useCartShipping(),
    tax: useCartTax(),
    orderTotal: useCartOrderTotal(),
  };
};
