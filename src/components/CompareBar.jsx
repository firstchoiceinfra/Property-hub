import { useNavigate } from 'react-router-dom'
import { useCompare } from '../context/CompareContext.jsx'

export default function CompareBar() {
  const { compareIds, clearCompare } = useCompare()
  const navigate = useNavigate()

  if (compareIds.length === 0) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-blueprint-900 px-5 py-3 text-white shadow-lg">
      <span className="text-sm font-medium">
        {compareIds.length} property{compareIds.length > 1 ? 'ies' : ''} selected
      </span>
      <button
        onClick={() => navigate('/compare')}
        className="rounded-full bg-brick-500 px-4 py-1.5 text-sm font-semibold hover:bg-brick-400"
      >
        Compare Now
      </button>
      <button
        onClick={clearCompare}
        aria-label="Clear comparison"
        className="text-blueprint-200 hover:text-white"
      >
        ✕
      </button>
    </div>
  )
}
