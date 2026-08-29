import { Link } from 'react-router-dom'
import { serviceCategories } from '../data/mockData.js'

export default function Services() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-blueprint-900">
        Plot se Ghar tak — Sab Services
      </h1>
      <p className="mt-1 text-concrete-500">
        Architect se lekar paint aur loan tak, har step ke liye verified vendors.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="rounded-xl border border-concrete-200 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <p className="font-medium text-concrete-900">{s.label}
