import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar`}>
      <div className="container">
        <Link to="/" className="logo-link" onClick={closeNavbar}>
          <img src="/images/e1.png" alt="Logo" className="logo" />
        </Link>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰ 
        </button>
        <ul className="nav-links desktop-links">
          {location.pathname !== '/' && (
            <li><Link to="/">Home</Link></li>
          )}
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/loan">Loan</Link></li>
        </ul>
      </div>

      <div className={`nav-menu ${isActive ? 'active' : ''}`}>
        <button className="close-button" onClick={closeNavbar}>
          &times;
        </button>
        <ul className="nav-links">
          {location.pathname !== '/' && (
            <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
          )}
          <li><Link to="/about" onClick={closeNavbar}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeNavbar}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
