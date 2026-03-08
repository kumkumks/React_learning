import React from 'react'


const Tab = ({children , className}) => {
  return (
    <div className={`flex flex-wrap p-5 m-3 rounded-2xl' ${className}`}>
     {children}
    </div>
  )
}

export default Tab