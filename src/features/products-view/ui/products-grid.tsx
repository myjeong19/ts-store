import { Link, useLoaderData } from 'react-router';
import { Card, CardContent } from '@/shared/shadcn-ui';

import { formatAsDollars } from '@/entities/product/lib';
import type { ProductsResponse } from '@/shared/types';

export const ProductsGrid = () => {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map(({ id, attributes: { title, price, image } }) => {
        const dollarsAmount = formatAsDollars(price);

        return (
          <Link key={id} to={String(id)}>
            <Card>
              <CardContent className="p-4">
                <img src={image} alt={title} className="md:h-48 w-full rounded-md object-cover" />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="text-primary md:ml-auto">{dollarsAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
