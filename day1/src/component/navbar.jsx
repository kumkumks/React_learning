import React from 'react'
import viteLogo from '/vite.svg'
import Button from './button'

const Navbar = () => {
  const toggle=()=>{
    
  }
  return (
    <div className='w-full'>
        <nav className='bg-gray-100 max-w-full rounded text-white p-4 flex justify-between items-center'>
            <Button />
        </nav>
    </div>
  )
}

export default Navbar