import { useParams, Link } from 'react-router-dom'
import { useProperties } from '../context/PropertiesContext.jsx'
import EmiCalculator from '../components/EmiCalculator.jsx'

export default function PropertyDetail() {
  const { properties } = useProperties()
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)

  if (!property) {
    return (
      <div className="text-center text-concrete-500">
        Property nahi mili.{' '}
        <Link to="/listings" className="text-brick-600">
          Sab listings dekhein
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="flex h-72 items-center justify-center rounded-xl bg-concrete-100 text-concrete-400">
          Property Images
        </div>
        <h1 className="mt-4 font-display text-2xl font-semibold text-blueprint-900">
          {property.title}
        </h1>
        <p className="text-concrete-500">{property.city}</p>

        <div className="mt-4 grid grid-cols-3 gap-3 rounded-xl border border-concrete-200 p-4 text-sm">
          <div>
            <p className="text-concrete-500">Price</p>
            <p className="font-semibold text-brick-600">{property.price}</p>
          </div>
          <div>
            <p className="text-concrete-500">Area</p>
            <p className="font-semibold">{property.area}</p>
          </div>
          <div>
            <p className="text-concrete-500">Config</p>
            <p className="font-semibold">{property.bhk}</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-brick-500/30 bg-brick-500/5 p-4">
          <p className="font-medium text-brick-700">Ye plot khareedne ke baad?</p>
          <p className="mt-1 text-sm text-concrete-600">
            Architect se plan banwaiye, vastu check karaiye, aur construction
            loan tak — sab yahin se shuru kariye.
          </p>
          <Link
            to="/services"
            className="mt-3 inline-block rounded-full bg-brick-500 px-4 py-2 text-sm font-medium text-white hover:bg-brick-400"
          >
            Home-building services dekhein
          </Link>
        </div>

        <div className="mt-6">
          <EmiCalculator />
        </div>
      </div>

      <div className="rounded-xl border border-concrete-200 bg-white p-4">
        <p className="font-medium text-concrete-900">Owner se contact karein</p>
        <button className="mt-3 w-full rounded-full bg-blueprint-700 py-2 text-sm font-medium text-white hover:bg-blueprint-600">
          Number dikhaein
        </button>
        <button className="mt-2 w-full rounded-full border border-concrete-300 py-2 text-sm font-medium text-concrete-700 hover:bg-concrete-100">
          Message bhejein
        </button>
      </div>
    </div>
  )
}
