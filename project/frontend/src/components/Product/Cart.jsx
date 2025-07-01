import { useState } from 'react';
import React from 'react'
import { data } from '../../data/navigationbar';
import Modal from '@mui/material/Modal';

function CartList() {
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      function sum(data){
        let total = 0
        for(const item of data){
          total += item.price
        }
        return total
        
      }
    

    return (
      <div onClick={handleOpen}>
        {data.images.filter(item => item.id == 1).map(item =>(
            <img class='icon' key={item.id} src={item.image} alt="" />
        ))}
        <Modal
          open={open}
          onClose={handleClose}
        >
            <div class='absolute bg-white top-1/10 right-1/80 p-[28px] border-[1px] rounded-[6px] w-[20%] h-[88%]'>
                <div class='bg-black w-100% h-[1px] opacity-20 mb-[30px]'></div>
                <div className='cart_list'>
                  {data.cart_test.map(item =>(
                    <div key={item.id} className='cart_item'>
                        <img class='h-100% rounded-[6px] border-[1px]' src={item.img} alt="" />
                        <div class=' rounded-[6px] rounded-l-[0px] justify-end'>
                          <div class='flex justify-end mb-[6px]'>
                            <button>
                            {data.images.filter(item => item.id == 6).map(item =>(
                              <img className='cross-icon' key={item.id} src={item.image} alt="" />
                          ))}</button>
                          </div>
                            <div class='text-right'>
                              <h3 class='text-[14px]'>{item.name}</h3>
                              <div class='flex justify-end mt-[2px] gap-[8px]'>
                                <h3 className='size_but_2'>{item.color}</h3>
                                <h3 className='size_but_2'>{item.size}</h3>
                              </div>
                              <h4 class='price_in_cart'>{item.price} руб.</h4>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
                <div class='bg-black w-100% h-[1px] opacity-20 mt-[30px] mb-[6px]'></div>
                <div className='sum_div'>
                  <div class='flex justify-between'>
                    <h2 class='text-[20px]'>Итого:</h2>
                    <h2 class='text-[20px]'>{sum(data.cart_test)} руб.</h2>
                  </div>
                </div>
                <div class='bg-black w-100% h-[1px] opacity-20 mt-[6px] mb-[30px]'></div>
                <div class='flex justify-center'>
                  <button className='order_but'>ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>
        </Modal>
      </div>
    )
  }
  
  export default CartList