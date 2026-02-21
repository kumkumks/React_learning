import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Bagde from './bagde'
import { Card_data } from './card'

const Card = (props) => {
  return (
    <div className="card w-60 border border-green-700 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-green-700 p-4" style={{ background: 'linear-gradient(to right, rgb(21, 128, 61), rgb(22, 101, 52))' }}>
        <h5 className="text-white text-sm font-medium">{props.title}</h5>
        <h2 className="text-white text-5xl font-medium mt-2">{props.value}</h2>
        <div className='flex items-center gap-2 mt-4'>
          {/* badge */}
          <div className='flex items-center gap-1 border-yellow-100 border-2 py-1 px-2 rounded-full w-max'>
                <Bagde key={props.id} trend={props.trend} />
          </div>
          <p className='text-yellow-100 font-extralight text-sm'>Increased from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Card
