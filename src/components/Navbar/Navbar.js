import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };


  return (
    <nav className="navbar">
      <div className="container">
        <img src="/images/e1.png" alt="Logo" className="logo" />
        <ul className="nav-links" style={{
          position:'relative',
          top:'10px'
        }}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <button type="button" class="theme-button" id="darkThemeBtn" onClick={handleThemeChange} style={{
  backgroundColor:'#fff'
}}>
  <img src={theme === "light" ? "./images/moon.png" : "./images/sun.png"} class="themeLogo" style={{
    backgroundColor:'#fff',
    height:'25px',
    width:'25px'
  }} />
</button>

      </div>
    </nav>
  );
}

export default Navbar;