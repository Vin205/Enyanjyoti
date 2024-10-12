import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    navigate("/");
    closeMenu();
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/loan", label: "Loan" },
    { to: "/contributors", label: "Contributors" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="/images/e1.png"
          alt="Logo"
          className="navbar-logo"
          onClick={handleLogoClick}
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </button>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <Link to={item.to} className="nav-link" onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
