import React, { useState } from "react";
import "./LearnNow.css"; // CSS file for styling

const EducationSection = () => {
  // Carousel state for tracking the active image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel images
  const carouselImages = [
    "https://tse3.mm.bing.net/th?id=OIP.cL5adRUju_BtYcQW9KeEJgHaEM&pid=Api&P=0&h=180",
    "https://www.wgtn.ac.nz/__data/assets/image/0005/2035058/varieties/ls_medium.jpg",
    "https://assets.skyfilabs.com/images/blog/list-of-100-robotics-projects.jpg"
  ];

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="education-main-container">
      {/* Section with Carousel and Content */}
      <div className="education-content">
        {/* Left Half: Image Carousel */}
        <div className="education-left">
          <h3 className="carousel-title">Explore Our Learning Experience</h3>
          <div className="carousel">
            {/* Carousel Navigation Arrows */}
            <button className="carousel-button prev" onClick={prevSlide}>
              ❮
            </button>
            <img
              src={carouselImages[currentIndex]}
              alt="Carousel Slide"
              className="carousel-image"
            />
            <button className="carousel-button next" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>

        {/* Right Half: Text Content */}
        <div className="education-right">
          <h2 className="education-title">Education</h2>
          <p className="education-description">
            Dive deep into academic concepts and essential life skills. Develop a practical problem-solving approach, build critical thinking, and gain a wide range of general knowledge. Engage in activity-based learning that fosters creativity and prepares you for real-world scenarios.
          </p>

          {/* Benefits List */}
          <div className="education-benefits">
            <h3>Why Learn with Us?</h3>
            <ul>
              <li>Interactive lessons for various learning styles</li>
              <li>Comprehensive subject guides</li>
              <li>Insights from industry experts</li>
              <li>Hands-on activities and projects</li>
              <li>Flexible, self-paced learning options</li>
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="https://en.wikipedia.org/wiki/Education"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-learn-now"
          >
            Start Learning Now
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="education-video-section">
        <h3>Watch and Learn</h3>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Educational Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="education-video"
        ></iframe>
      </div>
    </div>
  );
};

export default EducationSection;
