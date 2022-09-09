import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const [activeHam, setActiveHam] = useState(false);
	const menuItems = (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/HouseList">Services</NavLink>
			<NavLink to="/About">About</NavLink>
			<NavLink to="/Signin1">Sign in</NavLink>
		</>
	);
	return (
		<div className="navbar-container">
			<nav>
				<div className="nav-container">
					<h1 className="nav-brand">Servini .</h1>
					<div className="menu">{menuItems}</div>
					<button
						className={activeHam ? "hamburger active-hamburger" : "hamburger"}
						onClick={() => setActiveHam(!activeHam)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
			{activeHam && <div className="nav-dropdown">{menuItems}</div>}
		</div>
	);
};

export default NavBar;