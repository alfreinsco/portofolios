import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import VisitorTracker from './components/VisitorTracker';

export default function App() {
  const element = useRoutes(routes);

  return (
    <>
      <VisitorTracker />
      {element}
    </>
  );
}
