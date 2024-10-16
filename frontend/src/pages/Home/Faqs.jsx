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
      QN: "One"
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
      QN: "Two"
    },
    {
      question: "What are the benefits of enrolling?",
      answer:
        "By enrolling, you gain access to exclusive learning materials, career guidance, and personalized support.",
      QN: "Three"
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
      QN:"Four"
    },
  ];

  return (
    <div className="faqs-container">
      <h3 style={{ textAlign: "center",padding:"20px 0" }}>Frequently Asked Questions</h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {
          faqs.map((faq) => {
            return (
              <div className="accordion-item" key={faq.QN}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${faq.QN}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${faq.QN}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${faq.QN}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
  
}
