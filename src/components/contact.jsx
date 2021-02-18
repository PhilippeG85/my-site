import React, { useContext } from "react";
import Form from "./form";
import MapContainer from "./map";
import { IsMobileComponent } from "./isMobileContext";

function Contact() {
  const { isMobile } = useContext(IsMobileComponent);
  console.log(isMobile);
  return (
    <div className="contact-page">
      <div className="form-left">
        <h1 className="style-form-left" style={{ marginBottom: "40px" }}>Contact me</h1>
        <p className="style-form-left" style={{ margin: "18px auto" }}>
          Interested for freelance opportunies. I will be pleased to hear about your
          projects. Don&apos;t hesitate to contact me if you have questions or request aswell.
        </p>
        <Form />
      </div>
      <div className="map-right">
        <MapContainer />
      </div>
    </div>
  );
}

export default Contact;
