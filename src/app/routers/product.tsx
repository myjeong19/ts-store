import { RouteObject } from 'react-router';

import SingleProduct from '@/pages/single-product';
import Products from '@/pages/products';

export const productRoutes: RouteObject[] = [
  {
    path: 'products',
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ':id',
        element: <SingleProduct />,
      },
    ],
  },
];
