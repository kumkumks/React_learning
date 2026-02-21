import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Bagde from './bagde'
import { Card_data } from './card'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="text-black text-sm font-medium">{props.title}</h5>
        <h2 className=" text-black text-5xl font-medium mt-2">{props.value}</h2>
        <div className='flex items-center gap-2 mt-4'>
          {/* badge */}
          <div className='badge-container'>
            <Bagde key={props.id} trend={props.trend} />
          </div>
          <p className='badge-description'>Increased from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Card
