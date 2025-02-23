import { useCartState } from '@/entities/cart/model';
import { ButtonLink, SectionTitle } from '@/shared/ui';

import { CartItemsList, CartTotals } from '@/widgets/cart/ui';

const Cart = () => {
  const user = null;

  const { numItemsInCart } = useCartState();

  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty cart" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <ButtonLink className="mt-8 w-full" to="/checkout" variant="default">
              Proceed to checkout
            </ButtonLink>
          ) : (
            <ButtonLink className="mt-8 w-full" to="/login" variant="default">
              Login
            </ButtonLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
