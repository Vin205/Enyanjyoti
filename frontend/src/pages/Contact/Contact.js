import React from "react";
import { BsPerson, BsEnvelope } from "react-icons/bs";
 // Importing Bootstrap Icons for person and envelope icons
import './Contact.css'
function Contact() {
  return (
    <div className="contact-container">
     <div class="inner-container">
     <div class="img-container "><img src="/images/contact.jpg" /></div>
 <div className="form " style={{ maxWidth: "600px" }}>
      <div class="h1-div">
      <h1>We'd love to help</h1>
      </div>
      <span class="black-line"></span>
      <form action="#" className="container-sm mt-5">
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" >
          <span class="material-symbols-outlined" style={{ position:'relative', top:'5px', paddingLeft:'5px'}}>person</span> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput2" >
          <span class="material-symbols-outlined" style={{ position:'relative', top:'5px', right:'5px', paddingLeft:'10px'}}>mail</span>Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="msg-label" >
            Leave us a few words
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
         <div class="button-container"> <button type="submit" className="btn">
            Send
          </button></div>
        </div>
      </form>
    </div>
     </div>
    </div>
   
  );
}

export default Contact;
