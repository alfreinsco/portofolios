import { renderToString } from 'react-dom/server';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export function render(route: string) {
  const page = route === '/portofolio' ? <Portfolio /> : <Home />;
  return renderToString(page);
}
