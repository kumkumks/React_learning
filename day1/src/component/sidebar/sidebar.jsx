import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarSections } from './sidebar_data'
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    return (
        <div className="w-64 h-dvh bg-gray-100 p-5">
            <div className='text-2xl flex justify-center items-center'>
                <FontAwesomeIcon icon={faStarOfDavid} className='icon' />
                <h6 className='font-semibold'>Donezo</h6>
            </div>
            {
                sidebarSections.map(section => (
                    <div key={section.title} className="text-xs text-gray-500">
                        <p className='p-2 font-semibold mt-3'>{section.title}</p>
                        {
                            section.items.map(item => {
                                return (
                                    <div 
                                        key={item.id} 
                                        className="menu-item sidebar flex gap-2 p-3 font-light text-gray-700"
                                    >
                                        <FontAwesomeIcon 
                                            icon={item.icon} 
                                            className="icon text-[1rem]" 
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