import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Account_DM from "../components/Account_DM";

export default function Layout() {
	return (
		<>
			<div class="justify-between flex">
                <ul class="flex gap-1.5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
            <Outlet/>
		</>
	);
}
