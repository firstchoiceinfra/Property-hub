import { useState } from 'react'

export default function PostProperty() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In production: POST to your backend API here.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-medium text-green-800">Property submit ho gayi!</p>
        <p className="mt-1 text-sm text-green-700">
          Verification ke baad ye listing live ho jaayegi.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-display text-2xl font-semibold text-blueprint-900">
        Apni Property Post Karein
      </h1>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input required placeholder="Property title" className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
        <div className="grid grid-cols-2 gap-4">
          <select required className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400">
            <option value="">Type</option>
            <option>Buy</option>
            <option>Rent</option>
            <option>Plot</option>
          </select>
          <input required placeholder="City" className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input required placeholder="Price (₹)" className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
          <input required placeholder="Area (sq.ft)" className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
        </div>
        <textarea placeholder="Description" rows={4} className="rounded-lg border border-concrete-300 px-4 py-2 outline-none focus:border-blueprint-400" />
        <button type="submit" className="rounded-full bg-brick-500 py-2.5 font-medium text-white hover:bg-brick-400">
          Submit for Verification
        </button>
      </form>
    </div>
  )
}
