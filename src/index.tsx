import { Navbar, Spinner } from 'components'
import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

const Login = lazy(() => import('./routes/Login'))
const ErrorPage = lazy(() => import('./routes/ErrorPage'))
const Game = lazy(() => import('./routes/Game'))

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

root.render(
  <Suspense fallback={<Spinner />}>
    <RouterProvider router={router} />
  </Suspense>,
)
