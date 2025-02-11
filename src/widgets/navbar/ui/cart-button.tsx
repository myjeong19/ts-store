import { LinkButton } from '@/shared/ui';
import { ShoppingCart } from 'lucide-react';

export const CartButton = () => {
  const NUM_ITEMS_IN_CART = 5;

  return (
    <LinkButton
      to="/cart"
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <ShoppingCart />
      <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
        {NUM_ITEMS_IN_CART}
      </span>
    </LinkButton>
  );
};
