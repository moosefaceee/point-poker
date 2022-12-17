import { Navbar } from 'components'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage, Game, Login } from 'routes'
import 'tailwindcss/tailwind.css'
// import { AppContext } from 'context';

const container = document.getElementById('root') as HTMLDivElement

const root = createRoot(container)

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/game/:id',
        element: <Game />,
      },
    ],
  },
])

root.render(<RouterProvider router={router} />)
