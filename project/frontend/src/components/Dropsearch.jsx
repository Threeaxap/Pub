import React, { useState } from 'react';
import { data } from '../data/navigationbar'
import { Outlet, Link } from "react-router-dom";


export const Dropsearch = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        
        onClick={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
    {data.images.filter(item => item.id == 3).map(item =>(
        <img key={item.id} src={item.image} alt="" />
    ))}
        {isOpen && (<div className='dropsearch' class='flex justify-center absolute left-1/2 transform -translate-x-1/2 z-2 bg-amber-100 w-full'>
            <div class='flex-col  w-[45%] h-[400]'>
                <div class='flex'>
                    <input inputmode="search" placeholder="Search..." class="flex-1 px-3 py-2 outline-0"></input>
                    <button class='w-fit' type='submit'>
                        {data.images.filter(item => item.id == 3).map(item =>(
                            <img key={item.id} src={item.image} alt="" />
                        ))}
                    </button>
                </div>
                <div class='bg-black w-100% h-[1px] mt-[15px] mb-[40px]'></div>
                <div>
                    <div class='flex-col'>
                        <h2 class='text-[18px] mb-[10px]'>ПРЕДЛОЖЕНИЯ</h2>
                        <h3>
                            <Link to='goods'>ПОПУЛЯРНОЕ</Link>
                        </h3>
                        <h3>
                            <Link to='goods'>НОВОЕ</Link>
                        </h3>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>)}
    </div>
  )
}
