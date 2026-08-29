import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="font-display text-3xl font-semibold text-blueprint-900">404</p>
      <p className="mt-2 text-concrete-500">Ye page nahi mila.</p>
      <Link to="/" className="mt-4 inline-block text-brick-600">
        Home par jaayein
      </Link>
    </div>
  )
}
