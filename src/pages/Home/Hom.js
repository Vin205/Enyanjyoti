import React, { useEffect } from "react";
import "./Hom.css";
import Faqs from './Faqs';
import { useNavigate } from "react-router-dom";


export default function Hom() {
  const navigate = useNavigate();
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
              <button className="btn-default" onClick={()=> navigate("/signup")}>Sign Up</button>
              <button className="btn-outline" onClick={() => navigate("/login")}>Login</button>
            </div>
          </div>
        </div>

        <div className="card-grid">
          {[
            {
              title: "Education",
              description:
                "Get complete understanding of concepts. Adapt life skills. Gain general knowledge and enjoy activity-based learning.",
              image: "./images/e3.png",
              action: "Learn Now",
            },
            {
              title: "Career",
              description:
                "Explore career opportunities and make yourself ready for employment in various fields. Learn how to build your own startup and become a successful entrepreneur.",
              image: "./images/e4.png",
              action: "Explore Now",
            },
            {
              title: "Loans and Grants",
              description:
                "Complete information about loans, grants, and scholarships. Simple procedure and steps to apply easily.",
              image: "./images/e5.png",
              action: "Check Now",
            },
          ].map((item, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h2 className="card-title">{item.title}</h2>
              </div>
              <div className="card-content">
                <img src={item.image} alt={item.title} className="card-image" />
                <p className="card-description">{item.description}</p>
                <button className="btn-default card-button">{item.action}</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Faqs/>
        </div>
      </main>
    </div>
  );
}
