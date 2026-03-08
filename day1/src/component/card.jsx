import React, { Children } from 'react'

import card1 from '../assets/card1.jfif'
import card2 from '../assets/card2.jfif'



const Card = ({children}) => {
  return (
    <div className='flex justify-center flex-wrap'>
         {children}
    </div>
  )
}

export default Card