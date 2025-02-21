import { useLoaderData } from 'react-router';
import { SingleProductResponse } from '../api';
import { formatAsDollars } from '@/entities/product/lib';
import { useState } from 'react';
import { ButtonLink } from '@/shared/ui';
import { Button, Separator } from '@/shared/shadcn-ui';
import { SelectAmount, SelectColor } from '@/entities/product-purchase/ui';

import { Mode } from '@/entities/product-purchase/ui';

const SingleProduct = () => {
  const {
    data: {
      attributes: { image, title, price, description, colors, company },
    },
  } = useLoaderData() as SingleProductResponse;

  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    console.log('add to cart');
  };

  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <ButtonLink variant="link" size="sm" to="/">
          Home
        </ButtonLink>
        <Separator orientation="vertical" />
        <ButtonLink variant="link" size="sm" to="/products">
          Products
        </ButtonLink>
      </div>

      <div className="mt-6 grid gapy-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className="w-96 h-96 object-cover rounded-lg lg:w-full" />

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <SelectColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          <SelectAmount mode={Mode.SingleProduct} amount={amount} setAmount={setAmount} />

          <Button size="lg" className="mt-10" onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
