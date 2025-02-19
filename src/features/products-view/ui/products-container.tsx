import { useLoaderData } from 'react-router';
import { LayoutGrid, List } from 'lucide-react';
import { useLayout } from '@/features/products-view/model';

import { Button, Separator } from '@/shared/shadcn-ui';
import type { ProductsResponse } from '@/shared/types';

import { ProductsList } from './products-list';
import { ProductsGrid } from './products-grid';

export const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;

  const { layout, toggleLayout } = useLayout();

  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md">
            {totalProducts} Product{totalProducts > 1 && 's'}
          </h4>
          <div className="flex gap-x-4">
            <Button
              onClick={toggleLayout}
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size="icon"
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={toggleLayout}
              variant={layout === 'list' ? 'default' : 'ghost'}
              size="icon"
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products matched your search ...</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
