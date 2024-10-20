import React, { useState } from "react";
import "./Faqs.css";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the platform all about?",
      answer: "Our platform offers a wide range of courses, career advice, and information about loans and grants to help you succeed.",
    },
    {
      question: "How can I sign up for a course?",
      answer: "Simply create an account by clicking the 'Sign Up' button at the top and explore courses available to you.",
    },
    {
      question: "What are the benefits of enrolling?",
      answer: "Enrolling gives you access to expert guidance, exclusive resources, and a community of learners.",
    },
    {
      question: "How do I apply for loans and grants?",
      answer: "Yes, you can apply for financial aid through our 'Loans and Grants' section, which has all the necessary details.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{faq.question}</h3>
              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>&#9654;</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

