import { UserButton } from '@clerk/nextjs'


export default function DashboardLayout({children}) {
  return (
    <div className='h-screen w-screen relative'>
      <aside className='absolute left-0 top-0 h-full border-r border-black/10 w-[200px] p-6'>
        Mood
      </aside>
      <div className='ml-[200px] h-full'>
        <header className='p-6 border-b border-black/10'>
          <div className='h-full w-full flex items-center justify-end'>
            <div>
              <UserButton />
            </div>
          </div>
        </header>
        <div className='p-10 bg-zinc-400/10 h-[calc(100vh-80px)]'>
        {children}
        </div>
      </div>
     </div>
  )
}
