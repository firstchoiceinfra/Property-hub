import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData.js'

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-2xl bg-blueprint-900 px-6 py-14 text-center text-white sm:px-10">
        <h1 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Plot se lekar Griha Pravesh tak — sab ek jagah.
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-blueprint-100">
          Property khareediye, aur architect, vastu, material, paint aur loan
          — sab verified vendors ke saath yahin manage kariye.
        </p>
        <div className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row">
          <input
            placeholder="City, locality ya project search karein…"
            className="w-full rounded-full px-4 py-3 text-sm text-concrete-800 outline-none"
          />
          <Link
            to="/listings"
            className="whitespace-nowrap rounded-full bg-brick-500 px-6 py-3 text-sm font-semibold hover:bg-brick-400"
          >
            Search karein
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-blueprint-900">
            Ghar banane ke liye services
          </h2>
          <Link to="/services" className="text-sm font-medium text-brick-600">
            Sab dekhein →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {serviceCategories.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="rounded-xl border border-concrete-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <p className="font-medium text-concrete-900">{s.label}</p>
              <p className="mt-1 text-xs text-concrete-500">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
