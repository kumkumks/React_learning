import React from 'react'
import viteLogo from '/vite.svg'
import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const toggle = () => {

  }
  return (
    <div className='w-full'>
      <nav className='bg-gray-100 max-w-full rounded text-white p-4 flex justify-between items-center'>
        <div className='w-full'>
          <input className='bg-white w-[50%] text-black rounded px-4 py-2' placeholder='Search...' />
        </div>
        <div className='flex items-center gap-4  justify-between rounded-2xl'>
          <div className='bg-white rounded-3xl p-3 ms-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-gray-500 text-lg' />
          </div>
          <div className='bg-white rounded-3xl p-3 me-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-gray-500 text-lg' />
          </div>
          <div className='rounded-3xl p-3 ms-2 bg-white'>
            <img src='.../assets/image44.png' />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar