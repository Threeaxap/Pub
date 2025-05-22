import React from "react";
import { Outlet, Link } from "react-router-dom";
import { data } from "../data/navigationbar";

export default function Layout() {
	return (
		<><div class='bg-black w-100% h-[1px] opacity-20 mt-[30px] mb-[15px]'></div>
		    <div class="justify-between flex items-center">
                <h1 class='ml-[40px]'>LOGO</h1>
                <ul class="flex gap-1.5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    </li>
                </ul>
                <div class='mr-[40px]'>
                    <Link to="/login">
                        {data.images.filter(item => item.id == 2).map(item =>(
                            <img key={item.id} src={item.image} alt="" />
                        ))}
                    </Link>
                </div>
            </div>
            <div class='bg-black w-100% h-[1px] opacity-20 mt-[15px] mb-[30px]'></div>
            <Outlet/>
		</>
	);
}
