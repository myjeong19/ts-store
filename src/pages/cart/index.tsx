import { Link } from 'react-router';
import { Button } from '@/shared/shadcn-components/button';

const Cart = () => (
  <div>
    <h1>Cart</h1>
    <Link to="/" className="text-7xl text-red-900">
      back home
    </Link>

    <div>
      <Button asChild size="lg">
        <Link to="/">home button</Link>
      </Button>
    </div>
  </div>
);

export default Cart;
