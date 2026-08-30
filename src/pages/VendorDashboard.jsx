import { useState } from 'react'
import { useVendor } from '../context/VendorContext.jsx'
import { serviceCategories } from '../data/mockData.js'

const mockLeads = [
  { id: 'l1', name: 'Rohit Sharma', city: 'Bengaluru', message: 'Need a quote for a 1200 sq.ft 2-floor house.' },
  { id: 'l2', name: 'Priya Nair', city: 'Bengaluru', message: 'Vastu check needed before construction starts.' },
]

export default function VendorDashboard() {
  const { profile, saveProfile, clearProfile } = useVendor()

  if (!profile) {
    return <VendorProfileForm onSave={saveProfile} />
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-blueprint-900">
            {profile.businessName}
          </h1>
          <p className="text-concrete-500">
            {profile.category} · {profile.city}
          </p>
        </div>
        <button
          onClick={clearProfile}
          className="text-sm text-concrete-500 hover:text-brick-600"
        >
          Log out
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Profile Views" value="128" />
        <StatCard label="Leads Received" value={mockLeads.length} />
        <StatCard label="Rating" value="4.6 ★" />
        <StatCard label="Quotes Sent" value="9" />
      </div>

      <h2 className="mt-8 font-display text-lg font-semibold text-blueprint-900">
        Recent Leads
      </h2>
      <div className="mt-3 flex flex-col gap-3">
        {mockLeads.map((lead) => (
          <div key={lead.id} className="rounded-xl border border-concrete-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-concrete-900">{lead.name}</p>
              <span className="text-xs text-concrete-500">{lead.city}</span>
            </div>
            <p className="mt-1 text-sm text-concrete-600">{lead.message}</p>
            <button className="mt-2 rounded-full bg-blueprint-700 px-4 py-1.5 text-xs font-medium text-white hover:bg-blueprint-600">
              Respond
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-concrete-200 bg-white p-4 text-center">
      <p className="font-display text-xl font-semibold text-brick-600">{value}</p>
      <p className="mt-1 text-xs text-concrete-500">{label}</p>
    </div>
  )
}

function VendorProfileForm({ onSave }) {
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSave({ businessName, category, city })
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="font-display text-2xl font-semibold text-blueprint-900">
        Apna Vendor Profile Banayein
      </h1>
      <p className="mt-1 text-sm text-concrete-500">
        Architect, contractor, ya kisi bhi service provider ke roop me leads paana shuru karein.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          required
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Business / Firm Name"
          className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400"
        />
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400"
        >
          <option value="">Service Category</option>
          {serviceCategories.map((s) => (
            <option key={s.slug} value={s.label}>
              {s.label}
            </option>
          ))}
        </select>
        <input
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400"
        />
        <button
          type="submit"
          className="rounded-full bg-brick-500 py-2.5 font-medium text-white hover:bg-brick-400"
        >
          Dashboard Kholein
        </button>
      </form>
    </div>
  )
}
