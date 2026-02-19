import { faAngleUp, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = () => {
  return (
    <div className="card w-60 border-green-700 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-green-700 to-green-800  p-4 ">
        <h5 className="text-white text-sm font-medium">Total Projects</h5>
        <h2 className="text-white text-5xl font-medium mt-2">24</h2>
        <div className='flex items-center gap-2 mt-4'>
          <div className='flex items-center gap-1 border-yellow-100 border-2 py-1 px-2 rounded-full'>
            <span className='text-yellow-100 font-medium text-sm'>3</span>
            <FontAwesomeIcon icon={faLocationArrow} className='text-yellow-100 text-xs' />
          </div>
          <p className='text-yellow-100 font-extralight text-sm'>Increased from last month</p>
        </div>
      </div>
    </div>

  )
}

export default Card