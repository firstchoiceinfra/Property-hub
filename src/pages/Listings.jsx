import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useProperties } from '../context/PropertiesContext.jsx'
import PropertyCard from '../components/PropertyCard.jsx'

const typeMap = { buy: 'Buy', rent: 'Rent', plot: 'Plot' }

const MAX_BUDGET = 20000000
const MAX_AREA = 3000

export default function Listings() {
  const { properties } = useProperties()
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
  }, [properties, activeType, city, maxBudget, maxArea, verifiedOnly])

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

      <
