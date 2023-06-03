import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // Este  arreglo de childrens es el que se va a renderar dinamicamente dentro del componente Outlet
    children: [
      {
        index: true, // Este va a a ser el children base que se va a renderear cuando vaya a la route '/'
        element: <Home />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
