import { Link, Outlet } from '@tanstack/react-router'
import { Toggle } from 'components'
import Cards from 'icons/Cards'

type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAIL'

const status: PaymentStatus = 'PENDING'

export default function Navbar() {
  return (
    <>
      <nav className="flex h-[8vh] hover:scale-700 bg-purple-700 text-white dark:bg-stone-800">
        <div className="flex items-center justify-between px-12 py-auto w-full">
          <a
            href="/"
            className="flex items-center hover:cursor-pointer"
            aria-label="nav to home page"
          >
            <Cards className="w-8 h-8 fill-gray-50 dark:fill-stone-200" />
          </a>
          <div className="flex items-center justify-between w-100%">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-white hover:bg-white dark:hover:bg-slate-200 hover:text-purple-600 dark:hover:text-violet-800"
              aria-label="nav to home page"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 mr-6 rounded-lg text-white hover:bg-white dark:hover:bg-slate-200 hover:text-purple-600 dark:hover:text-violet-800"
              aria-label="nav to about page"
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
