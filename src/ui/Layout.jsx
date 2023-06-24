import Header from './header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default Layout
