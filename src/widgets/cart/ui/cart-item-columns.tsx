import { useCartActions } from '@/entities/cart/model';
import { formatAsDollars } from '@/entities/product/lib';
import { Button } from '@/shared/shadcn-ui';
import { SelectAmount, Mode } from '@/entities/product-purchase/ui';

export const FirstColumn = ({ image, title }: { image: string; title: string }) => {
  return (
    <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover" />
  );
};

export const SecondColumn = ({
  title,
  company,
  productColor,
}: {
  title: string;
  company: string;
  productColor: string;
}) => {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="capitalize font-medium">{title}</h3>
      <h4 className="mt-2 capitalize text-sm">{company}</h4>
      <p className="mt-4 text-sm capitalize flex items-center gap-x-2 ">
        color :{' '}
        <span
          style={{
            width: '15px',
            height: '15px',
            backgroundColor: productColor,
            borderRadius: '50%',
          }}
        />
      </p>
    </div>
  );
};

export const ThirdColumn = ({ amount, cartId }: { amount: number; cartId: string }) => {
  const { removeItem, editItem } = useCartActions();

  const setAmount = (value: number) => editItem(cartId, value);

  const removeItemFromCart = () => removeItem(cartId);

  return (
    <div>
      <SelectAmount mode={Mode.CartItem} amount={amount} setAmount={setAmount} />
      <Button variant="link" className="-ml-4" onClick={removeItemFromCart}>
        Remove
      </Button>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: string }) => {
  return <p className="font-medium sm:ml-auto">{formatAsDollars(price)}</p>;
};
