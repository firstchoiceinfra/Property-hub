import { createContext, useContext, useEffect, useState } from 'react'
import { properties as seedProperties } from '../data/mockData.js'

const PropertiesContext = createContext(null)

const STORAGE_KEY = 'gharbhoomi_user_properties'

export function PropertiesProvider({ children }) {
  const [userProperties, setUserProperties] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProperties))
  }, [userProperties])

  function addProperty(data) {
    const newProperty = {
      id: `user-${Date.now()}`,
      ...data,
    }
    setUserProperties((prev) => [newProperty, ...prev])
    return newProperty
  }

  const allProperties = [...userProperties, ...seedProperties]

  return (
    <PropertiesContext.Provider value={{ properties: allProperties, addProperty }}>
      {children}
    </PropertiesContext.Provider>
  )
}

export function useProperties() {
  const ctx = useContext(PropertiesContext)
  if (!ctx) {
    throw new Error('useProperties must be used inside a PropertiesProvider')
  }
  return ctx
}
