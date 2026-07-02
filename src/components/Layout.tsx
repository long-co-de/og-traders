import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'
import TopBar from './TopBar'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <TopBar />
      <main className="flex-1 pt-16 pb-20 px-5 max-w-2xl mx-auto w-full">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
