import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data/mockData.js'
import PropertyCard from '../components/PropertyCard.jsx'

const typeMap = { buy: 'Buy', rent: 'Rent', plot: 'Plot' }

const MAX_BUDGET = 20000000
const MAX_AREA = 3000

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeType = typeMap[searchParams.get('type')] ?? 'All'
  const [city, setCity] = useState('')
  const [maxBudget, setMaxBudget] = useState(MAX_BUDGET)
  const [maxArea, setMaxArea] = useState(MAX_AREA)
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesType = activeType === 'All' || p.type === activeType
      const matchesCity = city === '' || p.city.toLowerCase().includes(city.toLowerCase())
      const matchesBudget = p.priceValue <= maxBudget
      const matchesArea = p.areaValue <= maxArea
      const matchesVerified = !verifiedOnly || p.verified
      return matchesType && matchesCity && matchesBudget && matchesArea && matchesVerified
    })
  }, [activeType, city, maxBudget, maxArea, verifiedOnly])

  const fmtBudget = (n) =>
    n >= 10000000 ? `₹${(n / 10000000).toFixed(1)}Cr` : `₹${(n / 100000).toFixed(0)}L`

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-blueprint-900">
          Properties {activeType !== 'All' ? `· ${activeType}` : ''}
        </h1>
        <button
          onClick={() => setShowFilters((v) => !v)}
          className="rounded-full border border-concrete-300 px-4 py-1.5 text-sm text-concrete-600 hover:bg-concrete-100 lg:hidden"
        >
          Filters {showFilters ? '▲' : '▼'}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['All', 'Buy', 'Rent', 'Plot'].map((t) => (
          <button
            key={t}
            onClick={() =>
              setSearchParams(t === 'All' ? {} : { type: t.toLowerCase() })
            }
            className={`rounded-full border px-4 py-1.5 text-sm ${
              activeType === t
                ? 'border-blueprint-700 bg-blueprint-700 text-white'
                : 'border-concrete-300 text-concrete-600 hover:bg-concrete-100'
            }`}
          >
            {t}
          </button>
        ))}
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Filter by city…"
          className="ml-auto rounded-full border border-concrete-300 px-4 py-1.5 text-sm outline-none focus:border-blueprint-400"
        />
      </div>

      <div className={`${showFilters ? 'grid' : 'hidden'} mt-4 grid-cols-1 gap-4 rounded-xl border border-concrete-200 bg-white p-4 sm:grid-cols-3 lg:grid`}>
        <label className="block">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-concrete-600">Max Budget</span>
            <span className="font-medium text-concrete-900">{fmtBudget(maxBudget)}</span>
          </div>
          <input
            type="range"
            min={100000}
            max={MAX_BUDGET}
            step={100000}
            value={maxBudget}
            onChange={(e) => setMaxBudget(Number(e.target.value))}
            className="w-full accent-brick-500"
          />
        </label>

        <label className="block">
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-concrete-600">Max Area</span>
            <span className="font-medium text-concrete-900">{maxArea} sq.ft</span>
          </div>
          <input
            type="range"
            min={200}
            max={MAX_AREA}
            step={50}
            value={maxArea}
            onChange={(e) => setMaxArea(Number(e.target.value))}
            className="w-full accent-brick-500"
          />
        </label>

        <label className="flex items-center gap-2 self-end pb-1 text-sm text-concrete-600">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => setVerifiedOnly(e.target.checked)}
            className="accent-blueprint-600"
          />
          Verified listings only
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-concrete-500">
            Is filter ke liye koi property nahi mili.
          </p>
        )}
      </div>
    </div>
  )
}
