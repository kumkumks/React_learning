import React from 'react'
import { MenuData } from '../../content'

const Menu = () => {
  return (
    <div className='flex items-center'>
        <ul className='space-x-4 flex'>
           {MenuData.map((item) => (
            <li key={item.id} className='text-white font-bold hover:text-orange-400 cursor-pointer transition duration-300'>
              {item.name}
            </li>
           ))}
        </ul>
    </div>
  )
}

export default Menu