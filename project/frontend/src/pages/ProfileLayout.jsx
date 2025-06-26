import React from 'react'
import { Outlet, Link } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
        <div class='bg-black w-100% h-[1px] opacity-20 mt-[10px] mb-[15px]'></div>
        <div class='justify-center gap-[60px] flex items-center'>
            <div className='prof_but'>
                <Link class='link-w' to="/">
                    <h2>НА ГЛАВНУЮ</h2>
                </Link>
            </div>
            <div className='prof_but'>
                КОРЗИНА
            </div>
            <div className='prof_but'>
                ИЗБРАННОЕ
            </div>
            <div className='prof_but'>
                ЗАКАЗЫ
            </div>
            </div>
        <div class='bg-black w-100% h-[1px] opacity-20 mt-[15px] mb-[30px]'></div>

        <Outlet/>
    </>
  )
}

export default ProfileLayout