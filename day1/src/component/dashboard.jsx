import React from 'react'
import Card from './card/card.jsx'
import { Card_data } from './card/card.js'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 p-2.5 flex flex-wrap gap-4 mt-2 w-full'>
      {
        Card_data.map(card => (
          <Card key={card.id} title={card.title} value={card.value} trend={card.trendValue} />
        ))
      }
    </div>
  )
}

export default Dashboard