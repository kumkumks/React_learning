import { useState } from 'react'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar/sidebar'
import Card from './component/card'
import Dashboard from './component/dashboard'



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
            <Dashboard />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
