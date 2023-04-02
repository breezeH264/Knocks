import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { store } from './app/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Layout from './layout/Layout';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/products/' element={<AllProducts />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/products/:productId' element={<ProductPage />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster position='bottom-left' reverseOrder={false} />
  </React.StrictMode>
);
