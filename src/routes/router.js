import MovieDetails from '../components/MovieDetails';
import MoviesList from '../components/MoviesList';
import About from '../components/About';
import FavoriteMoviesList from '../components/FavoriteMoviesList';
import Contact from '../components/Contact';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

import { tokenLoader } from '../util/auth';
import { action as logoutAction } from '../pages/Logout';
import AuthenticationPage, {
  action as authAction,
} from '../pages/AuthenticationPage';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      id: 'root',
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <MoviesList />
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: '/details',
          element: <MovieDetails />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/favorite-list',
          element: <FavoriteMoviesList />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: 'logout',
          action: logoutAction,
        },
      ],
    },
  ]);