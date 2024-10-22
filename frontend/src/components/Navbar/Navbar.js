import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom"; // Import NavLink for active links
import "./Navbar.css";
import { IoIosMoon } from "react-icons/io";
import { HiOutlineSun } from "react-icons/hi";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/loan", label: "Loan" },
  { path: "/", label: "Loan" },
  { path: "/contributors", label: "Contributors" },
];

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNavbar = () => setIsActive((prev) => !prev);
  const closeNavbar = () => setIsActive(false);
  const handleLogoClick = () => {
    navigate('/');
    closeNavbar();
  };

  const renderNavLink = ({ path, label }) => (
    <li className="nav-item" key={path}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")}
        onClick={closeNavbar}
      >
        <span className="nav-link">{label}</span>
      </NavLink>
    </li>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <span>
          <img
            src="/images/e1.png"
            alt="Logo"
            className="logo"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        </span>

        {/* Show hamburger icon only in mobile view */}
        <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰ {/* Hamburger icon */}
        </button>
        <ul className="nav-list desktop-links">
          {navItems.map(renderNavLink)}
        </ul>
        <div className="mode-start-container">
          <Link to="/Signup" className="start-btn">Get started</Link>
        </div>
        <span className="mode-btn" onClick={handleModeToggle}>
          {isDarkMode ? <HiOutlineSun size="25px" /> : <IoIosMoon size="25px" />}
        </span>
      </div>

      {/* Toggleable nav menu for mobile view */}
      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <button className="close-button" onClick={closeNavbar}>
          &times; {/* Close icon */}
        </button>
        <ul className="nav-list">
          {navItems.map(renderNavLink)}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
