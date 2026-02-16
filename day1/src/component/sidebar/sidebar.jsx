import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarSections } from './sidebar_data'
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className="w-64 h-dvh bg-gray-100 p-5">
            <div className='text-2xl flex justify-center items-center'>
                <FontAwesomeIcon icon={faStarOfDavid} />
                <h6 className='font-semibold'>Donezo</h6>
            </div>
            {
                sidebarSections.map(section => (
                    <div key={section.title} className="text-xs text-gray-500">
                        <p className='p-2 font-semibold mt-3'>{section.title}</p>
                        {
                            section.items.map(item => {
                                const isHovered = hoveredItem === item.id;
                                return (
                                    <div 
                                        key={item.id} 
                                        className={`menu-item sidebar flex gap-2 p-3 font-light ${isHovered ? 'hovered text-black font-medium' : ''}`}
                                        onMouseEnter={() => setHoveredItem(item.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <FontAwesomeIcon 
                                            icon={item.icon} 
                                            className={`icon text-[1rem] ${isHovered ? 'text-green-800' : ''}`} 
                                        />
                                        <p className='text-[1rem]'>{item.name}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
};


export default Sidebar