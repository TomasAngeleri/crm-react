import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md: w-1/4 bg-blue-500 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
      </aside>
      <main className='md:w-3/4 p-10 md-h-screen overflow-scroll'>
        <Outlet />
      </main>
      {/* Este componente Outlet va actuar como contenedor dinamico
      Todo lo dinamico que le pase al Layout se va a introducir aqui */}

    </div>

  )
}

export default Layout