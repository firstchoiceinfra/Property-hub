import { Link } from 'react-router-dom'
import { properties } from '../data/mockData.js'
import { useCompare } from '../context/CompareContext.jsx'

const rows = [
  { key: 'type', label: 'Type' },
  { key: 'city', label: 'City' },
  { key: 'price', label: 'Price' },
  { key: 'area', label: 'Area' },
  { key: 'bhk', label: 'Configuration' },
  { key: 'verified', label: 'Verified', render: (v) => (v ? '✓ Yes' : '—') },
]

export default function Compare() {
  const { compareIds, toggleCompare, clearCompare } = useCompare()
  const selected = properties.filter((p) => compareIds.includes(p.id))

  if (selected.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-concrete-300 py-16 text-center">
        <p className="text-concrete-500">
          Compare karne ke liye pehle properties select karein.
        </p>
        <Link to="/listings" className="mt-2 inline-block text-brick-600">
          Properties browse karein →
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-blueprint-900">
          Property Comparison
        </h1>
        <button onClick={clearCompare} className="text-sm text-concrete-500 hover:text-brick-600">
          Clear all
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[500px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="w-32"></th>
              {selected.map((p) => (
                <th key={p.id} className="p-3 text-left align-top">
                  <div className="rounded-xl border border-concrete-200 bg-white p-3">
                    <p className="font-medium text-concrete-900">{p.title}</p>
                    <button
                      onClick={() => toggleCompare(p.id)}
                      className="mt-2 text-xs text-brick-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td className="px-3 py-2 text-sm font-medium text-concrete-500">
                  {row.label}
                </td>
                {selected.map((p) => (
                  <td key={p.id} className="border-t border-concrete-200 px-3 py-2 text-sm text-concrete-800">
                    {row.render ? row.render(p[row.key]) : p[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
