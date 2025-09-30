import React, { useState } from 'react';
import { data } from '../../data/navigationbar'


export const Category_standart = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div
        
        onClick={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
    icon
        {isOpen && (<div className='dropsearch' class='flex justify-center absolute left-1/2 transform -translate-x-1/2 z-2 w-full'>
            <div class='flex-col  w-[45%] h-[400]'>
                <div class='flex'>
                </div>
                <div class='bg-black w-100% h-[1px] mt-[15px] mb-[40px]'></div>
                <div>
                    <div class='flex-col'>
                        <h2 class='text-[18px] mb-[10px]'>123</h2>
                        <h3>
                            123
                        </h3>
                        <h3>
                            123
                        </h3>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
  )
}