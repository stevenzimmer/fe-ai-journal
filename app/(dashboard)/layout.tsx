import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='h-screen w-screen relative'>
      <aside className='absolute left-0 top-0 h-full border-r border-black w-[200px] p-6'>
        Mood
      </aside>
      <div className='ml-[200px]'>
        <header className='p-6 border-b border-black'>
          <div className='h-full w-full flex items-center justify-end'>
            <div>
              <UserButton />
            </div>
          </div>
        </header>
        <div className='p-6'>
        {children}
        </div>
      </div>
     </div>
  )
}
