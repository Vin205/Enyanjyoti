import React, { useEffect , useState } from "react";
import Slider from "react-slick";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", scale: "2", filter: "invert(100%)" }}
      onClick={onClick}
    />
  );
}

const About = () => {
  const galleryData = [
    {
      title: "Introduction to Algebra",
      subtitle: "Master the basics of algebraic expressions and equations",
      img: "./images/1.jpg",
      link: "https://example.com/courses/introduction-to-algebra",
    },
    {
      title: "Shakespearean Literature",
      subtitle: "Explore the works of William Shakespeare in depth",
      img: "./images/2.jpg",
      link: "https://example.com/courses/shakespearean-literature",
    },
    {
      title: "World History",
      subtitle: "Understand key events that shaped our modern world",
      img: "./images/3.jpg",
      link: "https://example.com/courses/world-history",
    },
    {
      title: "Introduction to Biology",
      subtitle: "Learn the fundamentals of life sciences",
      img: "./images/4.jpg",
      link: "https://example.com/courses/introduction-to-biology",
    },
    {
      title: "Art History and Appreciation",
      subtitle:
        "Explore the evolution of art through various cultures and eras",
      img: "./images/5.jpg",
      link: "https://example.com/courses/art-history-appreciation",
    },
    {
      title: "Financial Literacy",
      subtitle: "Learn how to manage personal finances and investments",
      img: "./images/8.jpg",
      link: "https://example.com/courses/financial-literacy",
    },
    {
      title: "Public Speaking Essentials",
      subtitle: "Develop confidence and skill in delivering speeches",
      img: "./images/11.jpg",
      link: "https://example.com/courses/public-speaking-essentials",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      <main className="about-main-content">
      <button class="scroll-up-btn" onClick={() => window.scrollTo(0, 0)}>
        <span class="material-symbols-outlined" style={{
          color:'#333'
        }}>
arrow_upward
</span>  </button>
        <div className="about-intro-section">
          <div className="about-intro-text">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">
              {" "}
              Deserunt est deserunt pariatur ea cillum voluptate id do voluptate
              nisi ea aliquip.{" "}
            </p>
          </div>
        </div>
        <div className="about-slider-wrapper">
          <div className="about-slider-header">
            <h2> Our Gallery</h2>
            <hr></hr>
          </div>
          <div className="about-slider">
            <Slider {...settings}>
              {galleryData.map((item) => (
                <div key={item.title} className="about-card">
                  <div className="about-card-image-container">
                    <img
                      src={item.img}
                      alt=""
                      className="about-card-image"
                    ></img>
                  </div>

                  <div className="about-card-content">
                    <p className="about-card-title">{item.title}</p>
                    <p className="about-card-subtitle">{item.subtitle}</p>
                    <button className="about-card-button">
                      {" "}
                      <a className="about-card-link" href={item.link}>
                        Read More
                      </a>{" "}
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
