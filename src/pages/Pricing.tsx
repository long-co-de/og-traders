import { Link } from 'react-router-dom'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Free', price: '$0', period: '/forever',
    desc: 'Essential tools to get started on your trading journey.',
    features: ['Basic Market Analysis', 'Public Discord Access', 'Delayed Signals (24h)'],
    cta: 'Current Plan', current: true, popular: false,
  },
  {
    name: 'VIP Gold', price: '$149', period: '/month',
    desc: 'The complete elite suite for serious traders demanding results.',
    features: ['Real-time Signals', 'Weekly Webinars', 'Private Discord Access', 'Advanced Risk Management Tools', 'Direct Mentor Support'],
    cta: 'Choose VIP Gold', current: false, popular: true,
  },
]

export default function Pricing() {
  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in max-w-4xl mx-auto relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#38342b 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <section className="text-center flex flex-col items-center gap-2 z-10 relative pt-4">
        <h1 className="font-display text-4xl text-on-background font-bold tracking-tight">Upgrade to VIP</h1>
        <p className="font-body text-base text-on-surface-variant max-w-md mx-auto">Unlock elite tools, institutional-grade signals, and direct mentorship to elevate your trading edge.</p>
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full z-10 relative mt-4">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-xl p-6 flex flex-col h-full transition-colors ${
            plan.popular
              ? 'bg-surface-c border border-primary shadow-[0_0_20px_rgba(212,175,55,0.2)] md:-translate-y-4 relative overflow-hidden'
              : 'bg-surface-clow border border-outline-variant hover:border-outline-variant'
          }`}>
            {plan.popular && (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 bg-primary text-on-primary font-label text-xs px-4 py-1.5 rounded-bl-lg rounded-tr-xl font-bold">MOST POPULAR</div>
              </>
            )}
            <div className="mb-4 relative z-10">
              <h3 className={`font-headline text-2xl mb-2 flex items-center gap-2 ${plan.popular ? 'text-primary' : 'text-on-surface'} font-bold`}>
                {plan.name}
                {plan.popular && <Star className="w-5 h-5 text-primary fill-primary" />}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl text-on-background font-bold">{plan.price}</span>
                <span className="font-body text-sm text-on-surface-variant">{plan.period}</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant mt-4">{plan.desc}</p>
            </div>

            <ul className="flex flex-col gap-4 flex-grow mb-6 relative z-10">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className={`w-4 h-4 mt-0.5 ${plan.popular ? 'text-primary fill-primary' : 'text-secondary'}`} />
                  <span className={`font-body text-base ${plan.popular ? 'text-on-surface font-medium' : 'text-on-surface-variant'}`}>{f}</span>
                </li>
              ))}
            </ul>

            {plan.current ? (
              <button className="w-full py-4 rounded-xl border border-outline-variant text-on-surface font-title text-base font-semibold hover:bg-surface-variant transition-colors" disabled>
                {plan.cta}
              </button>
            ) : (
              <Link to="/signup" className="w-full py-4 rounded-xl bg-primary text-on-primary font-title text-base font-bold hover:bg-primary-container transition-colors active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.4)] text-center block">
                {plan.cta}
              </Link>
            )}
          </div>
        ))}
      </section>

      {/* Why VIP */}
      <section className="bg-surface-clow border border-outline-variant/30 rounded-xl p-6 mt-4 max-w-4xl mx-auto w-full z-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-clow to-surface-c opacity-80 z-0" />
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <h3 className="font-headline text-[28px] text-primary mb-2 font-semibold">Why go VIP?</h3>
            <p className="font-body text-base text-on-surface-variant mb-6">Join an exclusive network where precision meets profit. Our VIP members consistently outperform retail averages.</p>
            <div className="grid grid-cols-2 gap-6 p-4 rounded-lg bg-surface-clow/50 border border-outline-variant/20">
              <div>
                <div className="font-display text-4xl text-primary mb-1 font-bold">78%</div>
                <div className="font-label text-xs text-on-surface-variant font-bold">WIN RATE AVERAGE</div>
              </div>
              <div>
                <div className="font-display text-4xl text-primary mb-1 font-bold">24/7</div>
                <div className="font-label text-xs text-on-surface-variant font-bold">MENTOR ACCESS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
