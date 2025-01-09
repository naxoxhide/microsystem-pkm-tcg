import { lazy, Suspense } from 'react'

import Page404 from './pages/404.jsx'
import CardsBySet from './pages/CardsBySet.jsx'

import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyCardsBySet = lazy(() => import('./pages/CardsBySet.jsx'))

const appRoutes = [
  {
    path: '/cards/:setId',
    Component: CardsBySet
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/cards' Component={LazyCardsBySet} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App