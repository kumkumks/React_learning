import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'


const Bagde = ({trend}) => {
  return (
    <>
         <span className='text-yellow-100 font-medium text-sm'>{trend}%</span>
         <FontAwesomeIcon icon={faAngleUp} className='text-yellow-100 text-xs' />
    </>
  )
}

export default Bagde