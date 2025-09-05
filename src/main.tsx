import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router/dom";
import { z } from 'zod';
import { pt } from 'zod/locales';

import { router } from './routes';
import store from './state/store';

import './main.css';


z.config(pt());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
