import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hom.css";
import Faqs from "./Faqs";

export default function Hom() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardDetails = [
    {
      title: "Education",
      description:
        "Get complete understanding of concepts. Adapt life skills. Gain general knowledge and enjoy activity-based learning.",
      image: "./images/e3.png",
      action: "Learn Now",
      link: "https://wikiedu.org/"
    },
    {
      title: "Career",
      description:
        "Explore career opportunities and make yourself ready for employment in various fields. Learn how to build your own startup and become a successful entrepreneur.",
      image: "./images/e4.png",
      action: "Explore Now",
      link: "https://en.wikipedia.org/wiki/Career"
    },
    {
      title: "Loans and Grants",
      description:
        "Complete information about loans, grants, and scholarships. Simple procedure and steps to apply easily.",
      image: "./images/e5.png",
      action: "Check Now",
      link: "https://enyanjyoti.vercel.app/loan"
    },
  ];

  return (
    <div className="hom-container">
      <main className="main-content">
        {showScrollTop && (
          <button className="scroll-up-btn" onClick={() => window.scrollTo(0, 0)}>
            <span className="material-symbols-outlined" style={{ color: "#333" }}>
              arrow_upward
            </span>
          </button>
        )}

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
          <div className="intro-text" >
            <h1 className="title">
              Dive into the World of Knowledge, Skills and Wisdom
            </h1>
            <p className="subtitle">
              Empower yourself with our comprehensive learning platform
            </p>
            <div className="button-group">
              <Link to="/signup" className="btn-default">
                Sign Up
              </Link>
              <Link to="/login" className="btn-outline">
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {cardDetails.map((item, index) => (
            <div key={index} className="card" style={{ maxWidth: "350px" }}>
              <div className="card-header">
                <h2 className="card-title">{item.title}</h2>
              </div>
              <div className="card-content">
                <img src={item.image} alt={item.title} className="card-image" style={{ objectFit: "cover" }} />
                <p className="card-description">{item.description}</p>
                <Link to={item.title === "Loans and Grants" ? "/Loan" : "#"}>
                  <button className="btn-default card-button"><a href={`${item.link}`}> {item.action}</a> </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Faqs />
        </div>
      </main>
    </div>
  );
}
