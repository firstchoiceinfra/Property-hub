import { useParams, Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData.js'

// Placeholder vendor data — in production this comes from your
// vendor-onboarding backend, filtered by category + city.
const sampleVendors = [
  { name: 'Sharma & Associates', rating: 4.6, city: 'Bengaluru' },
  { name: 'Prime Build Co.', rating: 4.4, city: 'Gurugram' },
  { name: 'Vishwakarma Works', rating: 4.8, city: 'Ahmedabad' },
]

export default function ServiceDetail() {
  const { category } = useParams()
  const info = serviceCategories.find((s) => s.slug === category)

  if (!info) {
    return (
      <div className="text-center text-concrete-500">
        Ye service category nahi mili.{' '}
        <Link to="/services" className="text-brick-600">
          Sab services dekhein
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/services" className="text-sm text-concrete-500 hover:text-brick-600">
        ← Sab services
      </Link>
      <h1 className="mt-2 font-display text-2xl font-semibold text-blueprint-900">
        {info.label}
      </h1>
      <p className="mt-1 text-concrete-500">{info.description}</p>

      <div className="mt-6 flex flex-col gap-3">
        {sampleVendors.map((v) => (
          <div
            key={v.name}
            className="flex items-center justify-between rounded-xl border border-concrete-200 bg-white p-4"
          >
            <div>
              <p className="font-medium text-concrete-900">{v.name}</p>
              <p className="text-sm text-concrete-500">{v.city}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-brick-600">★ {v.rating}</span>
              <button className="rounded-full bg-blueprint-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-blueprint-600">
                Quote maangein
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
