import React from 'react'

const Card = ({ carddata, index, source, onDragStart, onDragOver, onDrop }) => {
  return (
    <div 
      className='bg-white rounded-xl shadow-md p-5 w-full mb-4 cursor-move hover:shadow-xl transition-shadow'
      draggable
      onDragStart={() => onDragStart(index, source)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={() => onDrop(index, source)}
    >
       <h1>{carddata.taskName}</h1>
        <p>{carddata.taskDesc}</p>
        {carddata.Image && <img src={URL.createObjectURL(carddata.Image)} alt="Task" className='mt-3' />}
    </div>
  )
}

export default Card