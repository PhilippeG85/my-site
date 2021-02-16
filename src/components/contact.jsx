import React from "react";
import Form from "./form";

function Contact() {
  return (
    <div className="contact-page">
      <div className="form-left">
        <h1 className="style-form-left" style={{ marginBottom: "24px" }}>Contact</h1>
        <p className="style-form-left">
          Interested for freelance opportunies. I will be pleased to hear about your
          projects. Don&apos;t hesitate to contact me if you have questions or request aswell.
        </p>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
