import React from "react";

function Contact() {
  return (
    <div
      className="container-fluid my-5 py-3 border rounded-4"
      style={{
        height: "auto",
        width: "auto",
        display: "block",
        maxWidth: "600px",
      }}
    >
      <h1 className="fw-bold fs-2">We'd love to help</h1>
      <form action="#"
        className="container-sm"
        style={{
          height: "auto",
          display: "block",
        }}
      >
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label fw-medium"
          >
            Name
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
          <label
            for="exampleFormControlInput2"
            className="form-label fw-medium"
          >
            Email
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
          <label
            for="exampleFormControlTextarea1"
            className="form-label fw-medium"
          >
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
