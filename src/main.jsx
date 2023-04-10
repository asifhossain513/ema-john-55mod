import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inventory from './components/inventory/Inventory';
import Home from './components/layout/Home';
import LogIn from './components/login/LogIn';
import Orders from './components/orders/Orders';
import Shop from './components/Shop/Shop';
import cartProductsLoader from './loaders/CartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path:'/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'/login',
        element: <LogIn></LogIn>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)