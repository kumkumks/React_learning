import React from 'react'
import Logo from './logo'
import Menu from './menu'

const Navbar = () => {
  return (
    <div className='flex bg-black p-4 justify-between relative z-50'>
      <Logo />
      <Menu />
    </div>
  )
}

export default Navbar