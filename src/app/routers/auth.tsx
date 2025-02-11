import { RouteObject } from 'react-router';

import Login from '@/pages/login';
import Register from '@/pages/register';
import Error from '@/pages/error';

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
  },
];
