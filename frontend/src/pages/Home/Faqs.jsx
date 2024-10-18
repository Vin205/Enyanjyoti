import React, { useState } from "react";
import "./Faqs.css";
import { Link } from "react-router-dom";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the platform all about?",
      answer: (
        <span>
          Our platform offers a wide range of courses, career advice, and
          information about loans and grants to help you succeed. For more
          details, visit our{" "}
          <Link to="/about" className="faq-link">
            About Us
          </Link>{" "}
          page.
        </span>
      ),
    },
    {
      question: "How can I sign up for a course?",
      answer: (
        <span>
          To sign up, click on the{" "}
          <Link to="/signup" className="faq-link">
            Sign Up
          </Link>{" "}
          button at the top of the page, create an account, and explore
          available courses.
        </span>
      ),
    },
    {
      question: "What are the benefits of enrolling?",
      answer:
        "By enrolling, you gain access to exclusive learning materials, career guidance, and personalized support.",
    },
    {
      question: "How do I apply for loans and grants?",
      answer: (
        <span>
          Visit the{" "}
          <Link to="/loan" className="faq-link">
            Loans and Grants
          </Link>{" "}
          section of our platform for a detailed guide on how to apply easily.
        </span>
      ),
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">FAQs</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
