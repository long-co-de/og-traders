import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'
import TopBar from './TopBar'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex min-h-dvh bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64 min-h-dvh">
        <TopBar />
        <main className="flex-1 pt-16 pb-20 px-5 max-w-2xl mx-auto w-full lg:pt-8 lg:pb-8">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
