import { useCartState } from '@/entities/cart/model';
import { Card } from '@/shared/shadcn-ui';

import { FirstColumn, SecondColumn, ThirdColumn, FourthColumn } from './cart-item-columns';

export const CartItemsList = () => {
  const { cartItems } = useCartState();

  return (
    <div>
      {cartItems.map(({ cartId, title, price, image, amount, company, productColor }) => (
        <Card key={cartId} className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-6">
          <FirstColumn image={image} title={title} />
          <SecondColumn company={company} productColor={productColor} title={title} />
          <ThirdColumn amount={amount} cartId={cartId} />
          <FourthColumn price={price} />
        </Card>
      ))}
    </div>
  );
};
