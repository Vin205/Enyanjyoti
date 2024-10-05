// import React, { useState } from "react";
// import "./Faqs.css";

// export default function Faqs() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What is the platform all about?",
//       answer: "Our platform offers a wide range of courses, career advice, and information about loans and grants to help you succeed.",
//     },
//     {
//       question: "How can I sign up for a course?",
//       answer: "To sign up, click on the 'Sign Up' button at the top of the page, create an account, and explore available courses.",
//     },
//     {
//       question: "What are the benefits of enrolling?",
//       answer: "By enrolling, you gain access to exclusive learning materials, career guidance, and personalized support.",
//     },
//     {
//       question: "How do I apply for loans and grants?",
//       answer: "Visit the 'Loans and Grants' section of our platform for a detailed guide on how to apply easily.",
//     },
//   ];

//   const toggleAnswer = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faqs-container">
//       <h1 className="faqs-title">Frequently Asked Questions</h1>
//       <div className="faqs-list">
//         {faqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <div className="faq-question" onClick={() => toggleAnswer(index)}>
//               <h3>{faq.question}</h3>
//               <span>{activeIndex === index ? "-" : "+"}</span>
//             </div>
//             {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// 
// }

// import React, { useState } from 'react'
// import "./Faqs.css";

// function Faqs() {
//     const Faqs =  [

//         {
//         heading : "What is the platform all about?",
//         answer: "Our platform offers a wide range of courses, career advice, and information about loans and grants to help you succeed.",

//         },
//         {
//             heading : "How can I sign up for a course?",
//             answer: "To sign up, click on the 'Sign Up' button at the top of the page, create an account, and explore available courses.",

//         },

//     ]

//     const [ans,setans] = useState(null)
//     function toggleAnswer(index){
//         setans(ans=== index ? null:index );


//     }

//   return (
//     <div className='faq-container'>
//         <div className='faq-header'>
//         <h1 className="faqs-title">Frequently Asked Questions</h1>
//         </div>
//         <div className='faq-content'>
//             {
//                 Faqs.map((faq,index) => (
//                     <div key={index} className='faq-items' onClick={toggleAnswer(index)}>
//                         <p>{faq.heading}</p>
//                         <snap><p>{ans === index ? "-" : "+"}</p></snap>
//                         {ans === index && <p>{faq.answer}</p>}
//                     </div>

//                 ))
//             }

//         </div>
    
        

//     </div>
//   )
// }

// export default Faqs