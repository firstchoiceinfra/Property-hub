import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import CompareBar from '../components/CompareBar.jsx'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-concrete-50">
      <Navbar onMenuClick={() => setSidebarOpen((v) => !v)} />

      <div className="mx-auto flex max-w-7xl">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      <CompareBar />
    </div>
  )
}
