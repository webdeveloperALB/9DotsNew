import React from "react";
import digital from "../assets/web-management.png";
import commerce from "../assets/commerce.png";
import training from "../assets/analysis.png";
import spinner from "../assets/Shap.png";
import aboutImage from "../assets/about-img.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

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

          <div className="more-about-section">
            <div className="more-about-row">
              <div className="more-about-picture-column" data-aos="fade-right">
                <img src={aboutImage} alt="" />
              </div>
              <div className="more-about-description-column">
                <div className="more-about-description-inner">
                  <h2 data-aos="fade-down">
                    Your Strategic Partner in Sustainable Growth
                  </h2>
                  <p data-aos="fade-up">
                    At 9Dots, we believe that transformational growth happens
                    when exceptional marketing meets exceptional people. Our
                    integrated approach ensures your brand voice resonates
                    authentically while attracting talent that shares your
                    vision.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300">
                    From startup launches to enterprise expansions, we deliver
                    the strategic clarity and execution excellence that turns
                    ambitious goals into measurable achievements.
                  </p>
                  <NavLink
                    to="/about-us/"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    Discover Our Story{" "}
                    <span>
                      <HiArrowLongRight />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
