import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

// Rough per-sq.ft construction rates by quality tier — in production these
// would come from your backend, region-adjusted using live material prices.
const rateByQuality = {
  Basic: 1500,
  Standard: 2100,
  Premium: 3000,
}

const stageBreakup = [
  { label: 'Structure (foundation, walls, roof)', pct: 0.45 },
  { label: 'Electrical & Plumbing', pct: 0.15 },
  { label: 'Flooring & Tiling', pct: 0.12 },
  { label: 'Paint & Finishing', pct: 0.1 },
  { label: 'Doors, Windows & Fittings', pct: 0.13 },
  { label: 'Miscellaneous / Contingency', pct: 0.05 },
]

export default function CostEstimator() {
  const [area, setArea] = useState(1200)
  const [floors, setFloors] = useState(1)
  const [quality, setQuality] = useState('Standard')

  const totalCost = useMemo(() => {
    return area * floors * rateByQuality[quality]
  }, [area, floors, quality])

  const fmt = (n) => Math.round(n).toLocaleString('en-IN')

  return (
    <div>
  className="mt-1 w-full rounded-lg border border-concrete-300 px-3 py-2 outline-none focus:border-blueprint-400"
