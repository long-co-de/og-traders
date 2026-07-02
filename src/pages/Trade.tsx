import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Shield, TrendingUp, ArrowRight } from 'lucide-react'

const signals = [
  {
    id: 1, pair: 'EUR/USD', type: 'BUY', time: '2h ago', status: 'active',
    entry: '1.0850', sl: '1.0820', tp: '1.0920', risk: '1%', confidence: '85%',
    abbr: ['EU', 'US']
  },
  {
    id: 2, pair: 'NAS100', type: 'SELL', time: '4h ago', status: 'pending',
    entry: '18250.0', sl: '18320.0', tp: '18100.0', risk: '0.5%', confidence: '72%',
    abbr: ['NQ']
  },
  {
    id: 3, pair: 'XAU/USD', type: 'BUY', time: '6h ago', status: 'hit_tp',
    entry: '2320.50', sl: '2312.00', tp: '2345.00', risk: '1%', confidence: '90%',
    abbr: ['AU', 'US']
  },
]

const tabs = ['Active', 'History']

export default function Trade() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Active')

  const statusBadge = (status: string) => {
    if (status === 'active') return <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-label">Active</span>
    if (status === 'pending') return <span className="bg-surface-variant/50 text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-label">Pending</span>
    return <span className="bg-profit/20 text-profit px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-label">Hit TP</span>
  }

  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in">
      <div>
        <h1 className="font-headline text-[28px] text-on-surface font-semibold">Signals</h1>
        <p className="font-body text-sm text-on-surface-variant mt-1">Institutional-grade trade setups delivered in real-time.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-outline-variant/30">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 pb-3 text-center border-b-2 font-title text-base font-semibold transition-colors ${
              activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant opacity-60 hover:opacity-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Signals */}
      <div className="flex flex-col gap-4">
        {signals.map((s) => (
          <div key={s.id} onClick={() => navigate(`/trade/${s.id}`)} className={`bg-surface-chighest border rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden shadow-lg shadow-black/40 cursor-pointer active:scale-[0.98] transition-all ${
            s.status === 'active' ? 'border-primary/20 ring-1 ring-primary/10' : 'border-outline-variant/30'
          }`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {s.abbr.map((a, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-chighest flex items-center justify-center text-[10px] font-bold text-on-surface font-data">{a}</div>
                  ))}
                </div>
                <div>
                  <h2 className="font-title text-base text-on-surface font-semibold leading-tight">{s.pair}</h2>
                  <p className="font-body text-sm text-on-surface-variant opacity-70">Posted {s.time}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`px-3 py-1 rounded-full font-label text-[10px] tracking-widest border ${
                  s.type === 'BUY' ? 'bg-profit/10 text-profit border-profit/20' : 'bg-loss/10 text-loss border-loss/20'
                }`}>{s.type}</span>
                {statusBadge(s.status)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-background/40 rounded-lg p-3 border border-outline-variant/10">
              <div className="flex flex-col">
                <span className="font-label text-[10px] text-on-surface-variant uppercase opacity-70 font-bold">Entry</span>
                <span className="font-data text-sm text-on-surface font-semibold">{s.entry}</span>
              </div>
              <div className="flex flex-col items-center border-x border-outline-variant/10">
                <span className="font-label text-[10px] text-loss uppercase opacity-80 font-bold">SL</span>
                <span className="font-data text-sm text-on-surface font-semibold">{s.sl}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-label text-[10px] text-profit uppercase opacity-80 font-bold">TP</span>
                <span className="font-data text-sm text-on-surface font-semibold">{s.tp}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-outline-variant/10">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary fill-primary" />
                <span className="font-body text-xs text-on-surface-variant">Risk: {s.risk}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-primary fill-primary" />
                <span className="font-body text-xs text-on-surface-variant">{s.confidence} Confidence</span>
              </div>
            </div>

            {s.status === 'active' && (
              <Link to="/trade" onClick={(e) => e.stopPropagation()} className="bg-primary text-on-primary font-title text-sm py-3 rounded-lg w-full font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Open Trade Terminal <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
