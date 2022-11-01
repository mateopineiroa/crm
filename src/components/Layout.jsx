import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'       //Link similar que NavLink      

const Layout = () => {
  const location = useLocation()
  /* 
    location tiene la informacion de la url. (Variables: "$variable=20", Hash: Sub partes de una pagina"#subsection")
  */
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Cliente</h2>

        <nav className='mt-10'>
          <Link className={`${location.pathname === "/" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300 `} to="/">Clientes</Link>
          <Link className={`${location.pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300 `} to="/clientes/nuevo">Nuevo Cliente</Link>
          {/* <NavLink 
            className={(isActive) => isActive ? "text-blue-300" : "text-white"}
            to="/"
          >
              Opcion
          </NavLink> */}
        </nav>
      </aside>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll my-3'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
