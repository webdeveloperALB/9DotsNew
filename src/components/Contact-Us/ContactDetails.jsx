import React from "react";

const ContactDetails = () => {
  return (
    <div className="contact-details-section">
      <div className="details-column">
        <div className="header">
          <span></span>
          <h3>Visit Our Offices</h3>
        </div>
        <h1>9Dots Agency</h1>
        <h3>Tirana, Albania</h3>

        <div className="row first">
          <h4>Call Us: +355 68 58 61 003</h4>
        </div>
        <div className="row">
          <h4>Email: info@9dotsagency.com</h4>
        </div>
        <div className="row">
          <h4>Open: Monday - Friday (10am - 6pm)</h4>
        </div>
      </div>
      <div className="map-column">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0135197918335!2d19.817335075875636!3d41.330319371307084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503175eeed47a3%3A0x64932d6fb9888aa8!2s9Dots%20Agency!5e0!3m2!1sen!2s!4v1747753052383!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="9Dots Agency Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactDetails;
