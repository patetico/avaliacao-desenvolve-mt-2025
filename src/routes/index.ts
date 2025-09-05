import { lazy } from 'react';
import { createBrowserRouter, createHashRouter, redirect } from 'react-router';

import Default from './layouts/default';


const createRouter = !import.meta.env.VITE_USE_HASH_ROUTER?.trim() ? createBrowserRouter : createHashRouter;

export const router = createRouter([
  {
    Component: Default,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: lazy(() => import('./pages/frontPage.tsx')) }),
      },
      {
        path: '/pessoa/:id',
        loader: async ({ params: { id = '' } }) => {
          if (!/^\d+$/.test(id)) return redirect('/');
          const idInt = parseInt(id, 10);
          return { id: idInt };
        },
        lazy: async () => ({ Component: lazy(() => import('./pages/pessoaDesaparecida.tsx')) }),
      },
    ],
  },
  { path: '*?', loader: () => redirect('/') },
]);
