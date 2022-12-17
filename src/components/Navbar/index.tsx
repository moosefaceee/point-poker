import { Toggle } from 'components'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-100 to-purple-500 text-white">
        <div className="flex items-center justify-between px-12 py-4 w-full">
          <div className="flex items-center">
            {/* <ImSpades className="fill-purple-700" /> */}
          </div>
          <div className="flex items-center justify-between w-40">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-white hover:bg-white hover:text-purple-600"
              aria-label="home"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-white hover:bg-white hover:text-purple-600"
              aria-label="about"
            >
              About
            </Link>
            <Toggle />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
