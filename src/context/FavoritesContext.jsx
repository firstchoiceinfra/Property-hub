import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext(null)

const STORAGE_KEY = 'gharbhoomi_favorites'

export function FavoritesProvider({ children }) {
  // Load once from localStorage on first render, so favorites survive
  // a page refresh — not just in-memory state.
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  function toggleFavorite(propertyId) {
    setFavoriteIds((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    )
  }

  function isFavorite(propertyId) {
    return favoriteIds.includes(propertyId)
  }

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

// Custom hook so components just do: const { isFavorite } = useFavorites()
export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) {
    throw new Error('useFavorites must be used inside a FavoritesProvider')
  }
  return ctx
}
