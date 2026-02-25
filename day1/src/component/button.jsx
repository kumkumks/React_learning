import React from 'react'

const Button = ({text}) => {
  return (
    <div className='flex items-center w-auto mt-1'>
       <button className='button-style me-2'>Add Project</button>
       <button className='button-style'>Import Data</button>
    </div>
  )
}

export default Button