import { createContext, useContext, useEffect, useState } from 'react'

const VendorContext = createContext(null)

const STORAGE_KEY = 'gharbhoomi_vendor_profile'

export function VendorProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [profile])

  function saveProfile(data) {
    setProfile(data)
  }

  function clearProfile() {
    setProfile(null)
  }

  return (
    <VendorContext.Provider value={{ profile, saveProfile, clearProfile }}>
      {children}
    </VendorContext.Provider>
  )
}

export function useVendor() {
  const ctx = useContext(VendorContext)
  if (!ctx) {
    throw new Error('useVendor must be used inside a VendorProvider')
  }
  return ctx
}
