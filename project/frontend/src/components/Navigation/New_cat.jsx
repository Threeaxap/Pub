import React, { useState } from 'react';
import { data } from '../../data/navigationbar';
import { Outlet, Link } from "react-router-dom";


export const New_cat = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        
        onClick={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
    <div class="text-[18px] text-brown text-left font-primary flex leading-none cursor-pointer">
                {data.categories.filter(item =>(item.id == 1)).map(item =>(
                    <h2 key={item.id}>{item.name}</h2>
                ))}
                {data.images.filter(item =>(item.id == 4)).map(item =>(
                    <img className='arrow' key={item.id} src={item.image} alt="" />
                ))}
    </div>
        {isOpen && (<div className='dropsearch' class='flex justify-center bg-white absolute left-1/2 top-[118px] transform -translate-x-1/2 z-2 w-full'>
            <div class='flex-col  w-[45%] h-[400]'>
                <div class='flex'>
                    <div>
                        <div class='flex-col'>
                            <Link to='goods'>
                                <h3 class='text-black'>НОВОЕ</h3>
                            </Link> 
                            <Link to='goods'>
                                <h3 class='text-black'>НОВОЕ</h3>
                            </Link> 
                        </div>
                    </div>
                    <div>
                        <h4 class="text-[16px] text-brown text-left leading-none font-quinary mb-4 uppercase">НОВОЕ В:</h4>                            
                            <Link className='link' to='goods'>
                                НОВОЕ
                            </Link> 
                            <Link to='goods'>
                                <h3 class='text-black'>НОВОЕ</h3>
                            </Link> 
                    </div>
                </div> 
            </div>
        </div>)}
    </div>
  )
}