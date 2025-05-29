import React from "react";
import { Outlet, Link } from "react-router-dom";
import { data } from "../data/navigationbar";
import { Dropsearch } from "../components/Dropsearch";
import Navigation_Menu from "../components/Navigation_Menu";
import { Category_standart } from "../components/Category_standart";
import { New_cat } from "../components/Navigation/New_cat";
import { Bestseller_cat } from "../components/Navigation/Bestseller_cat";
import { Cloth_cat } from "../components/Navigation/Cloth_cat";
import { Bra_cat } from "../components/Navigation/Bra_cat";
import { Underwear_cat } from "../components/Navigation/Underwear_cat";
import { Men_Cat } from "../components/Navigation/Men_cat";
import { Sale_cat } from "../components/Navigation/Sale_cat";
import Footer from "../components/Footer";


export default function Layout() {
	return (
		<>
            <div class='bg-black w-100% h-[1px] opacity-20 mt-[10px] mb-[15px]'></div>
                <div class="justify-between flex items-center">
                    <h1 class='ml-[40px]'>LOGO</h1>
                    <div class='flex gap-[20px]'>
                        <New_cat/>
                        <Bestseller_cat/>
                        <Cloth_cat/>
                        <Bra_cat/>
                        <Underwear_cat/>
                        <Men_Cat/>
                        <Sale_cat/>
                    </div>
                    <div class='mr-[40px] flex items-center gap-[28px]'>
                        <Link to="/login">
                            {data.images.filter(item => item.id == 2).map(item =>(
                                <img class='icon' key={item.id} src={item.image} alt="" />
                            ))}
                        </Link>
                        <Link to="goods">
                            {data.images.filter(item => item.id == 5).map(item =>(
                                <img class='icon' key={item.id} src={item.image} alt="" />
                            ))}
                        </Link>
                        <Link to="goods">
                            {data.images.filter(item => item.id == 1).map(item =>(
                                <img class='icon' key={item.id} src={item.image} alt="" />
                            ))}
                        </Link>
                    </div>
                </div>
                <div class='bg-black w-100% h-[1px] opacity-20 mt-[15px] mb-[30px]'></div>
                <Outlet/>
		</>
	);
}
