import { createBrowserRouter } from 'react-router';

import { authRoutes } from './auth';
import { productRoutes } from './product';

import { HomeLayout } from '../layouts/home-layout';

import Landing from '@/pages/landing';
import Cart from '@/pages/cart';
import About from '@/pages/about';
import Checkout from '@/pages/checkout';
import Order from '@/pages/order';
import Error from '@/pages/error';

import { loader as landingLoader } from '@/entities/product/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
        loader: landingLoader,
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
]);

export default router;
