import React from 'react'

const Button = () => {
  return (
    <div className='flex justify-between items-center w-auto'>
      <button className='bg-transparent text-black hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded me-2 transition-colors duration-200'>Sign Up</button>  
      <button className='bg-transparent text-black hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded ms-2 transition-colors duration-200'>Register</button>  
    </div>
  )
}

export default Button