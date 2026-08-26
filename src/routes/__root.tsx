import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
