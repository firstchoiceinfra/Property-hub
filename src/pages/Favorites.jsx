import { Link } from 'react-router-dom'
import { properties } from '../data/mockData.js'
import { useFavorites } from '../context/FavoritesContext.jsx'
import PropertyCard from '../components/PropertyCard.jsx'

export default function Favorites() {
  const { favoriteIds } = useFavorites()
  const savedProperties = properties.filter((p) => favoriteIds.includes(p.id))

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-blueprint-900">
        Saved Properties
      </h1>

      {savedProperties.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-concrete-300 py-16 text-center">
          <p className="text-concrete-500">Abhi tak koi property save nahi ki.</p>
          <Link to="/listings" className="mt-2 inline-block text-brick-600">
            Properties browse karein →
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  )
}
