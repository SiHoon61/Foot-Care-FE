import { PrivateRoute } from 'views/components/PrivateRoute';
import { Signin } from 'views/pages/Signin.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { MainPanel } from 'views/layouts/MainPanel';
import { ErrorPage } from 'views/pages/ErrorPage';
import { Home } from 'views/pages/Home';

const AppRouter = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <MainPanel />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export { AppRouter };