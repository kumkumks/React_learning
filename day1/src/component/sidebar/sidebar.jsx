import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sidebarSections } from './sidebar_data'
import { faAngleRight, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='flex gap-1'>
            <div className={`sidebars w-64 h-dvh bg-gray-100 p-5 transition-all ${open ? 'block' : 'hidden'}`}>
                <div className='text-2xl flex justify-center items-center'>
                    <FontAwesomeIcon icon={faStarOfDavid} className='text-green-900' />
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
            <div className='bg-gray-100 p-3 h-12 w-11 cursor-pointer relative z-10'
                    onClick={() => setOpen(!open)}
                >
                    <FontAwesomeIcon icon={faAngleRight} className='icon' />
                </div>
        </div>
    );
};


export default Sidebar