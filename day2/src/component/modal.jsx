import React, { useState } from 'react'

const Modal = ({dispatch,todo}) => {
  const[input,setInput]=useState({
    taskName:'',
    taskDesc:'',
    Image:null
  })

  const handleSubmit=()=>{
    console.log(input);
    todo((prevTodo) => [...prevTodo, input]);
    setInput({
      taskName:'',
      taskDesc:'',
      Image:null
    });
    dispatch({type:'Close'});
  }

  return (
    <div className='fixed top-20 left-1/2 transform -translate-x-1/2 z-50'>
      <div className='bg-white text-black p-5 w-96 rounded-md shadow-2xl border-2 border-gray-300'>
       <div>
        <div className='flex'>
          <h1>Add your Task</h1>
          <button className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ml-auto'
          onClick={() => dispatch({type:'Close'})}
          >back</button>
        </div>  
         <label htmlFor="taskName" className='block text-sm font-medium text-black mb-1'>Task Name</label>
         <input id="taskName" 
          type="text"
          value={input.taskName}
          placeholder="Task name" 
          className=' text-black placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black-500' 
          onChange={(e)=>{setInput({...input, taskName: e.target.value})}}
           />
         <label htmlFor="taskDesc" className='block text-sm font-medium text-black mb-1 mt-3'>Task Description</label>
         <textarea
          id="taskDesc" 
          placeholder="Task description" 
          value={input.taskDesc}
          className='bg-white text-black placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black-500'
          onChange={(e)=>{setInput({...input, taskDesc: e.target.value})}}
         />
         <label htmlFor="image" className='block text-sm font-medium text-black mb-1 mt-3'>Image</label>
         <input 
         id="image" 
         type="file"
         className='bg-white text-black placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black-500'
          onChange={(e)=>{setInput({...input, Image: e.target.files[0]})}}
           />
         <button 
         onClick={handleSubmit}
         className='bg-blue-700 px-4 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300 mt-3'>Add Task</button>
       </div>
      </div>
    </div>
  )
}

export default Modal