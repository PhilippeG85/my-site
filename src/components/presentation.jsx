import React from "react";
import { Link } from "react-router-dom";

function Presentation() {
  return (
    <div className="presentation">
      <h1>
        Hello world,
        <br />
        I&apos;m Philippe,
        <br />
        Web Developer in Montreal
      </h1>
      <div className="contact-btn-div">
        <Link className="contact-btn" to="/contact">
          Contact me!
        </Link>
      </div>
    </div>
  );
}

export default Presentation;
