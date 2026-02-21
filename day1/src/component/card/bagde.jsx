import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Bagde = ({trend}) => {
  return (
    <div className='badge-wrapper'>
      <FontAwesomeIcon icon={faAngleUp} className='badge-icon' />
      <span className='badge-text'>{trend}</span>
    </div>
  )
}

export default Bagde