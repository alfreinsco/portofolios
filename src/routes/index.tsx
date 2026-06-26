import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Kelola from '../pages/Kelola';

export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/kelola', element: <Kelola /> },
  { path: '*', element: <Home /> },
];
