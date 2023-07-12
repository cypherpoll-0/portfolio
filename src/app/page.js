import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-row items-center place-content-center h-screen p-4">
      <div>
        <div>
          pic
        </div>
        <div className='flex gap-x-8 p-3'>
        <div>
          bio
        </div>
        <div>
          this section will be about me and me only
        </div>
        </div>
      </div>
    </main>
  )
}
