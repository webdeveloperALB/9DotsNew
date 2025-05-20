import React from "react";
import { faqs } from "../../data/faqs";
import SingleFaq from "./SingleFaq";

const Faqs = () => {
  const firstData = faqs.slice(0, 5);
  const lastData = faqs.slice(5, faqs.length);

  return (
    <div className="faqs-section">
      <div className="inner-row">
        <div className="faqs-section-content">
          <div className="faqs-intro">
            <div className="faqs-intro-inner">
              <h1>Discover how we connect people and brands with precision</h1>
              <div className="faqs-description">
                <p>
                  At 9Dots, we blend marketing insight with recruitment
                  expertise to drive meaningful growth for businesses and
                  professionals. Here’s how we make impact where it matters
                  most.
                </p>
              </div>
            </div>
          </div>

          <div className="faqs-container-row">
            <div className="faqs-column">
              {firstData.map((item) => (
                <SingleFaq {...item} />
              ))}
            </div>
            <div className="faqs-column">
              {lastData.map((item) => (
                <SingleFaq {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
