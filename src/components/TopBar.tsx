import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-cl/90 backdrop-blur-md flex justify-between items-center px-5 h-16 border-b border-outline-variant/20 lg:hidden">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-primary/30 bg-surface-variant flex items-center justify-center">
          <span className="text-xs font-bold text-on-surface font-data">JD</span>
        </div>
      </div>
      <Link to="/notifications" className="text-on-surface hover:text-primary transition-colors active:scale-95 flex items-center justify-center w-10 h-10">
        <Bell className="w-5 h-5" />
      </Link>
    </header>
  )
}
