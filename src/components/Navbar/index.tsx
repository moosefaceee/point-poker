import { Toggle } from 'components'
import { Spade } from 'icons'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-100 to-purple-500 text-white dark:bg-gradient-to-r dark:from-stone-100 dark:to-stone-500">
        <div className="flex items-center justify-between px-12 py-4 w-full">
          <div className="flex items-center">
            <Spade className="fill-purple-700 w-6 h-6" />
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
