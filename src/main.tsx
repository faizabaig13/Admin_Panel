import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './pages/form'
import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import './satoshi.css';
import Password from './pages/password';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Form/>,
  },
  {
    path: "/password",
    element: <Password/>,
  },
  {
    path: "/form",
    element: <Form/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Home/>
  </React.StrictMode>
);
