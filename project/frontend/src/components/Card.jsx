import { useState } from 'react';
import React from 'react'
import { data } from '../data/navigationbar';

const Card = () => {
  const [visible, setVisible] = useState(false);


    return (
      <div class='grid grid-cols-6 gap-[24px]'>
        {data.products.map(item =>(
          <div onMouseEnter={() => setVisible((v) => !v)} key={item.id} class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
              <img src={item.img} class='w-[300px] rounded-[4px]' alt="" />
              <h2 class='text-[rgba(152,107,88)] my-[6px]'>{item.material}</h2>
              <h3 class='font-bold'>{item.name}</h3>
              <h4 class='text-[rgba(182,38,61)]'>${item.price}</h4>
              {visible && (<div className='card_extra'>
                <p>1234</p>
              </div>
              )}        
          </div>
        ))} 
      </div>
    )
  }
export default Card

