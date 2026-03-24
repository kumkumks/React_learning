import React, { useReducer , useState } from 'react'
import Navbar from './component/navbar'
import Modal from './component/modal'
import Card from './component/card'

  function reducer(state,action){
    switch(action.type){
      case 'Open':
        return{ShowModal:true};
      case 'Close':
        return{ShowModal:false};
    };

  }

const App = () => {
  
  const[state,dispatch]=useReducer(reducer,{
    ShowModal:false
  })
 
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [draggedItem, setDraggedItem] = useState(null)

  const handleDragStart = (index, source) => {
    setDraggedItem({ index, source })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (dropIndex, targetSource) => {
    if (draggedItem === null) return
    
    const sourceList = draggedItem.source === 'inProgress' ? [...inProgressTasks] : [...completedTasks]
    const targetList = targetSource === 'inProgress' ? [...inProgressTasks] : [...completedTasks]
    
    const item = sourceList[draggedItem.index]
    
    // Remove from source
    sourceList.splice(draggedItem.index, 1)
    
    // Add to target
    if (draggedItem.source === targetSource) {
      // Same list, just reorder
      targetList.splice(dropIndex, 0, item)
    } else {
      // Different list, add to end or specific position
      targetList.push(item)
    }
    
    // Update states
    if (draggedItem.source === 'inProgress') {
      setInProgressTasks(sourceList)
    } else {
      setCompletedTasks(sourceList)
    }
    
    if (targetSource === 'inProgress') {[[]]
      setInProgressTasks(draggedItem.source === targetSource ? targetList : [...inProgressTasks, item])
    } else {
      setCompletedTasks(draggedItem.source === targetSource ? targetList : [...completedTasks, item])
    }
    
    setDraggedItem(null)
  }

  const handleDropZone = (targetSource) => {
    if (draggedItem === null) return
    
    const sourceList = draggedItem.source === 'inProgress' ? [...inProgressTasks] : [...completedTasks]
    const item = sourceList[draggedItem.index]
    
    // Remove from source
    sourceList.splice(draggedItem.index, 1)
    
    // Update source
    if (draggedItem.source === 'inProgress') {
      setInProgressTasks(sourceList)
      setCompletedTasks([...completedTasks, item])
    } else {
      setCompletedTasks(sourceList)
      setInProgressTasks([...inProgressTasks, item])
    }
    
    setDraggedItem(null)
  }

  return (
    <div className='bg-black min-h-screen'>
      <Navbar dispatch={dispatch}/>
      {state.ShowModal && <Modal dispatch={dispatch} todo={setInProgressTasks} />}
      
      <div className='grid grid-cols-2 gap-4 p-5'>
        {/* In Progress Section */}
        <div 
          className='bg-gray-900 p-5 rounded-lg min-h-[500px]'
          onDragOver={handleDragOver}
          onDrop={() => handleDropZone('inProgress')}
        >
          <h1 className='text-white text-2xl font-bold mb-4'>In Progress</h1>
          {inProgressTasks.map((item, index) => (
            <Card 
              key={index} 
              carddata={item} 
              index={index}
              source="inProgress"
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </div>

        {/* Completed Section */}
        <div 
          className='bg-gray-900 p-5 rounded-lg min-h-[500px]'
          onDragOver={handleDragOver}
          onDrop={() => handleDropZone('completed')}
        >
          <h1 className='text-white text-2xl font-bold mb-4'>Completed</h1>
          {completedTasks.map((item, index) => (
            <Card 
              key={index} 
              carddata={item} 
              index={index}
              source="completed"
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App