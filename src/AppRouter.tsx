import { PrivateRoute } from 'views/components/PrivateRoute';
import { Signin } from 'views/pages/Signin.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { MainPanel } from 'views/layouts/MainPanel';
import { ErrorPage } from 'views/pages/ErrorPage';
import { Home } from 'views/pages/Home';
import { Signup } from 'views/pages/Signup';
import { Survey } from 'views/pages/Survey';

const AppRouter = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
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
      {
        path: '/survey',
        element: <Survey />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export { AppRouter };
