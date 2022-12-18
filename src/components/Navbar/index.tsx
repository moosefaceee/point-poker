import { Toggle } from 'components'
import Cards from 'icons/Cards'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="bg-purple-500 text-white dark:bg-stone-800">
        <div className="flex items-center justify-between px-12 py-4 w-full">
          <div className="flex items-center">
            <Cards className="w-8 h-8 fill-gray-50 dark:fill-stone-200" />
          </div>
          <div className="flex items-center justify-between w-100%">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-white hover:bg-white hover:text-purple-600"
              aria-label="home"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 mr-6 rounded-lg text-white hover:bg-white hover:text-purple-600"
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
