import React, { useState, useEffect } from "react";import "./Navbar.css";

function Navbar() {

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark-mode");
    } else {
      setTheme("light");
      document.body.classList.remove("dark-mode");
    }

  };
  return (
    <nav className="navbar">
      <div className="container">
        <img src="/images/e1.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <button type="button" className="themechangebtn" onClick={toggleTheme}>
          {theme === "light" ? (
            <img src="./images/moon.png" className="themeLogo" />
          ) : (
            <img src="./images/sun.png" className="themeLogo"/>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;