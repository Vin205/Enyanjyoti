import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for internal navigation
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate('/'); // This will navigate to the home page
    closeNavbar(); // Close the navbar after navigating
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isActive && !event.target.closest('.nav-menu')) {
        closeNavbar();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isActive]);

  return (
    <nav className={`navbar`}>
      <div className="container">
        <img
          src="/images/e1.png"
          alt="Logo"
          className="logo"
          onClick={handleClickEvent}
          style={{ cursor: "pointer" }} // Optional: to indicate that it's clickable
        />
        <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰ {/* Hamburger icon */}
        </button>
        <ul className="nav-links desktop-links">
          <li><Link to="/" className="li-style" onClick={closeNavbar}>Home</Link></li> {/* Use Link instead of a tag */}
          <li><Link to="/about" className="li-style" onClick={closeNavbar}>About Us</Link></li>
          <li><Link to="/contact" className="li-style" onClick={closeNavbar}>Contact Us</Link></li>
          <li><Link to="/loan" className="li-style" onClick={closeNavbar}>Loan</Link></li>
        </ul>
      </div>
      <div className={`nav-menu ${isActive ? 'active' : ''}` }>
        <button className="close-button" onClick={closeNavbar}>
          &times; {/* Close icon */}
        </button>
        <ul className="nav-links">
          <li><Link to="/" className={`li-style ${(window.location.pathname === '/') ? 'bg2' : ''}`} onClick={closeNavbar}>Home</Link></li> {/* Use Link instead of a tag */}
          <li><Link to="/about" className={`li-style ${(window.location.pathname === '/about') ? 'bg2' : ''}`} onClick={closeNavbar}>About Us</Link></li>
          <li><Link to="/contact" className={`li-style ${(window.location.pathname === '/contact') ? 'bg2' : ''}`} onClick={closeNavbar}>Contact Us</Link></li>
          <li><Link to="/loan" className={`li-style ${(window.location.pathname === '/loan') ? 'bg2' : ''}`} onClick={closeNavbar}>Loan</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
