import Image from 'next/image'
import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center place-content-center h-screen gap-x-8">
      <Header />
      <div className='flex flex-row items-center place-content-center gap-x-8'>
        <div>
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
            <span className="text z-10 text-[#cbd5e1]">Picture of Me</span>
          </button>
        </div>
        <div className='flex flex-col gap-y-3'>
        <div>
          <h1>
          Hello, I am Ayush, welcome to my world!!
          </h1>
        </div>
        <div>
          Freelanccer and Ex-Associate 2 @ PwC
        </div>
        <ul className='gap-y-2'>
          <li>Tech Enthusiast</li>
          <li>Based in India</li>
          <li>Coffee Lover</li>
          <li>ayushkedia1990@gmail.com</li>
        </ul>
        <div className='flex flex-row gap-x-2'>
          <a>Linkedin</a>
          <a>Github</a>
          <a>Leetcode</a>
          <a>Instagram</a>
        </div>
        </div>
        </div>
        <Footer />
    </main>
  )
}
