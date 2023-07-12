import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between gap-x-80'>
        <button>
            home
        </button>
        <button>
            about me
        </button>
        <button>
            portfolio
        </button>
    </div>
  )
}

export default Header