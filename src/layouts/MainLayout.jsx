import { Outlet, useNavigation } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-concrete-50">
      {/* Navbar renders exactly once, no matter which page is active */}
      <Navbar onMenuClick={() => setSidebarOpen((v) => !v)} />

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar also renders exactly once — it lives in the Layout,
            not inside any individual page, so switching pages never
            remounts it, never resets its scroll position, never flickers. */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {/* Outlet is the ONLY part of the screen that changes between
              routes. Everything above and beside it stays put. */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}
