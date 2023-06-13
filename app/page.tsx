import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@clerk/nextjs'
export default async function Home() {

  const {userId} = await auth();
  let href = userId ? '/journal' : '/new-user';

  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center text-white'>
      <div className='text-center max-w-2xl w-full mx-auto'>
        <h1 className='text-6xl mb-6'>
          Your Mood Journal App
        </h1>
        <p className='text-2xl mb-3'>
          This is the best journal app for mood tracking and journaling.
        </p>
        <div>
          <Link href={href}>
            <button className='bg-emerald-500 px-6 py-2 rounded text-xl'>
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
