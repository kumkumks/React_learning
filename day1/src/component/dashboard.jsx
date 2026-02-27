import React from 'react'
import Card from './card/card.jsx'
import { Card_data } from './card/card.js'
import BarChart from './chart.jsx'
import Bagde from './card/bagde'
import Button from './button.jsx'

const Dashboard = () => {
  return (
    <div className='bg-gray-100 mt-2 w-full flex justify-center lg:justify-start flex-wrap  p-2.5  gap-4'>
      {
        Card_data.map(card => (
          <div key={card.id} className='group bg-white w-64 h-32 rounded-xl shadow p-4 flex flex-col justify-between hover:bg-gradient-to-br hover:from-green-700 hover:to-green-800 transition duration-300'>
            <Card trend={card.trendValue}>
              <h3 className='text-lg font-bold group-hover:text-white'>{card.title}</h3>
              <h1 className='text-2xl font-bold group-hover:text-white'>{card.value}</h1>
              <Bagde trendValue={card.trendValue} />
              <p className='text-sm text-gray-500 group-hover:text-white'>{card.trendText}</p>
            </Card>
          </div>
        ))
      }
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-4">
        <div className="bg-white flex-1 rounded-xl shadow p-4">
          <BarChart />
        </div>
        <div className='bg-white flex-1 md:max-w-md rounded-xl shadow p-4'>
          <Card>
            <h5 className='text-black font-bold mb-2 text-lg'>Remainders</h5>
            <h1 className='text-green-800 text-2xl font-medium'>Meeting with Arc Company</h1>
            <p className='text-gray-600 '>Time:02.00pm-04.00pm</p>
            <Button text='Start Meeting' />
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Dashboard