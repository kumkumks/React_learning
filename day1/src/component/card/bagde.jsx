import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Bagde = ({trend}) => {
  return (
    <div className='badge-wrapper group-hover:text-white'>
      <FontAwesomeIcon icon={faAngleUp} className='badge-icon group-hover:text-white' />
      <span className='badge-text group-hover:text-white'>{trend}</span>
    </div>
  )
}

export default Bagde