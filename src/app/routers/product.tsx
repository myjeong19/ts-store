import { RouteObject } from 'react-router';

import SingleProduct from '@/pages/single-product/ui';
import Products from '@/pages/products/ui';

import { loader as productsLoader } from '@/pages/products/api';
import { loader as singleProductLoader } from '@/pages/single-product/api';

export const productRoutes: RouteObject[] = [
  {
    path: 'products',
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: ':id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
    ],
  },
];
