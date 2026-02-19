import React from 'react'
import Card from './card'
import Button from './button'

const Header = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row bg-gray-100 p-3 justify-between mb-5 mt-3'>
        <div>
          <h1 className='text-2xl font-semibold text-gray-700'>Dashboard</h1>
          <p className='font-light text-green-900'>Plain,prioritize,and accomplish your task with ease</p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </>
  )
}

export default Header