import React from "react";
import { BsPerson, BsEnvelope } from "react-icons/bs"; // Importing Bootstrap Icons for person and envelope icons

function Contact() {
  return (
    <div className="container-fluid my-5 py-3 border rounded-4" style={{ maxWidth: "600px" }}>
      <h1 className="fw-bold fs-2">We'd love to help</h1>
      <form action="#" className="container-sm">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">
            <BsPerson className="me-2" /> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="e.g. John Doe"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label fw-medium">
            <BsEnvelope className="me-2" /> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label fw-medium">
            Your message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
