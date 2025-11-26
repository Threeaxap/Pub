import React from "react";
import { Outlet, Link } from "react-router-dom";
import { data } from "../data/data";
import '../components/card/Layout.css'
// import Footer from "../components/Navigation/Footer";



export default function Layout() {
	return (
		<>
            <div className="navbar">
                <h1 class='ml-[40px]'>LOGO</h1>
                <div class='prof'>
                    <div>
                        {data.images.filter(item => item.id == 2).map(item =>(
                            <img class='icon' key={item.id} src={item.image} alt="" />
                        ))}
                    </div>
                    <div>
                        {data.images.filter(item => item.id == 5).map(item =>(
                            <img class='icon' key={item.id} src={item.image} alt="" />
                        ))}
                    </div>
                </div>
            </div>
            <Outlet/>
		</>
	);
}