import { createContext, useContext, useState } from 'react'

const CompareContext = createContext(null)

const MAX_COMPARE = 3

export function CompareProvider({ children }) {
  const [compareIds, setCompareIds] = useState([])

  function toggleCompare(propertyId) {
    setCompareIds((prev) => {
      if (prev.includes(propertyId)) {
        return prev.filter((id) => id !== propertyId)
      }
      if (prev.length >= MAX_COMPARE) {
        return prev
      }
      return [...prev, propertyId]
    })
  }

  function isComparing(propertyId) {
    return compareIds.includes(propertyId)
  }

  function clearCompare() {
    setCompareIds([])
  }

  return (
    <CompareContext.Provider
      value={{ compareIds, toggleCompare, isComparing, clearCompare, MAX_COMPARE }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const ctx = useContext(CompareContext)
  if (!ctx) {
    throw new Error('useCompare must be used inside a CompareProvider')
  }
  return ctx
}
