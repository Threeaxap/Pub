import React from 'react'

export const Search = () => {
  return (
    <div>
        <div>
            <div>
                <input inputmode="search" placeholder="Search..." class="flex-1 px-3 py-2 outline-0"></input>
                <button type='submit'>
                    {data.images.filter(item => item.id == 3).map(item =>(
                        <img key={item.id} src={item.image} alt="" />
                    ))}
                </button>
            </div>
            <div class='bg-black w-100% h-[1px] opacity-20 mt-[15px] mb-[40px]'></div>
        </div>
    </div>
  )
}
