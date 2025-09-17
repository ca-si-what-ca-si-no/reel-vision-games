import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Lazy load all pages for better performance
const Index = lazy(() => import('@/pages/Index'));
const Keno = lazy(() => import('@/pages/Keno'));
const Crash = lazy(() => import('@/pages/Crash'));
const Hilo = lazy(() => import('@/pages/Hilo'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

// Wrap component with Suspense
const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: withSuspense(Index),
  },
  {
    path: '/keno',
    element: withSuspense(Keno),
  },
  {
    path: '/crash',
    element: withSuspense(Crash),
  },
  {
    path: '/hilo',
    element: withSuspense(Hilo),
  },
  {
    path: '*',
    element: withSuspense(NotFound),
  },
];