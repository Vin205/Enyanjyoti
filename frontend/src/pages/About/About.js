import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './About.css';

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

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-intro-section">
          <img src="/images/aboutimage.png" alt="About Us Image" className="about-image" />
          <div className="about-intro-text">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">
              Deserunt est deserunt pariatur ea cillum voluptate id do voluptate nisi ea aliquip.
            </p>
          </div>
        </div>
      </div>


      <div>
        <h1 className="carousel-title">Our Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container"
        >
          {galleryData.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="picture">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="details">
                <h3 className="title">{item.title}</h3>
                <span className="subtitle">{item.subtitle}</span>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>

      </div>

    </div>
  );
};

export default About;