import React from 'react'

export default function EntryCard({entry}) {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className='dividy-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow p-6'>
      <div className='px-4 py-5 sm:px-6'>
        {date}
      </div>
      <div className='px-4 py-5 sm:px-6'>
        {entry.analysis?.summary}

      </div>
      <div className='px-4 py-5 sm:px-6'>
        {entry.analysis?.mood}
        
      </div>
  
    </div>
  )
}
