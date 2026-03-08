import React from 'react'

const Menu = () => {
  return (
    <div className='flex items-center'>
        <ul className='space-x-4 flex'>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer transition-all duration-300'>Home</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer transition-all duration-300'>About</li>
            <li className='text-gray-300 hover:text-green-500 cursor-pointer transition-all duration-300'>Contact</li>
        </ul>
    </div>
  )
}

export default Menu