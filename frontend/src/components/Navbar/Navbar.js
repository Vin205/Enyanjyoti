/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const [isActive, setIsActive] = useState(false);
	const navigate = useNavigate();

	const toggleNavbar = () => {
		setIsActive(!isActive);
	};

	const closeNavbar = (path) => {
		setIsActive(false);
		if (path) {
			navigate(path);
		}
	};

	const handleClickEvent = () => {
		// Open the image in a new tab
		window.open("/images/e1.png", "_blank");
	};

	return (
		<nav className={`navbar`}>
			<div className="container">
				<img
					src="/images/e1.png"
					alt="Logo"
					className="logo"
					onClick={handleClickEvent}
				/>
				<button
					className="navbar-toggle"
					onClick={toggleNavbar}>
					☰ {/* Hamburger icon */}
				</button>
				<ul className="nav-links desktop-links">
					<li>
						<button onClick={() => navigate("/")}>Home</button>
					</li>
					<li>
						<button onClick={() => navigate("/about")}>About Us</button>
					</li>
					<li>
						<button onClick={() => navigate("/contact")}>Contact Us</button>
					</li>
					<li>
						<button onClick={() => navigate("/loan")}>Loan</button>
					</li>
				</ul>
			</div>
			<div className={`nav-menu ${isActive ? "active" : ""}`}>
				<button
					className="close-button"
					onClick={closeNavbar}>
					&times; {/* Close icon */}
				</button>
				<ul className="nav-links">
					<li>
						<button onClick={() => closeNavbar("/")}>Home</button>
					</li>
					<li>
						<button onClick={() => closeNavbar("/about")}>About Us</button>
					</li>
					<li>
						<button onClick={() => closeNavbar("/contact")}>Contact Us</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
