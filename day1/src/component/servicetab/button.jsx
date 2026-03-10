import React from 'react'

const Button = ({text}) => {
  return (
    <div className='rounded-xl h-12 w-24 justify-center flex items-center bg-black p-1 text-white hover:bg-gray-700 hover:cursor-pointer'>
       <span className='font-medium'>{text}</span>
    </div>
  )
}

export default Button