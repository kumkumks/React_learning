import React, { Children } from 'react'
import { cardData } from '../../content'


const Card = ({children}) => {
  return (
    <div className='flex justify-center flex-wrap'>
         {children}
    </div>
  )
}

export default Card