import React from "react";
import { BsPerson, BsEnvelope } from "react-icons/bs";
 // Importing Bootstrap Icons for person and envelope icons
import './Contact.css'
import toast from "react-hot-toast";
function Contact() {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
		if (!name || !email || !message) {
			toast.error("All fields are required!");
			return;
		}
		if (!email.includes("@gmail.com") || !email.includes("@mail.com")) {
			toast.error("Invalid Email");
			return;
		}
		if (message.length < 10) {
			toast.error("Please enter few more words");
			return;
		}
		toast.success(
			"Thank you for reaching out! Your message has been successfully submitted. Our team will get back to you shortly."
		);
		setEmail("");
		setMessage("");
		setName("");
  };
  
  return (
    <div className="contact-container">
     <div class="inner-container">
     <div class="img-container "><img src="/images/contact.jpg" /></div>
 <div className="form " style={{ maxWidth: "600px" }}>
      <div class="h1-div">
      <h1>We'd love to help</h1>
      </div>
      <span class="black-line"></span>
      <form onSubmit={submitHandler} action="#" className="container-sm mt-5">
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" >
            <BsPerson className="me-2" /> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="e.g. John Doe"
            required
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput2" >
            <BsEnvelope className="me-2" /> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="email@example.com"
            required
            onChange={(e)=> setEmail(e.target.value)}
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
            onChange={(e)=> setMessage(e.target.value)}
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
