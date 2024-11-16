import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Dashboard';
import ProductsView from './pages/ProductsView';
import OrdersView from './pages/OrdersView';
import { OverviewAnalyticsView } from './pages/OverviewAnalyticsView';
import { BlogView } from './pages/BlogView';
import { NotFoundView } from './pages/NotFoundView';
import { HelmetProvider } from 'react-helmet-async';
import { UserView } from './pages/UserView';
import { CustomerView } from './pages/CustomerView';
import UserForm , { loader as userLoader }from './pages/UserForm';
import SignInView from './pages/SignInView';
import CustomerForm  from './pages/CustomerForm';


const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '',
        Component: Layout,
        children: [
          {
            path: '',
            Component: OverviewAnalyticsView,
          },
          {
            path: 'orders',
            Component: OrdersView,
          },
          {
            path: 'products',
            Component: ProductsView,
          },
          {
            path: 'customers',
            Component: CustomerView,
          },
          {
            path: 'blogs',
            Component: BlogView,
          },
          {
            path: 'users',
            Component: UserView,
          },
          {
            path: 'user-form',
            Component: UserForm,
          },
          {
            path: 'edit-user/:id',
            Component: UserForm,
            loader: userLoader

          },
          {
            path: 'customer-form',
            Component: CustomerForm,
          },
          {
            path: '*',
            Component: NotFoundView
          }
        ]
      },
      {
        path: '/sign-in',
        Component: SignInView
      },
      {
        path: '*',
        Component: NotFoundView
      }
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider >
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
