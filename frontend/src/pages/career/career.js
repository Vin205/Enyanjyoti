import React, { useState } from "react";
import "./Career.css"; // Add this line to import the CSS

const Career = () => {
  const [activeTab, setActiveTab] = useState("explore");

  const careerSections = [
    {
      id: "explore",
      title: "Explore Careers",
      content:
        "Discover a wide range of career paths across various industries. Our comprehensive guides provide insights into job roles, required skills, and growth opportunities.",
    },
    {
      id: "prepare",
      title: "Career Preparation",
      content:
        "Get ready for your dream job with our career preparation resources. Learn about resume writing, interview techniques, and professional development strategies.",
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      content:
        "Interested in starting your own business? Explore our entrepreneurship resources to learn about business planning, funding options, and startup strategies.",
    },
  ];

  const careerTips = [
    "Network actively in your industry",
    "Continuously update your skills",
    "Seek mentorship opportunities",
    "Build a strong online presence",
    "Stay informed about industry trends",
  ];

  return (
    <div className="career-page">
      <h1 className="career-title">Shape Your Future Career</h1>

      <div className="career-tabs">
        {careerSections.map((section) => (
          <button
            key={section.id}
            className={`tab-button ${activeTab === section.id ? "active" : ""}`}
            onClick={() => setActiveTab(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="career-content">
        {careerSections.map((section) => (
          <div
            key={section.id}
            className={`content-section ${
              activeTab === section.id ? "active" : ""
            }`}
          >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="career-tips">
        <h2>Career Success Tips</h2>
        <ul>
          {careerTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Explore our resources and start building your dream career today!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Career;
