import React from "react";
import { NavLink } from "react-router-dom";

const Nudge = () => {
  return (
    <div className="nudge-content">
      <h1 data-aos="fade-down">
        <span>Transform</span> your vision into market dominance?
      </h1>
      <p data-aos="fade-up">
        Partner with 9Dots to unlock the exponential power of integrated
        marketing and recruitment excellence. Let's build something
        extraordinary together.
      </p>
      <NavLink to="/contact-us/" data-aos="zoom-in">
        Start Your Transformation
      </NavLink>
    </div>
  );
};

export default Nudge;
