import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<span></span>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    { path: '/', element: ( <DashboardLayout /> ), children: [ { element: <Dashboard />, index: true },],},
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}

const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));