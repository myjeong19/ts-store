import Home from '@/pages/home';
import { RouteObject, useRoutes } from 'react-router';

function Routers() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
  ];
  const element = useRoutes(routes);
  return element;
}

export default Routers;
