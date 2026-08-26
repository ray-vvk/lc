import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <TanStackRouterDevtools />
  </>
)
