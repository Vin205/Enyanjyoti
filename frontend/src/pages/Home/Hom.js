import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hom.css";
import Faqs from "./Faqs";
import { GiBookshelf } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { PiFediverseLogoFill } from "react-icons/pi";
import { IoMdBusiness } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";

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
                "Prioritize deep understanding of concepts, development of life skills, and expansion of general knowledge through engaging, activity-based learning. This approach enhances critical thinking, prepares learners for real-world challenges, and makes education both informative and enjoyable",
              image: "./images/education.svg",
              keyPoints: [
                {
                  text: "Complete Understanding of Concepts",
                  icon: <GiBookshelf />,
                },
                {
                  text: "Adapt Life Skills",
                  icon: <GiSkills />,
                },
                {
                  text: "Gain General Knowledge",
                  icon: <GiWorld />,
                },
              ],
              action: "Learn Now",
            },
            {
              title: "Career",
              description:
                "Investigate diverse career paths while developing employable skills across industries. Simultaneously, acquire entrepreneurial knowledge to launch and grow your own successful venture. This version captures the essence of exploring careers, preparing for employment, and learning about entrepreneurship in a more streamlined manner.",
              image: "./images/career.svg",
              keyPoints: [
                {
                  text: "Explore diverse career opportunities",
                  icon: <PiFediverseLogoFill />,
                },
                {
                  text: "Develop employable skills for various industries",
                  icon: <GiSkills />,
                },
                {
                  text: "Learn entrepreneurship fundamentals for starting a business",
                  icon: <IoMdBusiness />,
                },
              ],
              action: "Explore Now",
            },
            {
              title: "Loans and Grants",
              description:
                "Gain comprehensive insights into loans, grants, and scholarships while understanding the straightforward application processes. This version emphasizes the importance of financial aid in education and provides clear steps for accessing funds.",
              image: "./images/loan_and_grants.svg",
              keyPoints: [
                {
                  text: "Understand different types of loans and grants available",
                  icon: <GiBookshelf />,
                },
                {
                  text: "Learn about scholarships and their eligibility criteria",
                  icon: <FaGraduationCap />,
                },
                {
                  text: "Follow simple steps for applying to secure financial assistance",
                  icon: <MdEditNote />,
                },
              ],
              action: "Check Now",
            },
          ];

  return (
    <div className="hom-container">
      <main className="main-content">
        {showScrollTop && (
          <button
            className="scroll-up-btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span
              className="material-symbols-outlined"
              style={{ color: "#333" }}
            >
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
          <div className="intro-text">
            <h1 className="title">
              Dive into the World of Knowledge, Skills and Wisdom
            </h1>
            <p className="subtitle">
              Empower yourself with our comprehensive learning platform
            </p>
            <div className="button-group">
              <Link to="/Signup" className="btn-default column-button shadow ">
                Sign Up
              </Link>
              <Link
                to="/login"
                className="btn-default column-button-login shadow"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        
        <div className="column-grid">
          {cardDetails.map((item, index) => (
            <div key={index} className="row">
              <div className="row column-content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="column-image"
                />
                <div className="column-text">
                  <h2 className="column-title fw-bolder">{item.title}</h2>
                  <p className="column-description">{item.description}</p>
                  <ul className="column-key-points">
                    {item.keyPoints.map((keyPoint, index) => (
                      <li key={index}>
                        <div className="key-point-icon">{keyPoint.icon}</div>
                        <span>{keyPoint.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.title === "Loans and Grants" ? "/Loan" : "#"}>
                    <button className="btn-default column-button shadow">
                      {item.action}
                    </button>
                  </Link>
                </div>
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
