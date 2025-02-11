import { RouterProvider, createBrowserRouter } from 'react-router';

import { authRoutes } from './auth';
import { productRoutes } from './product';

import { HomeLayout } from '../layouts/home-layout';

import Landing from '@/pages/home';
import Cart from '@/pages/cart';
import About from '@/pages/about';
import Checkout from '@/pages/checkout';
import Order from '@/pages/order';
import Error from '@/pages/error';

function Routers() {
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

  return <RouterProvider router={router} />;
}

export default Routers;
