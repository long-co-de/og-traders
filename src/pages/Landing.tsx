import { Link } from 'react-router-dom'
import { TrendingUp, GraduationCap, BadgeCheck, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Landing() {
  return (
    <div className="min-h-dvh flex flex-col relative overflow-hidden text-on-surface font-body bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40 lg:opacity-60 mix-blend-luminosity bg-cover bg-center scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXBt-So86ND6lenzyKGG37Ds6HAteJwcHZ3N1VwBWvvUeLGslyWhuj5ATMAa0df3o4XtLcaeBU7f8l1gJuU2ynUKiQc1U-9FTtAnaJiDJVLllK4lintKzNzP8Ay5kTA1tiixyUZCcLCWQrc2mFIEzdNruBuM51P1eqts-QMQ5iClI4oxkGoXcYEmfSdNy_ZXdK6xdYcWTjdBJ4wjJtfxjpMLDHBDEa_8Ho8atznXfTwABRFuDaP_PedS39LrFjpxFmIQDEu44g7zj9')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)] lg:bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_60%)]" />
      </div>

      <main className="flex-1 flex flex-col justify-center lg:justify-center px-6 lg:px-16 pb-12 lg:pb-16 z-10 relative mt-auto h-full">
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex flex-col items-center mb-10 lg:mb-14 animate-fade-in">
            <div className=" h-26 lg:w-28 lg:h-28  flex items-center justify-center overflow-hidden mb-4 lg:mb-6 ">
              <img src={logo} alt="OG Traders" className="w-full h-full object-contain p-0.5" />
            </div>
            <h1 className="font-headline text-[28px] lg:text-5xl lg:leading-tight text-on-surface tracking-tight font-semibold text-center lg:max-w-3xl">
              Master the Markets<br className="lg:hidden" /> with{' '}
              <span className="text-primary whitespace-nowrap" style={{ textShadow: '0 0 15px rgba(212,175,55,0.2)' }}>Precision.</span>
            </h1>
          </div>

          <ul className="flex flex-col lg:flex-row lg:justify-center gap-5 mb-14 lg:mb-16 border-l lg:border-l-0 border-primary/20 pl-6 lg:pl-0 lg:gap-12">
            {[
              { icon: TrendingUp, label: 'Premium Signals' },
              { icon: GraduationCap, label: 'Professional Mentorship' },
              { icon: BadgeCheck, label: 'Proven Results' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 lg:flex-col lg:text-center group">
                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all shrink-0">
                  <item.icon className="w-[18px] h-[18px] lg:w-6 lg:h-6 text-primary" />
                </div>
                <span className="font-body text-base lg:text-lg text-on-surface-variant tracking-wide">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col lg:flex-row gap-4 w-full lg:max-w-lg lg:mx-auto">
            <Link
              to="/signup"
              className="w-full lg:flex-1 bg-primary text-on-primary-container font-title text-base lg:text-lg font-semibold py-[18px] lg:py-5 rounded-lg flex justify-center items-center gap-2 active:scale-[0.98] transition-all duration-200 hover:brightness-110"
              style={{ boxShadow: '0 4px 12px rgba(212,175,55,0.3)' }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </Link>
            <Link
              to="/login"
              className="w-full lg:flex-1 bg-white/5 backdrop-blur-md text-white font-body text-base lg:text-lg py-4 lg:py-5 rounded-lg flex justify-center items-center border border-white/10 active:bg-white/10 transition-all duration-200 hover:bg-white/[0.08]"
            >
              Already a member? Log In
            </Link>
          </div>

          <p className="text-center mt-8 lg:mt-12 text-[11px] lg:text-xs uppercase tracking-[0.2em] text-on-surface/30 font-label font-bold">
            Institutional Grade Trading
          </p>
        </div>
      </main>
    </div>
  )
}
