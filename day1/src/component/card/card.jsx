import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { Card_data } from './card'

const Card = ({ children, className = '' }) => {
  return (
    <div className="">
      <div className={`rounded-xl  ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Card
