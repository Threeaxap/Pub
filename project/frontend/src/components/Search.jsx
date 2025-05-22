import React from 'react'
import { data } from '../data/navigationbar'
import { Outlet, Link } from "react-router-dom";

export const Search = () => {
  return (
    <div>
        <div class='flex justify-center bg-amber-100'>
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
                    <div>
                        <h2>ПРЕДЛОЖЕНИЯ</h2>
                        <Link to='goods'>ПОПУЛЯРНОЕ</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
