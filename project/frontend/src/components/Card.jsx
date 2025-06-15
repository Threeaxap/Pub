import { useState } from 'react';
import React from 'react'
import { data } from '../data/navigationbar';
import Modal from '@mui/material/Modal';


const Card = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div class='grid grid-cols-6 gap-[24px]'>
        {data.products.map(item =>(
          <div onClick={handleOpen} key={item.id}> 
              <div class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
                <img src={item.img} class='w-[300px] rounded-[4px]' alt="" />
                <h3 class='font-bold'>{item.name}</h3>
                <h4 class='text-[rgba(182,38,61)]'>${item.price}</h4>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <div class='absolute bg-white top-1/4 left-1/4 p-[28px] rounded-[6px]'>
                  <div class='flex'>
                    <img  class='w-[300px] rounded-[4px]' src={item.img} alt="" />
                    <div class='ml-[40px]'>
                      <h2 class='text-black my-[6px]'>{item.name}</h2>
                      <div class='flex gap-[10px] mt-[20px]'>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-black'></div>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-slate-200'></div>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-orange-100'></div>
                      </div>
                      <div class='mt-[10px] mb-[40px]'>
                          <h3>Размеры:</h3>
                          <div class='grid grid-cols-6 gap-[8px] pt-[4px]'>
                            <div className='size_but'>100b</div>
                            <div className='size_but'>100b</div>
                            <div className='size_but'>100b</div>
                            <div className='size_but'>100b</div>
                            <div className='size_but'>100b</div>
                          </div>                          
                      </div>
                      <h4 class='text-[22px] mb-[10px]'>{item.price}</h4>
                      <button className='order_but'>
                        ДОБАВИТЬ В КОРЗИНУ
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>      
          </div>
        ))} 
      </div>
    )
  }
export default Card

