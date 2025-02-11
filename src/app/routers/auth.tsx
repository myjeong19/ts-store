import { RouteObject } from 'react-router';

import Login from '@/pages/login';
import Register from '@/pages/register';

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
];
