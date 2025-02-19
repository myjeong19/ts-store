import { RouteObject } from 'react-router';

import SingleProduct from '@/pages/single-product';
import Products from '@/pages/products/ui';

import { loader as productsLoader } from '@/pages/products/api';

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
      },
    ],
  },
];
