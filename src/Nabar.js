import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nabar.css';

function Nabar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/refer');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/e1.png" alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <span className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></span>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      <div className={`auth-buttons ${isMobileMenuOpen ? 'open' : ''}`}>
        <button type="button" className="btn btn-danger" onClick={handleSignup}>Sign Up</button>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
}

export default Nabar;
