import React from 'react'

const Title = ({text,className}) => {
  return (
    <div className={className}>
        <h1 className='font-bold text-2xl text-gray-700'>{text}</h1>
    </div>
  )
}

export default Title