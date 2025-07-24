import React from 'react'
import { Outlet, Link } from "react-router-dom";


const ProfileLayout = () => {
  return (
    <>
        <div class='bg-black w-100% h-[1px] opacity-20 mt-[100px]'></div>
        <div class='profile_layout'>
            <div className='prof_cat_div'>
                <div className='prof_cat_but'>
                    <Link to="info">
                        <h2 class='title_w_shadow_p'>О ВАС</h2>
                    </Link>
                </div>
                <div className='prof_cat_but'>
                    <Link to="cart">
                        <h2 class='title_w_shadow_p'>КОРЗИНА</h2>
                    </Link>
                </div>
                <div className='prof_cat_but'>
                    <Link to="fav">
                        <h2 class='title_w_shadow_p'>ИЗБРАННОЕ</h2>
                    </Link>
                </div>
                <div className='prof_cat_but'>
                    <Link to="orders">
                        <h2 class='title_w_shadow_p'>ЗАКАЗЫ</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div class='bg-black w-100% h-[1px] opacity-20 mb-[100px]'></div>

        <Outlet/>
    </>
  )
}

export default ProfileLayout