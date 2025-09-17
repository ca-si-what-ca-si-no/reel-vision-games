import { BrowserRouter, useRoutes } from 'react-router-dom';
import { AppProvider } from '@/providers/AppProvider';
import { routes } from '@/router/routes';
import { ErrorBoundary } from '@/components/ErrorBoundary';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

const App = () => (
  <ErrorBoundary>
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  </ErrorBoundary>
);

export default App;
