import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useCompare } from '../context/CompareContext.jsx'

export default function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const { isComparing, toggleCompare, compareIds, MAX_COMPARE } = useCompare()
  const favorited = isFavorite(property.id)
  const comparing = isComparing(property.id)
  const compareDisabled = !comparing && compareIds.length >= MAX_COMPARE

  return (
    <div className="relative overflow-hidden rounded-xl border border-concrete-200 bg-white transition-shadow hover:shadow-md">
      <button
        onClick={(e) => {
          e.preventDefault()
          toggleFavorite(property.id)
        }}
        aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={favorited ? '#a84f2e' : 'none'}
          stroke={favorited ? '#a84f2e' : '#6b6355'}
          strokeWidth="2"
        >
          <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.9 1.7 6.4 4.6 5.1c2.2-1 4.6-.2 5.9 1.6l1.5 2 1.5-2c1.3-1.8 3.7-2.6 5.9-1.6 2.9 1.3 3.8 4.8 1.9 7.8C18.7 16.65 12 21 12 21z" />
        </svg>
      </button>

      <Link to={`/property/${property.id}`} className="block">
        <div className="flex h-36 items-center justify-center bg-concrete-100 text-concrete-400">
          Image
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-blueprint-50 px-2 py-0.5 text-xs font-medium text-blueprint-700">
              {property.type}
            </span>
            {property.verified && (
              <span className="text-xs font-medium text-green-700">✓ Verified</span>
            )}
          </div>
          <h3 className="mt-2 font-medium text-concrete-900">{property.title}</h3>
          <p className="text-sm text-concrete-500">{property.city}</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="font-semibold text-brick-600">{property.price}</span>
            <span className="text-concrete-500">
              {property.bhk !== '—' ? `${property.bhk} · ` : ''}
              {property.area}
            </span>
          </div>
        </div>
      </Link>

      <label
        className={`flex items-center gap-2 border-t border-concrete-200 px-4 py-2 text-xs ${
          compareDisabled ? 'text-concrete-300' : 'text-concrete-600'
        }`}
      >
        <input
          type="checkbox"
          checked={comparing}
          disabled={compareDisabled}
          onChange={() => toggleCompare(property.id)}
          className="accent-blueprint-600"
        />
        Add to Compare
      </label>
    </div>
  )
}
