import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Layout() {
	return (
		<>
			<div class="justify-between flex">
                <Navbar/>
                <ul class="flex gap-1.5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
		</>
	);
}
