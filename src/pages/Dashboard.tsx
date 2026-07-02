import { Link } from 'react-router-dom'
import { TrendingUp, TrendingDown, ArrowRight, GraduationCap, Award } from 'lucide-react'

const marketData = [
  { pair: 'EUR/USD', price: '1.0942', change: '+0.12%', up: true },
  { pair: 'GBP/USD', price: '1.2615', change: '-0.08%', up: false },
  { pair: 'NAS100', price: '18,124', change: '+0.85%', up: true },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in">
      {/* Welcome */}
      <section className="flex flex-col gap-2 relative pt-4">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="flex justify-between items-start relative z-10">
          <div>
            <h1 className="font-display text-[36px] leading-tight text-on-surface font-bold tracking-tight">Welcome back, Alex</h1>
            <p className="font-body text-sm text-on-surface-variant mt-1">Ready for the New York open?</p>
          </div>
          <Link to="/pricing" className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-primary/20 transition-colors active:scale-95">
            <Award className="w-4 h-4 text-primary fill-primary" />
            <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">VIP Member</span>
          </Link>
        </div>
      </section>

      {/* Markets */}
      <section className="flex flex-col gap-2">
        <div className="flex justify-between items-center px-1">
          <h2 className="font-title text-base text-on-surface font-semibold">Markets</h2>
          <Link to="/trade" className="text-primary text-xs font-semibold uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">View All</Link>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {marketData.map((m) => (
            <Link key={m.pair} to="/trade"
              className="bg-surface-chigh border border-outline-variant/30 rounded-xl p-4 min-w-[150px] flex-shrink-0 flex flex-col gap-3 hover:border-primary/30 transition-all active:scale-[0.97]">
              <div className="flex justify-between items-center">
                <span className="font-label text-on-surface-variant uppercase text-[11px] font-bold">{m.pair}</span>
                {m.up ? <TrendingUp className="w-[18px] h-[18px] text-profit" /> : <TrendingDown className="w-[18px] h-[18px] text-loss" />}
              </div>
              <div>
                <div className="font-data text-[22px] text-on-surface font-bold tracking-tight">{m.price}</div>
                <div className={`font-data text-xs font-medium ${m.up ? 'text-profit' : 'text-loss'}`}>{m.change}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Signal of the Day */}
      <section className="flex flex-col gap-2">
        <h2 className="font-title text-base text-on-surface font-semibold flex items-center gap-2 px-1">
          Signal of the Day
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
        </h2>
        <div className="bg-surface-chighest border border-primary/20 rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden ring-1 ring-primary/10"
          style={{ boxShadow: '0 0 30px rgba(242,202,80,0.15)' }}>
          <div className="flex justify-between items-start z-10">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2.5">
                <span className="bg-profit text-white font-bold px-2 py-0.5 rounded text-[11px] font-label">BUY</span>
                <span className="font-headline text-[26px] text-on-surface font-bold">GBP/JPY</span>
              </div>
              <div className="font-body text-sm text-on-surface-variant">High Probability Setup • M15 Timeframe</div>
            </div>
            <div className="bg-background/40 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-outline-variant/20 text-center">
              <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mb-1 font-bold">Target</div>
              <div className="font-data text-lg text-primary font-bold">+85 Pips</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 z-10 bg-background/30 rounded-xl p-4 border border-outline-variant/20">
            <div className="flex flex-col">
              <span className="font-label text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Entry</span>
              <span className="font-data text-[15px] text-on-surface font-semibold">190.550</span>
            </div>
            <div className="flex flex-col border-x border-outline-variant/20 px-3">
              <span className="font-label text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Stop Loss</span>
              <span className="font-data text-[15px] text-loss font-semibold">190.150</span>
            </div>
            <div className="flex flex-col pl-3">
              <span className="font-label text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Take Profit</span>
              <span className="font-data text-[15px] text-profit font-semibold">191.400</span>
            </div>
          </div>

          <Link to="/trade" className="bg-primary text-on-primary font-title text-base py-4 rounded-full w-full text-center font-bold hover:brightness-110 active:scale-[0.98] transition-all z-10 shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
            Open Trade Terminal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Academy Progress */}
      <section className="flex flex-col gap-2 mb-4">
        <h2 className="font-title text-base text-on-surface font-semibold px-1">Academy Progress</h2>
        <div className="bg-surface-c border border-outline-variant/30 rounded-xl p-5 flex gap-5 items-center">
          <div className="w-14 h-14 rounded-xl bg-surface-dim border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-body text-base text-on-surface font-semibold leading-none">Price Action Mastery</div>
                <div className="font-body text-[13px] text-on-surface-variant mt-1">Module 4: Liquidity Concepts</div>
              </div>
              <span className="font-label text-[11px] text-primary font-bold">65%</span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-surface-chighest rounded-full h-2.5 overflow-hidden border border-outline-variant/20">
                <div className="bg-gradient-to-r from-primary/60 to-primary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }} />
              </div>
              <div className="flex justify-end mt-3">
                <Link to="/courses/1" className="flex items-center gap-1 text-[13px] font-bold text-on-surface hover:text-primary transition-colors group">
                  Continue Lesson
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
