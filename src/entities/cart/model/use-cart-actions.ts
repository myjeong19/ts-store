import { useStore } from 'zustand';
import { cartStore } from './cart-store';

const useAddItem = () => useStore(cartStore, state => state.addItem);
const useEditItem = () => useStore(cartStore, state => state.editItem);
const useRemoveItem = () => useStore(cartStore, state => state.removeItem);
const useClearCart = () => useStore(cartStore, state => state.clearCart);

export const useCartActions = () => {
  return {
    addItem: useAddItem(),
    editItem: useEditItem(),
    removeItem: useRemoveItem(),
    clearCart: useClearCart(),
  };
};
