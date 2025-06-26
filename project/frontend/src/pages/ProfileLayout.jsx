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
                <Link class='link-w' to="/cart">
                    <h2>КОРЗИНА</h2>
                </Link>
            </div>
            <div className='prof_but'>
                <Link class='link-w' to="/fav">
                    <h2>ИЗБРАННОЕ</h2>
                </Link>
            </div>
            <div className='prof_but'>
                <Link class='link-w' to="/orders">
                    <h2>ЗАКАЗЫ</h2>
                </Link>
            </div>
            </div>
        <div class='bg-black w-100% h-[1px] opacity-20 mt-[15px] mb-[30px]'></div>

        <Outlet/>
    </>
  )
}

export default ProfileLayout