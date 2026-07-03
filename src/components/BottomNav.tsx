import { NavLink } from 'react-router-dom'
import { Home, BarChart3, GraduationCap, Bell, User } from 'lucide-react'

const items = [
  { to: '/dashboard', icon: Home, label: 'Home' },
  { to: '/trade', icon: BarChart3, label: 'Signals' },
  { to: '/courses', icon: GraduationCap, label: 'Learn' },
  { to: '/notifications', icon: Bell, label: 'Alerts' },
  { to: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-3 pb-3 px-4 bg-surface-c/90 backdrop-blur-md border-t border-outline-variant/20 shadow-[0_-4px_16px_rgba(0,0,0,0.4)] h-[76px] lg:hidden">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1.5 w-14 transition-colors ${
              isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <item.icon className={`w-[26px] h-[26px] ${isActive ? 'fill-primary' : ''}`} strokeWidth={isActive ? 2 : 1.5} />
                {isActive && <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
              </div>
              <span className={`font-label text-[10px] uppercase tracking-tighter ${isActive ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
