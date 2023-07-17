import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex flex-row justify-between gap-x-80'>
      <Link href='/about_me'>
        <button>
            about me
        </button>
        </Link>
      <Link href='/'>
        <button>
            home
        </button>
      </Link>
        <Link href='/projects'>
        <button>
            portfolio
        </button>
        </Link>
    </div>
  )
}

export default Header