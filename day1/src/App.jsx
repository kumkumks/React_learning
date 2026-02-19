import { useState } from 'react'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar/sidebar'
import Card from './component/card'
import Dashboard from './component/dashboard'
import Header from './component/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div>
        <div>
          <div className=' flex'>
            <Sidebar />
             <Navbar />
          </div>
          <div>
            <Header />
            <Dashboard />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
