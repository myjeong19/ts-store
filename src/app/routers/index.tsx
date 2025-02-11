import { RouteObject, useRoutes } from 'react-router';

import { authRoutes } from './auth';
import { productRoutes } from './product';

import { HomeLayout } from '../layouts/home-layout';

import Landing from '@/pages/home';
import Cart from '@/pages/cart';
import About from '@/pages/about';
import Checkout from '@/pages/checkout';
import Order from '@/pages/order';

function Routers() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        ...productRoutes,
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'order',
          element: <Order />,
        },
      ],
    },

    ...authRoutes,
  ];
  const element = useRoutes(routes);
  return element;
}

export default Routers;
