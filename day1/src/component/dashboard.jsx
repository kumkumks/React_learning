import React from 'react'
import Card from './card'
import { Card_data } from './card/card'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 p-2.5 flex flex-wrap gap-4 mt-2 w-full'>
      {
        Card_data.map(card => (
          <Card key={card.id} title={card.title} value={card.value} />
        ))
      }
    </div>
  )
}

export default Dashboard