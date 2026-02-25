import React from 'react'
import Card from './card/card.jsx'
import { Card_data } from './card/card.js'
import BarChart from './chart.jsx'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 mt-2 w-full flex justify-center lg:justify-start flex-wrap  p-2.5  gap-4'>
        {
          Card_data.map(card => (
            <Card key={card.id} title={card.title} value={card.value} trend={card.trendValue} />
          ))
        }
      <div className="bg-white flex w-full h-96 rounded-xl shadow p-4">
        <BarChart />
        
      </div> 
    </div>
  )
}

export default Dashboard