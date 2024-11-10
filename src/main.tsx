import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Layout from './layouts/Dashboard';
import DashboardPage from './pages/index';
import OrdersPage from 'src/pages/OrdersView';
// import ProductsPage from './pages/ProductsView';
import ProductsView from './pages/ProductsView';
import { OverviewAnalyticsView } from './pages/OverviewAnalyticsView';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: OverviewAnalyticsView,
          },
          {
            path: 'orders',
            Component: ProductsView,
          },
          // {
          //   path: 'products',
          //   Component: ProductsPage,
          // },
          {
            path: 'products',
            Component: ProductsView,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
