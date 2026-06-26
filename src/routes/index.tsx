import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '*', element: <Home /> },
];
