import React from 'react'
import header from '../../assets/header.jfif'
const Header = () => {
    return (
        <div className='relative h-screen'>
            <img
                // src="https://i.pinimg.com/736x/41/67/e9/4167e99030267e03f2d6fb67b66588ce.jpg"
                src={header}
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className='absolute inset-0 flex items-center justify-center z-10'>
                <h1 className='text-4xl text-white font-bold'>Welcome to My Website</h1>
            </div>
        </div>
    )
}

export default Header