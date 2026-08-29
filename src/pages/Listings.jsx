import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data/mockData.js'
import PropertyCard from '../components/PropertyCard.jsx'

const typeMap = { buy: 'Buy', rent: 'Rent', plot: 'Plot' }

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeType = typeMap[searchParams.get('type')] ?? 'All'
  const [city, setCity] = useState('')

  // useMemo avoids recomputing the filtered list on every re-render —
  // with a real API + thousands of listings this is where you'd also
  // add pagination or list virtualization (e.g. react-window) so the
  // DOM never holds more rows than are visible on screen.
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesType = activeType === 'All' || p.type === activeType
      const matchesCity = city === '' || p.city.toLowerCase().includes(city.toLowerCase())
      return matchesType && matchesCity
    })
  }, [activeType, city])

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-blueprint-900">
        Properties {activeType !== 'All
