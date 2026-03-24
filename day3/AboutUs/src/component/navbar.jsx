import React from 'react'
import AboutUsData from '../data'

const Navbar = () => {
  return (
    <div>
        <ul>
            {
                AboutUsData.nav.map((item)=>{
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Navbar