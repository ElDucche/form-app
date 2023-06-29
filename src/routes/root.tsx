import { Link, Outlet } from "react-router-dom"



const Layout = () => {

  return (
      <div className="relative">
        <nav className='border-b border-black p-4 flex items-center w-screen top-0 bg-white z-10'>
            <Link to="/" className="px-2 font-medium hover:text-blue-600 hover:underline">Home</Link>
            <Link to="/formulaire" className="px-2 font-medium hover:text-blue-600 hover:underline">Formulaire</Link>
        </nav>
        <div className="">
          <Outlet />
        </div>
      </div>
  )
}

export default Layout