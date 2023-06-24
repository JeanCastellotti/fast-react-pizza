import Header from './header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

function Layout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div>
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default Layout
