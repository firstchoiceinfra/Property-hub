import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFavorites } from '../context/FavoritesContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Buy / Rent' },
  { to: '/services', label: 'Build Your Home' },
  { to: '/post-property', label: 'Post Property' },
]

export default function Navbar({ onMenuClick }) {
  const [query, setQuery] = useState('')
  const { favoriteIds } = useFavorites()

  return (
    <header className="sticky top-0 z-40 border-b border-concrete-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="rounded-md p-2 text-concrete-600 hover:bg-concrete-100 lg:hidden"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-blueprint-900">
          <span className="inline-block h-6 w-6 rounded-sm bg-brick-500" />
          GharBhoomi
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blueprint-50 text-blueprint-700'
                    : 'text-concrete-600 hover:bg-concrete-100 hover:text-concrete-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden flex-1 max-w-sm items-center md:flex">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city, locality, project…"
            className="w-full rounded-full border border-concrete-200 bg-concrete-50 px-4 py-2 text-sm outline-none focus:border-blueprint-400"
          />
        </div>

        <Link
          to="/favorites"
          className="ml-auto flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-concrete-600 hover:bg-concrete-100 md:ml-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={favoriteIds.length ? '#a84f2e' : 'none'} stroke="#a84f2e" strokeWidth="2">
            <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.9 1.7 6.4 4.6 5.1c2.2-1 4.6-.2 5.9 1.6l1.5 2 1.5-2c1.3-1.8 3.7-2.6 5.9-1.6 2.9 1.3 3.8 4.8 1.9 7.8C18.7 16.65 12 21 12 21z" />
          </svg>
          {favoriteIds.length > 0 && <span>{favoriteIds.length}</span>}
        </Link>

        <Link
          to="/login"
          className="rounded-full bg-blueprint-700 px-4 py-2 text-sm font-medium text-white hover:bg-blueprint-600 md:ml-4"
        >
          Login
        </Link>
      </div>
    </header>
  )
}
