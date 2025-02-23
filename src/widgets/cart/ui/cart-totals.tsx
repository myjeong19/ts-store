import { useCartState } from '@/entities/cart/model';
import { formatAsDollars } from '@/entities/product/lib';
import { Card, CardTitle, Separator } from '@/shared/shadcn-ui';

export const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useCartState();

  return (
    <Card className="p-8 bg-muted">
      <Separator />
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CartTotalRow label="Total" amount={orderTotal} lastRow />
      <CardTitle className="mt-8">
        <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
};

type CartTotalRowProps = {
  label: string;
  amount: number;
  lastRow?: boolean;
};

const CartTotalRow = ({ label, amount, lastRow }: CartTotalRowProps) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
};
