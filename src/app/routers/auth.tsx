import { RouteObject } from 'react-router';

import Login from '@/pages/login';
import Register from '@/pages/register/ui';
import Error from '@/pages/error';

import { action as registerActions } from '@/pages/register/api';

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
    action: registerActions,
  },
];
