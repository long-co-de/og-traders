import { Link } from 'react-router-dom'
import { Search, Bell, TrendingUp, TrendingDown, ArrowRight, GraduationCap, Award, BarChart3, BookOpen, Users, Sparkles, Clock, Zap, Activity, CheckCircle, Shield } from 'lucide-react'

const marketData = [
  { pair: 'XAU/USD', price: '2,345.60', change: '+0.42%', up: true },
  { pair: 'EUR/USD', price: '1.0942', change: '+0.12%', up: true },
  { pair: 'GBP/USD', price: '1.2615', change: '-0.08%', up: false },
  { pair: 'BTC/USD', price: '67,890', change: '+1.24%', up: true },
]

const recentSignals = [
  { id: 1, pair: 'EUR/USD', type: 'BUY', confidence: '85%', time: '2h ago', status: 'active' as const },
  { id: 2, pair: 'NAS100', type: 'SELL', confidence: '72%', time: '4h ago', status: 'pending' as const },
  { id: 3, pair: 'XAU/USD', type: 'BUY', confidence: '90%', time: '6h ago', status: 'hit_tp' as const },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 py-6 animate-fade-in max-w-2xl mx-auto">
      {/* ===== Header ===== */}
      <section className="flex flex-col gap-2 relative">
        <div className="absolute -top-12 -left-12 w-56 h-56 bg-primary/8 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-primary/30 bg-surface-variant flex items-center justify-center flex-shrink-0 shadow-lg shadow-black/30">
              <span className="font-data text-sm font-bold text-on-surface">JD</span>
            </div>
            <div>
              <h1 className="font-display text-[32px] leading-tight text-on-surface font-bold tracking-tight">Welcome back, Alex</h1>
              <p className="font-body text-sm text-on-surface-variant mt-0.5">Ready for the New York open?</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/trade" className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 rounded-full transition-all active:scale-90">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/notifications" className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 rounded-full transition-all active:scale-90 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-surface" />
            </Link>
          </div>
        </div>
        <Link to="/pricing" className="self-start bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-primary/20 transition-colors active:scale-95 relative z-10">
          <Award className="w-4 h-4 text-primary fill-primary" />
          <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">VIP Member</span>
        </Link>
      </section>

      {/* ===== Market Overview ===== */}
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-title text-base text-on-surface font-semibold">Market Overview</h2>
          <Link to="/trade" className="font-label text-[11px] text-primary font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">View All</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {marketData.map((m) => (
            <Link key={m.pair} to="/trade"
              className="bg-surface-chigh border border-outline-variant/30 rounded-xl px-4 py-3.5 flex flex-col gap-2 hover:border-primary/25 transition-all active:scale-[0.97]">
              <div className="flex items-center justify-between">
                <span className="font-label text-on-surface-variant uppercase text-[10px] font-bold tracking-wider">{m.pair}</span>
                {m.up
                  ? <TrendingUp className="w-3.5 h-3.5 text-profit" />
                  : <TrendingDown className="w-3.5 h-3.5 text-loss" />
                }
              </div>
              <div className="font-data text-[18px] text-on-surface font-bold tracking-tight">{m.price}</div>
              <div className={`font-data text-[11px] font-semibold ${m.up ? 'text-profit' : 'text-loss'}`}>{m.change}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Signal of the Day ===== */}
      <section className="flex flex-col gap-3">
        <h2 className="font-title text-base text-on-surface font-semibold flex items-center gap-2">
          Signal of the Day
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
        </h2>
        <div className="bg-surface-chighest border border-primary/20 rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden ring-1 ring-primary/10"
          style={{ boxShadow: '0 0 40px rgba(242,202,80,0.12)' }}>
          <div className="flex justify-between items-start z-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="bg-profit text-white font-bold px-3 py-1 rounded-lg text-[12px] font-label tracking-wider">BUY</span>
                <span className="font-headline text-[28px] text-on-surface font-bold leading-none">GBP/JPY</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-on-surface-variant">High Probability Setup</span>
                <span className="w-1 h-1 rounded-full bg-on-surface-variant opacity-40" />
                <span className="font-body text-sm text-on-surface-variant">M15 Timeframe</span>
              </div>
            </div>
            <div className="bg-background/40 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-outline-variant/20 text-center">
              <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mb-0.5 font-bold">Target</div>
              <div className="font-data text-xl text-primary font-bold">+85 Pips</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 bg-background/30 rounded-xl p-4 border border-outline-variant/15">
            <div className="flex flex-col">
              <span className="font-label text-[10px] text-on-surface-variant uppercase mb-1 font-bold tracking-wider">Entry</span>
              <span className="font-data text-[16px] text-on-surface font-bold">190.550</span>
            </div>
            <div className="flex flex-col items-center border-x border-outline-variant/15 px-3">
              <span className="font-label text-[10px] text-loss uppercase mb-1 font-bold tracking-wider">Stop Loss</span>
              <span className="font-data text-[16px] text-loss font-bold">190.150</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-label text-[10px] text-profit uppercase mb-1 font-bold tracking-wider">Take Profit</span>
              <span className="font-data text-[16px] text-profit font-bold">191.400</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary fill-primary" />
                <span className="font-body text-xs text-on-surface-variant">Risk: 1%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-primary" />
                <span className="font-body text-xs text-on-surface-variant">85% Confidence</span>
              </div>
            </div>
            <Link to="/trade/1" className="font-label text-[11px] text-primary font-bold uppercase tracking-wider hover:opacity-80 transition-opacity active:scale-95">View Details</Link>
          </div>

          <Link to="/trade" className="bg-primary text-on-primary font-title text-sm py-3.5 rounded-xl w-full text-center font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            Open Trade Terminal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== Continue Learning ===== */}
      <section className="flex flex-col gap-3">
        <h2 className="font-title text-base text-on-surface font-semibold">Continue Learning</h2>
        <div className="bg-surface-clow border border-outline-variant/30 rounded-xl p-5 flex gap-4 items-center hover:border-outline-variant/60 transition-colors">
          <div className="w-14 h-14 rounded-xl bg-surface-dim border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <div className="min-w-0">
                <div className="font-body text-base text-on-surface font-semibold leading-tight truncate">Price Action Mastery</div>
                <div className="font-body text-[13px] text-on-surface-variant mt-0.5 truncate">Module 4: Liquidity Concepts</div>
              </div>
              <span className="font-label text-[12px] text-primary font-bold flex-shrink-0">65%</span>
            </div>
            <div className="mt-3">
              <div className="w-full bg-surface-chighest rounded-full h-2 overflow-hidden border border-outline-variant/20">
                <div className="bg-gradient-to-r from-primary/60 to-primary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }} />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-data text-[11px] text-on-surface-variant flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 24m remaining
                </span>
                <Link to="/courses/1" className="flex items-center gap-1 text-[13px] font-bold text-on-surface hover:text-primary transition-colors group">
                  Continue Lesson
                  <ArrowRight className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Today's Market Insight ===== */}
      <section className="flex flex-col gap-3">
        <h2 className="font-title text-base text-on-surface font-semibold">Today's Market Insight</h2>
        <div className="bg-surface-clow border border-outline-variant/30 rounded-xl p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-body text-sm text-on-surface font-semibold">Dollar Weakness Ahead of NFP</p>
              <p className="font-data text-[11px] text-on-surface-variant">2 min read</p>
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            The dollar is showing signs of exhaustion as markets price in a potential Fed pause. Key support at 103.50 is being tested for the third time this month.
          </p>
          <Link to="/courses/2" className="font-label text-[11px] text-primary font-bold uppercase tracking-wider self-end hover:opacity-80 transition-opacity">Read More</Link>
        </div>
      </section>

      {/* ===== Recent Signals ===== */}
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-title text-base text-on-surface font-semibold">Recent Signals</h2>
          <Link to="/trade" className="font-label text-[11px] text-primary font-bold uppercase tracking-wider hover:opacity-80 transition-opacity">View All</Link>
        </div>
        <div className="flex flex-col gap-2">
          {recentSignals.map((s) => (
            <Link key={s.id} to={`/trade/${s.id}`}
              className="bg-surface-clow border border-outline-variant/30 rounded-xl px-4 py-3.5 flex items-center justify-between hover:border-outline-variant/60 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {s.pair.split('/').map((a) => (
                    <div key={a} className="w-7 h-7 rounded-full bg-surface-variant border-2 border-surface-clow flex items-center justify-center text-[9px] font-bold text-on-surface font-data">{a}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-title text-sm text-on-surface font-semibold">{s.pair}</span>
                    <span className={`font-label text-[9px] px-2 py-0.5 rounded-full border font-bold tracking-wider ${
                      s.type === 'BUY' ? 'bg-profit/10 text-profit border-profit/20' : 'bg-loss/10 text-loss border-loss/20'
                    }`}>{s.type}</span>
                  </div>
                  <span className="font-body text-[12px] text-on-surface-variant">{s.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-data text-[11px] text-on-surface-variant">{s.confidence}</span>
                <span className={`font-label text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                  s.status === 'active' ? 'bg-primary/10 text-primary'
                  : s.status === 'pending' ? 'bg-surface-variant/50 text-on-surface-variant'
                  : 'bg-profit/10 text-profit'
                }`}>
                  {s.status === 'active' ? 'Active' : s.status === 'pending' ? 'Pending' : 'Hit TP'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Quick Actions ===== */}
      <section className="flex flex-col gap-3">
        <h2 className="font-title text-base text-on-surface font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: BarChart3, label: 'Signals', to: '/trade', color: 'text-primary' },
            { icon: BookOpen, label: 'Learning', to: '/courses', color: 'text-primary' },
            { icon: Users, label: 'Community', to: '#' },
            { icon: Sparkles, label: 'Subscription', to: '/pricing', color: 'text-primary' },
          ].map((action) => (
            <Link key={action.label} to={action.to}
              className="bg-surface-clow border border-outline-variant/30 rounded-xl py-4 flex flex-col items-center gap-2 hover:border-primary/30 hover:bg-surface-clow/80 transition-all active:scale-[0.97]">
              <div className="w-10 h-10 rounded-xl bg-surface-dim border border-outline-variant/30 flex items-center justify-center">
                <action.icon className={`w-5 h-5 ${action.color || 'text-on-surface-variant'}`} />
              </div>
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">{action.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Premium Membership Banner ===== */}
      <section className="bg-gradient-to-br from-surface-chighest via-surface-chigh to-surface-clow border border-primary/20 rounded-2xl p-6 relative overflow-hidden ring-1 ring-primary/10 mb-4">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20">
              <Award className="w-5 h-5 text-on-primary fill-on-primary" />
            </div>
            <div>
              <h3 className="font-headline text-lg text-on-surface font-bold">VIP Membership</h3>
              <p className="font-body text-sm text-on-surface-variant">Unlock premium signals & advanced education</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary fill-primary" />
              <span className="font-body text-sm text-on-surface-variant">100+ signals/month</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary fill-primary" />
              <span className="font-body text-sm text-on-surface-variant">Full course library</span>
            </div>
          </div>
          <Link to="/pricing" className="self-start bg-primary text-on-primary font-title text-sm font-bold px-6 py-2.5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
            Upgrade Now
          </Link>
        </div>
      </section>
    </div>
  )
}
