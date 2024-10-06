import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar`}>
      <div className="container">
        <img src="/images/e1.png" alt="Logo" className="logo" />
        <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰ {/* Hamburger icon */}
        </button>
      </div>
      <ul className="nav-links desktop-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/loan">Loan</a></li>
      </ul>
      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <button className="close-button" onClick={closeNavbar}>
          &times; {/* Close icon */}
        </button>
        <ul className="nav-links">
          <li><a href="/" onClick={closeNavbar}>Home</a></li>
          <li><a href="/about" onClick={closeNavbar}>About Us</a></li>
          <li><a href="/contact" onClick={closeNavbar}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
