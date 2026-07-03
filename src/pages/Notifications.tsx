import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, ArrowLeft, TrendingUp, CheckCircle, Award, X, Star, Megaphone } from 'lucide-react'

const notifications = [
  {
    id: 1, type: 'signal', title: 'New Signal Published', desc: 'BUY GBP/JPY at 190.550 — target 191.400, stop 190.150.',
    time: '12 min ago', read: false, icon: TrendingUp, color: 'text-profit', bg: 'bg-profit/10',
  },
  {
    id: 2, type: 'system', title: 'Target Reached', desc: 'XAU/USD hit TP of 2345.00 — +24.5 pips. Well played!',
    time: '47 min ago', read: false, icon: CheckCircle, color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    id: 3, type: 'achievement', title: 'Level Up!', desc: 'You completed 10 trades this month — you earned the Consistent Trader badge.',
    time: '2h ago', read: false, icon: Award, color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    id: 4, type: 'signal', title: 'Signal Expired', desc: 'SELL NAS100 at 18250.0 has expired — 72% confidence level not reached.',
    time: '5h ago', read: true, icon: X, color: 'text-loss', bg: 'bg-loss/10',
  },
  {
    id: 5, type: 'system', title: 'Premium Feature Unlocked', desc: 'Advanced charting tools are now available on your VIP plan.',
    time: '1d ago', read: true, icon: Star, color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    id: 6, type: 'achievement', title: 'Milestone Reached', desc: 'You have successfully traded for 30 consecutive days!',
    time: '3d ago', read: true, icon: Award, color: 'text-primary', bg: 'bg-primary/10',
  },
  {
    id: 7, type: 'system', title: 'Weekly Market Recap', desc: 'Catch up on the week\'s biggest moves, key levels, and what to watch next week.',
    time: '4d ago', read: true, icon: Megaphone, color: 'text-primary', bg: 'bg-primary/10',
  },
]

const filters = ['All', 'Unread', 'Signals', 'System']

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [items, setItems] = useState(notifications)

  const unreadCount = items.filter((n) => !n.read).length

  const filtered = activeFilter === 'All' ? items
    : activeFilter === 'Unread' ? items.filter((n) => !n.read)
    : activeFilter === 'Signals' ? items.filter((n) => n.type === 'signal')
    : items.filter((n) => n.type === 'system')

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const toggleRead = (id: number) => {
    setItems((prev) => prev.map((n) => n.id === id ? { ...n, read: !n.read } : n))
  }

  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-variant/30 rounded-full transition-all active:scale-90">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-headline text-[28px] text-on-surface font-semibold">Notifications</h1>
            {unreadCount > 0 && <p className="font-body text-sm text-on-surface-variant">{unreadCount} unread</p>}
          </div>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="font-label text-xs text-primary font-bold hover:opacity-80 transition-opacity active:scale-95">
            Mark All Read
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {filters.map((f) => (
          <button key={f} onClick={() => setActiveFilter(f)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full font-label text-xs font-bold border transition-colors ${
              activeFilter === f
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'bg-surface-variant/50 text-on-surface-variant border-outline-variant/50 hover:bg-surface-variant'
            }`}>
            {f}
            {f === 'Unread' && unreadCount > 0 && (
              <span className="ml-1.5 bg-primary text-on-primary text-[9px] px-1.5 py-0.5 rounded-full">{unreadCount}</span>
            )}
          </button>
        ))}
      </div>

      {/* Notification List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <Bell className="w-12 h-12 text-on-surface-variant opacity-30" />
          <p className="font-body text-sm text-on-surface-variant">No notifications here</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((n) => (
            <button key={n.id} onClick={() => toggleRead(n.id)}
              className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all active:scale-[0.99] ${
                n.read
                  ? 'bg-surface-clow border-outline-variant/20 opacity-70'
                  : 'bg-surface-clow border-primary/15 ring-1 ring-primary/5'
              }`}>
              <div className={`w-10 h-10 rounded-xl ${n.bg} flex items-center justify-center flex-shrink-0`}>
                <n.icon className={`w-5 h-5 ${n.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className={`font-body text-sm ${n.read ? 'text-on-surface-variant' : 'text-on-surface font-semibold'}`}>
                    {n.title}
                  </h3>
                  {!n.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-0.5 line-clamp-2">{n.desc}</p>
                <span className="font-data text-[11px] text-on-surface-variant opacity-60 mt-1.5 inline-block">{n.time}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
