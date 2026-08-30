import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import PageLoader from './components/PageLoader.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { CompareProvider } from './context/CompareContext.jsx'
import { VendorProvider } from './context/VendorContext.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Listings = lazy(() => import('./pages/Listings.jsx'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const CostEstimator = lazy(() => import('./pages/CostEstimator.jsx'))
const PostProperty = lazy(() => import('./pages/PostProperty.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const Compare = lazy(() => import('./pages/Compare.jsx'))
const VendorDashboard = lazy(() => import('./pages/VendorDashboard.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <FavoritesProvider>
      <CompareProvider>
        <VendorProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:category" element={<ServiceDetail />} />
                <Route path="/cost-estimator" element={<CostEstimator />} />
                <Route path="/post-property" element={<PostProperty />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/vendor-dashboard" element={<VendorDashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </VendorProvider>
      </CompareProvider>
    </FavoritesProvider>
  )
}
