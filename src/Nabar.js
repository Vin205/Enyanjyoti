import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nabar.css';

function Nabar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/refer');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/e1.png" alt="Logo"/>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="auth-buttons">
        <button type="button" className="btn btn-danger" onClick={handleSignup}>Sign Up</button>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
}

export default Nabar;

