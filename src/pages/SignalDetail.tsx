import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, TrendingUp, Shield, BarChart3, Target, AlertTriangle, ChevronRight } from 'lucide-react'

const signals = [
  {
    id: 1, pair: 'EUR/USD', type: 'BUY', time: '2h ago', status: 'active',
    entry: '1.0850', sl: '1.0820', tp: '1.0920', risk: '1%', confidence: '85%',
    abbr: ['EU', 'US'],
    reasoning: 'Strong bullish order block identified on H1 timeframe near the Asian session low. Price is showing clear displacement from the order block with a valid MSS (Market Structure Shift). Expecting continuation toward the next liquidity zone at 1.0920.',
    bias: 'Bullish',
    timeframe: 'H1 / M15',
    riskReward: '1:2.3',
    volume: 'High',
    hitRate: '78%',
  },
  {
    id: 2, pair: 'NAS100', type: 'SELL', time: '4h ago', status: 'pending',
    entry: '18250.0', sl: '18320.0', tp: '18100.0', risk: '0.5%', confidence: '72%',
    abbr: ['NQ'],
    reasoning: 'Bearish divergence on RSI paired with a break of structure on the H4 chart. Price rejected from a key resistance zone. Waiting for a retest of the breaker block before entry.',
    bias: 'Bearish',
    timeframe: 'H4 / H1',
    riskReward: '1:2.1',
    volume: 'Moderate',
    hitRate: '72%',
  },
  {
    id: 3, pair: 'XAU/USD', type: 'BUY', time: '6h ago', status: 'hit_tp',
    entry: '2320.50', sl: '2312.00', tp: '2345.00', risk: '1%', confidence: '90%',
    abbr: ['AU', 'US'],
    reasoning: 'Liquidity sweep below the previous low with an immediate bullish reversal. Clear FVG (Fair Value Gap) formed on the M15 chart. Price respected the order block perfectly and reached TP within 4 hours.',
    bias: 'Bullish',
    timeframe: 'M15 / H1',
    riskReward: '1:3.1',
    volume: 'High',
    hitRate: '90%',
  },
]

const analysisPoints = [
  'Price above daily EMA20 indicating bullish momentum.',
  'Previous day high sweep created liquidity grab.',
  'Order block at entry level shows institutional accumulation.',
  'Risk management set below recent swing low.',
]

export default function SignalDetail() {
  const { id } = useParams()
  const signal = signals.find((s) => s.id === Number(id))

  if (!signal) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
        <AlertTriangle className="w-12 h-12 text-on-surface-variant opacity-50" />
        <h2 className="font-headline text-xl text-on-surface font-semibold">Signal not found</h2>
        <Link to="/trade" className="text-primary font-title font-semibold hover:underline">Back to Signals</Link>
      </div>
    )
  }

  const statusColor = signal.status === 'active'
    ? 'border-primary/30'
    : signal.status === 'pending'
    ? 'border-outline-variant/40'
    : 'border-profit/30'

  const statusBg = signal.status === 'active'
    ? 'bg-primary/5'
    : signal.status === 'pending'
    ? 'bg-surface-variant/20'
    : 'bg-profit/5'

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Back */}
      <Link to="/trade" className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors w-fit">
        <ArrowLeft className="w-4 h-4" /> Signals
      </Link>

      {/* Header Card */}
      <div className={`${statusBg} ${statusColor} border rounded-2xl p-5 flex flex-col gap-5`}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {signal.abbr.map((a, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-surface-variant border-2 border-surface-chighest flex items-center justify-center text-xs font-bold text-on-surface font-data">{a}</div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-headline text-2xl text-on-surface font-bold">{signal.pair}</h1>
                <span className={`px-3 py-1 rounded-full font-label text-[10px] tracking-widest border ${
                  signal.type === 'BUY' ? 'bg-profit/10 text-profit border-profit/20' : 'bg-loss/10 text-loss border-loss/20'
                }`}>{signal.type}</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant">Posted {signal.time}</p>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-lg font-label text-[11px] font-bold uppercase tracking-wider ${
            signal.status === 'active' ? 'bg-primary/10 text-primary'
            : signal.status === 'pending' ? 'bg-surface-variant/50 text-on-surface-variant'
            : 'bg-profit/10 text-profit'
          }`}>
            {signal.status === 'active' ? 'Active' : signal.status === 'pending' ? 'Pending' : 'Hit TP'}
          </div>
        </div>

        {/* Entry Box */}
        <div className="grid grid-cols-3 gap-3 bg-background/40 rounded-xl p-4 border border-outline-variant/10">
          <div className="flex flex-col">
            <span className="font-label text-[10px] text-on-surface-variant uppercase font-bold flex items-center gap-1"><Target className="w-3 h-3" /> Entry</span>
            <span className="font-data text-lg text-on-surface font-bold">{signal.entry}</span>
          </div>
          <div className="flex flex-col items-center border-x border-outline-variant/10">
            <span className="font-label text-[10px] text-loss uppercase font-bold">SL</span>
            <span className="font-data text-lg text-on-surface font-bold">{signal.sl}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-label text-[10px] text-profit uppercase font-bold">TP</span>
            <span className="font-data text-lg text-on-surface font-bold">{signal.tp}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary fill-primary" />
            <span className="font-body text-sm text-on-surface-variant">Risk: {signal.risk}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-primary fill-primary" />
            <span className="font-body text-sm text-on-surface-variant">{signal.confidence} Confidence</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-on-surface-variant">RR {signal.riskReward}</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-surface-cl to-surface-c border border-outline-variant/20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-60">
          <BarChart3 className="w-10 h-10 text-on-surface-variant" />
          <span className="font-body text-sm text-on-surface-variant">Chart Visualization</span>
        </div>
      </div>

      {/* Analysis */}
      <div className="flex flex-col gap-4">
        <h2 className="font-title text-base text-on-surface font-semibold">Trade Analysis</h2>
        <div className="bg-surface-clow border border-outline-variant/30 rounded-xl p-5">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{signal.reasoning}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Bias', value: signal.bias },
            { label: 'Timeframe', value: signal.timeframe },
            { label: 'Risk/Reward', value: signal.riskReward },
            { label: 'Volume', value: signal.volume },
            { label: 'Hit Rate', value: signal.hitRate, span: true },
          ].map((item) => (
            <div key={item.label} className={`bg-surface-clow border border-outline-variant/30 rounded-xl p-4 ${item.span ? 'col-span-2' : ''}`}>
              <span className="font-label text-[10px] text-on-surface-variant uppercase font-bold">{item.label}</span>
              <p className="font-data text-base text-on-surface font-semibold mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Levels */}
      <div className="flex flex-col gap-4">
        <h2 className="font-title text-base text-on-surface font-semibold">Key Analysis Points</h2>
        <div className="bg-surface-clow border border-outline-variant/30 rounded-xl p-5 flex flex-col gap-3">
          {analysisPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
              <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              {point}
            </div>
          ))}
        </div>
      </div>

      {/* Action */}
      {signal.status === 'active' && (
        <Link to="/trade" className="bg-primary text-on-primary font-title text-base py-4 rounded-full w-full text-center font-bold hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 mb-4">
          Open Trade Terminal <ArrowRight className="w-5 h-5" />
        </Link>
      )}

      {signal.status === 'hit_tp' && (
        <div className="bg-profit/10 border border-profit/20 rounded-xl p-4 text-center mb-4">
          <span className="font-title text-base text-profit font-bold">Target achieved — +24.5 pips</span>
        </div>
      )}
    </div>
  )
}
