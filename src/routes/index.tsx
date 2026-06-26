import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/portofolio', element: <Portfolio /> },
  { path: '*', element: <Home /> },
];
