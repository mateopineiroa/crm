import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"      //createBrowserRouter: Definir router por medio de objetos. RouterProvider: Componente padre de la aplicacion.
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'


const router = createBrowserRouter([
  /* Arreglo de rutas */
  {
    path: "/",
    element:  <Layout />,         //Lo que pongo en el element de cada children, se va a injectar en el Outlet de el padre, <Layout /> 
    children: [
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente /> 
      }
    ]
  },
  {
    path: "/nosotros",
    element: <h1>Nosotros</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
