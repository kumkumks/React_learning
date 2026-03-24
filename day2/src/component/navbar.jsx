import React from 'react'


const Navbar = ({dispatch}) => {
  return (
    <div className='bg-white p-5 h-16 flex items-center justify-between font-bold shadow-lg relative z-[100]'>
        <h1 className='text-2xl font-medium m-2 text-black'>Todo App</h1>
        <button onClick={() => dispatch({type:'Open'})}
        className='bg-blue-700 px-4 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300'>Create</button>
    </div>

  )
}

export default Navbar