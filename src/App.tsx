import { BrowserRouter, useRoutes } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { AppProvider } from '@/providers/AppProvider';
import { routes } from '@/router/routes';

function AppRoutes() {
  return useRoutes(routes);
}

const App = () => (
  <ErrorBoundary>
    <AppProvider>
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/reel-vision-games' : ''}>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  </ErrorBoundary>
);

export default App;
