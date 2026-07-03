import { NavLink } from 'react-router-dom'
import { Home, BarChart3, GraduationCap, Bell, Award, LogOut, User } from 'lucide-react'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Dashboard' },
  { to: '/trade', icon: BarChart3, label: 'Signals' },
  { to: '/courses', icon: GraduationCap, label: 'Academy' },
  { to: '/notifications', icon: Bell, label: 'Alerts', badge: true },
  { to: '/pricing', icon: Award, label: 'Pricing' },
  { to: '/settings', icon: User, label: 'Profile' },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-dvh w-64 bg-surface-cl border-r border-outline-variant/20 z-50">
      {/* Brand */}
      <div className="flex items-center px-6 h-16 border-b border-outline-variant/20 flex-shrink-0">
        <img src={logo} alt="ODG Traders" className="h-9 w-auto object-contain" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-3 py-6 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-title text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
                  {item.badge && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full ring-2 ring-surface-cl" />
                  )}
                </div>
                <span>{item.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-outline-variant/20 px-4 py-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30 bg-surface-variant flex items-center justify-center flex-shrink-0">
            <span className="font-data text-sm font-bold text-on-surface">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body text-sm text-on-surface font-semibold truncate">John Doe</p>
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3 text-primary fill-primary" />
              <span className="font-label text-[9px] text-primary uppercase tracking-wider font-bold">VIP Member</span>
            </div>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
