import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
    return (
        <div className='flex items-center text-white'>
            <FontAwesomeIcon icon={faGlobe} className='mr-2' />
            <h1 className='font-bold'>My Website</h1>
        </div>
    )
}

export default Logo