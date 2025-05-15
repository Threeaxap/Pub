import React from 'react'
import { data } from '../data/navigationbar';

const Card = () => {
  return (
    <div class='grid grid-cols-6 gap-[24px]'>
       {data.products.map(item =>(
        <div key={item.id} class='items-end border-black border-[1px] w-fit p-[8px] rounded-[7px]'>
            <img src={item.img} class='w-[256px] border-[1px] border-black hover:scale-105 transition-transform' alt="" />
            <h2 class='text-[rgba(152,107,88)] my-[6px]'>{item.material}</h2>
            <h3 class='font-bold'>{item.name}</h3>
            <h4 class='text-[rgba(182,38,61)]'>${item.price}</h4>
        </div>
       ))} 
    </div>
  )
}

export default Card

