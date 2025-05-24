import React from "react";
import digital from "../assets/web-management.png";
import commerce from "../assets/commerce.png";
import training from "../assets/analysis.png";
import spinner from "../assets/Shap.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-bg-overlay"></div>
      <div className="inner-row">
        <div className="about-section-content">
          <div className="about-intro">
            <div className="about-title-column">
              <h2 data-aos="fade-right">
                Where Exceptional Talent Meets Powerful Brands
              </h2>
              <div className="about-spin">
                <img src={spinner} alt="" />
              </div>
            </div>
            <div className="about-description-column">
              <p data-aos="fade-left">
                9Dots Agency bridges the gap between brilliant marketing and
                exceptional hiring. We don't just build brands or fill positions
                — we create synergy between your company's story and the
                remarkable people who will tell it.
              </p>
            </div>
          </div>

          <div className="main-services-section">
            <div className="main-services-section-row">
              <div className="main-service-moja" data-aos="fade-right">
                <div className="icon-section">
                  <img src={digital} alt="" />
                </div>
                <h3>Brand Amplification & Digital Presence</h3>
                <p>
                  We craft compelling narratives and execute data-driven
                  campaigns that position your brand as an industry leader,
                  driving both customer acquisition and top-tier talent
                  attraction.
                </p>
              </div>

              <div className="main-service-moja" data-aos="zoom-in">
                <div className="icon-section">
                  <img src={commerce} alt="" />
                </div>
                <h3>Executive & Specialized Talent Acquisition</h3>
                <p>
                  Our recruitment expertise spans C-suite executives to niche
                  specialists. We identify game-changing professionals who don't
                  just fill roles — they elevate organizations.
                </p>
              </div>

              <div className="main-service-moja" data-aos="fade-left">
                <div className="icon-section">
                  <img src={training} alt="" />
                </div>
                <h3>Culture Integration & Team Optimization</h3>
                <p>
                  Beyond placement, we ensure seamless integration through
                  strategic onboarding, culture mapping, and long-term retention
                  strategies that turn new hires into company champions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
