import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, CheckCircle, Play, ChevronRight, FileText, Star } from 'lucide-react'

const courseData = {
  id: 1, title: 'Price Action Mastery', module: 'Module 4',
  subtitle: 'Identifying Key Institutional Levels', duration: '45:20', completed: false,
  overview: 'In this core module, we dive into the mechanics of Smart Money Concepts (SMC). You will learn how to identify hidden liquidity pools and order blocks where institutional banks accumulate and distribute positions.',
  takeaways: [
    'Defining Fair Value Gaps (FVG) and their magnetic pull on price.',
    'Locating valid Order Blocks (OB) on higher timeframes (H4, Daily).',
    'Understanding the Asian Range accumulation and subsequent manipulation phases.',
  ],
  resources: [
    { name: 'Module Workbook PDF', type: 'pdf' },
    { name: 'Trading Plan Template', type: 'doc' },
    { name: 'Practice Chart Setups', type: 'img' },
  ],
  nextModule: { title: 'Module 5: Liquidity Sweeps', duration: '38:15' },
}

const tabs = ['Overview', 'Resources', 'Notes']

export default function CourseDetail() {
  useParams()
  const [activeTab, setActiveTab] = useState('Overview')
  const [isCompleted, setIsCompleted] = useState(courseData.completed)

  return (
    <div className="flex flex-col gap-6 animate-fade-in -mx-5 lg:mx-0">
      {/* Video Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-surface-cl to-surface-c">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-container transition-transform hover:scale-110">
            <Play className="w-7 h-7 ml-1 text-on-primary fill-on-primary" />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <Link to="/courses" className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </div>

      <div className="px-5 lg:px-0 flex flex-col gap-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-primary font-label tracking-wider">PRICE ACTION MASTERY · {courseData.module.toUpperCase()}</span>
          </div>
          <h1 className="font-headline text-xl text-on-surface font-bold mb-3">{courseData.subtitle}</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs flex items-center gap-1 text-on-surface-variant">
              <Clock className="w-3.5 h-3.5" /> {courseData.duration}
            </span>
            <button onClick={() => setIsCompleted(!isCompleted)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                isCompleted ? 'bg-surface-chigh text-on-surface border border-outline-variant' : 'bg-primary text-on-primary'
              }`}>
              <CheckCircle className="w-3.5 h-3.5" />
              {isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-outline-variant/30">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab ? 'text-on-surface' : 'text-on-surface-variant'
              }`}>
              {tab}
              {tab === 'Resources' && <span className="ml-1 text-xs text-on-surface-variant">({courseData.resources.length})</span>}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" />}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div className="flex flex-col gap-6">
            <div className="bg-surface-clow border border-outline-variant rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-primary" />
                <h3 className="font-title text-sm text-on-surface font-semibold">Lesson Summary</h3>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{courseData.overview}</p>
            </div>
            <div className="bg-surface-clow border border-outline-variant rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <h3 className="font-title text-sm text-on-surface font-semibold">Key Takeaways</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {courseData.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'Resources' && (
          <div className="flex flex-col gap-3">
            {courseData.resources.map((r, i) => (
              <div key={i} className="bg-surface-clow border border-outline-variant rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-surface-dim border border-outline-variant/30 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm text-on-surface font-medium">{r.name}</p>
                  <p className="text-xs uppercase text-on-surface-variant font-label font-bold">{r.type}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-on-surface-variant" />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Notes' && (
          <div className="bg-surface-clow border border-outline-variant rounded-xl p-5">
            <p className="font-body text-sm text-on-surface-variant">No notes yet. Start watching to take notes.</p>
          </div>
        )}

        {/* Next Module */}
        <div className="bg-surface-c border border-outline-variant/30 rounded-xl p-4 flex items-center justify-between mb-4">
          <div>
            <p className="font-label text-[10px] text-on-surface-variant uppercase mb-1 font-bold">UP NEXT</p>
            <p className="font-title text-sm text-on-surface font-semibold">{courseData.nextModule.title}</p>
          </div>
          <button className="w-10 h-10 rounded-lg bg-surface-dim border border-outline-variant/30 flex items-center justify-center">
            <Play className="w-4 h-4 text-primary fill-primary" />
          </button>
        </div>
      </div>
    </div>
  )
}
