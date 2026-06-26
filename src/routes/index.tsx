import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Portfolio from '../pages/Portfolio';

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/portofolio', element: <Portfolio /> },
  { path: '*', element: <Home /> },
];
