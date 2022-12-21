import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from '@tanstack/react-router'
import { Navbar, Spinner } from 'components'
import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'

const Login = lazy(() => import('./routes/Login'))
const About = lazy(() => import('./routes/About'))
const Game = lazy(() => import('./routes/Game'))

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/react-router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

const rootRoute = createRouteConfig({
  component: () => <Navbar />,
})

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Login,
})

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: About,
})

const gameRoute = rootRoute.createRoute({
  path: '/game',
  component: Game,
})

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute, gameRoute])

const router = createReactRouter({ routeConfig })

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <TanStackRouterDevtools router={router} /> */}
    </>
  )
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </StrictMode>,
  )
}
