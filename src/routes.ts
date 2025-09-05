import { lazy } from 'react';
import { createBrowserRouter, createHashRouter, redirect } from 'react-router';


const createRouter = !import.meta.env.VITE_USE_HASH_ROUTER?.trim() ? createBrowserRouter : createHashRouter;

export const router = createRouter([
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
    // /* TODO */ lazy: async () => ({ Component: lazy(() => import('./pages/pessoaDesaparecida')) }),
  },
  { path: '*?', loader: () => redirect('/') },
]);
