import { NavLink } from 'react-router-dom'

const groups = [
  {
    title: 'Explore',
    items: [
      { to: '/listings?type=buy', label: 'Buy Property' },
      { to: '/listings?type=rent', label: 'Rent Property' },
      { to: '/listings?type=plot', label: 'Plots & Land' },
      { to: '/favorites', label: 'Saved Properties' },
    ],
  },
  {
    title: 'Build Your Home',
    items: [
      { to: '/services/architect', label: 'Architects' },
      { to: '/services/vastu', label: 'Vastu Consultants' },
      { to: '/services/material', label: 'Material Suppliers' },
      { to: '/services/contractor', label: 'Contractors & Labor' },
      { to: '/services/paint', label: 'Paint & Finishing' },
      { to: '/services/interior', label: 'Interior Designers' },
      { to: '/cost-estimator', label: 'Cost Estimator' },
    ],
  },
  {
    title: 'Finance',
    items: [
      { to: '/services/home-loan', label: 'Home Loan' },
      { to: '/services/construction-loan', label: 'Construction Loan' },
      { to: '/services/insurance', label: 'Home Insurance' },
    ],
  },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`sidebar-scroll fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto border-r border-concrete-200 bg-white pb-10 pt-4 transition-transform duration-200 lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] lg:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {groups.map((group) => (
          <div key={group.title} className="mb-6 px-4">
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-concrete-400">
              {group.title}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-md px-2 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-brick-500/10 font-medium text-brick-600'
                        : 'text-concrete-600 hover:bg-concrete-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </>
  )
}
