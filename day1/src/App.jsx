import { useState } from 'react'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar/sidebar'
import Card from './component/card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div>
        <div className='flex gap-3'>
          <div>
            <Sidebar />
          </div>
          <div>
            <Navbar />
            <Card />
          </div>

        </div>

        <h1 className='text-3xl font-bold underline text-center text-red-500'>
          Hello world!
        </h1>
      </div>

    </div>
  )
}

export default App
