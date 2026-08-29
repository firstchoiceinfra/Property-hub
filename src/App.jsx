import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import PageLoader from './components/PageLoader.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'

// Lazy-loading each page means the browser only downloads the code for
// the page the user is currently on, instead of one giant bundle.
// This keeps first load fast even as you add hundreds of pages later —
// directly helps with performance under traffic.
const Home = lazy(() => import('./pages/Home.jsx'))
const Listings = lazy(() => import('./pages/Listings.jsx'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const CostEstimator = lazy(() => import('./pages/CostEstimator.jsx'))
const PostProperty = lazy(() => import('./pages/PostProperty.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    // Wraps the whole app so ANY page/component can read or update
    // favorites via useFavorites() — no prop-drilling needed.
    <FavoritesProvider>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/*
            KEY PATTERN: MainLayout is the parent route.
            It renders the Navbar + Sidebar ONCE, and an <Outlet/> inside it
            is where child pages render. When you navigate from Home -> Listings,
            React Router only re-renders the Outlet's content — the Layout
            component (and therefore your Navbar/Sidebar) never unmounts,
            never reloads, never flickers.
          */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<ServiceDetail />} />
            <Route path="/cost-estimator" element={<CostEstimator />} />
            <Route path="/post-property" element={<PostProperty />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </FavoritesProvider>
  )
}
