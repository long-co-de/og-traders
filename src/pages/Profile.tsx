import { Link } from 'react-router-dom'
import {
  User, Lock, Shield, Bell, ChevronRight, LogOut, CreditCard, Calendar, Award, ArrowLeft,
  Edit
} from 'lucide-react'

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-variant/30 rounded-full transition-all active:scale-90">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-title text-base text-primary font-semibold">Settings</span>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-variant/30 rounded-full transition-all active:scale-90">
          <Bell className="w-5 h-5" />
        </button>
      </div>

      {/* Profile Header */}
      <section className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="relative">
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-primary via-primary-container to-primary/60">
            <div className="w-full h-full rounded-full bg-surface-variant border-4 border-background flex items-center justify-center">
              <User className="w-12 h-12 text-on-surface-variant" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center border-2 border-background">
            <span className="text-sm">

              <Edit  className="w-4 h-4"/>
            </span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="font-headline text-[28px] text-on-surface font-semibold">John Doe</h2>
          <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-label text-[10px] shadow-lg shadow-primary/20 font-bold">
            <Award className="w-3.5 h-3.5 fill-current" /> VIP MEMBER
          </div>
        </div>
        <div className="flex gap-6 text-on-surface-variant font-data text-xs opacity-70">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> Joined Jun '23
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> ID: ODG-992
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="flex flex-col gap-2">
        <h3 className="font-label text-xs text-on-surface-variant px-1 font-bold tracking-wider">ACCOUNT</h3>
        <div className="bg-surface-clow border border-outline-variant rounded-xl overflow-hidden flex flex-col">
          {[
            { icon: User, label: 'Personal Information' },
            { icon: Lock, label: 'Security & Password' },
            { icon: Shield, label: 'Two-Factor Authentication', sub: 'Verified & Active' },
            { icon: CreditCard, label: 'Payment Methods' },
          ].map((item, i) => (
            <Link key={i} to="/settings" className="flex items-center justify-between p-4 border-b border-outline-variant hover:bg-surface-variant/20 transition-colors min-h-[56px] last:border-b-0">
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-body text-base text-on-surface">{item.label}</span>
                  {item.sub && <span className="text-xs text-primary font-medium">{item.sub}</span>}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-on-surface-variant opacity-60" />
            </Link>
          ))}
        </div>
      </section>

      {/* Sign Out */}
      <section className="pt-8 pb-12 flex flex-col items-center gap-4">
        <button className="w-full max-w-xs flex items-center justify-center gap-2 text-error bg-error/5 border border-error/20 hover:bg-error/10 py-4 rounded-xl transition-all font-title text-base active:scale-[0.98]">
          <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </section>
    </div>
  )
}
