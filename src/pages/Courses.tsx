import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, BookOpen, Play, Star } from 'lucide-react'
import Input from '../components/ui/Input'

const categories = ['All', 'Beginner', 'Advanced', 'Technical Analysis', 'Mindset']

const courses = [
  {
    id: 1, title: 'Forex Fundamentals', lessons: 12, duration: '3h 45m', level: 'Beginner', premium: false,
    desc: 'The essential building blocks for understanding currency markets, major pairs, and session timings.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80'
  },
  {
    id: 2, title: 'The Psych of Trading', lessons: 8, duration: '2h 15m', level: 'Advanced', premium: true,
    desc: 'Master your emotions, manage risk effectively, and develop the mindset of a consistently profitable trader.',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=400&q=80'
  },
]

const continueLearning = {
  id: 1, course: 'Price Action Mastery', module: 'Module 4: Identifying Key Institutional Levels',
  progress: 65, timeLeft: '24m left',
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex flex-col gap-6 py-4 animate-fade-in">
      <div>
        <h1 className="font-headline text-[28px] text-on-surface font-semibold">Academy</h1>
        <p className="font-body text-sm text-on-surface-variant mt-1">Master the markets, one module at a time.</p>
      </div>

      <Input
        icon={<Search />}
        type="text"
        placeholder="Search courses, modules..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full font-label text-xs font-bold border transition-colors ${
              activeCategory === cat
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'bg-surface-variant/50 text-on-surface-variant border-outline-variant/50 hover:bg-surface-variant'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <section className="flex flex-col gap-2">
        <h2 className="font-title text-base text-on-background font-semibold">Continue Learning</h2>
        <div className="bg-surface-clow border border-outline-variant rounded-xl p-5 flex flex-col gap-5 border-l-4 border-l-primary shadow-lg">
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden relative shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 right-2 bg-black/80 w-6 h-6 rounded-full text-white flex items-center justify-center border border-white/20">
                <Play className="w-3.5 h-3.5 fill-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center flex-grow">
              <span className="font-label text-xs text-primary mb-1 tracking-wider font-bold">Price Action Mastery</span>
              <h3 className="font-title text-base font-semibold text-on-background leading-snug mb-3">{continueLearning.module}</h3>
              <div className="flex items-center justify-between text-on-surface-variant font-data text-xs">
                <span className="text-primary font-bold">{continueLearning.progress}%</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {continueLearning.timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface-chighest h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full shadow-[0_0_10px_rgba(242,202,80,0.5)]" style={{ width: `${continueLearning.progress}%` }} />
          </div>
          <Link to={`/courses/${continueLearning.id}`} className="w-full bg-primary text-on-primary font-title text-sm font-bold py-3 rounded-lg active:scale-[0.98] transition-all hover:bg-primary-container shadow-md text-center block">
            Resume Module
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between items-end">
          <h2 className="font-title text-base text-on-background font-semibold">Featured Courses</h2>
          <Link to="/courses" className="text-primary font-label text-xs font-bold hover:opacity-80 transition-opacity">View All</Link>
        </div>
        {courses.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}
            className="bg-surface-clow border border-outline-variant rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:border-primary/50 transition-all shadow-md hover:shadow-lg">
            <div className="h-40 w-full bg-surface-variant relative overflow-hidden">
              <img alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src={course.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
              {course.premium ? (
                <div className="absolute top-3 left-3 bg-surface-chighest/90 backdrop-blur-sm border border-primary/30 text-primary px-2.5 py-1 rounded-md font-label text-[10px] flex items-center gap-1 shadow-sm font-bold tracking-wider">
                  <Star className="w-3 h-3 fill-primary" /> PREMIUM
                </div>
              ) : (
                <div className="absolute top-3 left-3 bg-primary text-on-primary px-2.5 py-1 rounded-md font-label text-[10px] shadow-sm font-bold tracking-wider">NEW</div>
              )}
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-title text-xl font-semibold text-on-background group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="font-body text-sm text-on-surface-variant line-clamp-2 mt-1">{course.desc}</p>
              <div className="flex items-center gap-5 mt-4 pt-4 border-t border-outline-variant/30">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <BookOpen className="w-[18px] h-[18px] text-primary" />
                  <span className="font-data text-[13px]">{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <Clock className="w-[18px] h-[18px] text-primary" />
                  <span className="font-data text-[13px]">{course.duration}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
