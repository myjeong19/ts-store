import { useCartState } from '@/entities/cart/model';
import { ButtonLink } from '@/shared/ui';
import { ShoppingCart } from 'lucide-react';

export const CartButton = () => {
  const { cartItemsCount } = useCartState();

  return (
    <ButtonLink
      to="/cart"
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <ShoppingCart />
      <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
        {cartItemsCount}
      </span>
    </ButtonLink>
  );
};
