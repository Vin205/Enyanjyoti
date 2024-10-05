import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Hom.css";

export default function Hom() {
  const navigate = useNavigate(); // Initialize navigate here

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="hom-container">
      <main className="main-content">
        <div className="intro-section">
          <div className="animation-container">
            <dotlottie-player
              src="https://lottie.host/b1cad9ac-0380-434e-8c9c-8d840821f788/Xf4k2KSbTr.json"
              background="transparent"
              speed="1"
              className="lottie-animation"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="intro-text">
            <h1 className="title">Dive into the World of Knowledge, Skills and Wisdom</h1>
            <p className="subtitle">Empower yourself with our comprehensive learning platform</p>
            <div className="button-group">
              <button className="btn-default" onClick={() => navigate("/signup")}>Sign Up</button>
              <button className="btn-outline" onClick={() => navigate("/login")}>Login</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
