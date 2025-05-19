import React from 'react'
import digital from "../assets/web-management.png"
import commerce from "../assets/commerce.png"
import training from "../assets/analysis.png"
import spinner from "../assets/Shap.png"
import aboutImage from "../assets/about-img.png"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from 'react-router-dom'

const AboutSection = () => {
  return (
    <div className='about-section'>
      <div className="about-bg-overlay"></div>
      <div className="inner-row">
        <div className="about-section-content">    
          <div className="about-intro">
            <div className="about-title-column">
              <h2 data-aos='fade-right'>Driving Growth Through Marketing & Talent</h2>
              <div className="about-spin">
                <img src={spinner} alt="" />
              </div>
            </div>
            <div className="about-description-column">
              <p data-aos='fade-left'>
                At 9Dots Agency, we partner with companies to help them grow — by building strong brands and hiring the right people. We deliver marketing strategies that drive visibility, and recruitment solutions that ensure teams are built for impact.
              </p>
            </div>
          </div>

          <div className="main-services-section">
            <div className="main-services-section-row">
              <div className="main-service-moja" data-aos='fade-right'>
                <div className="icon-section">
                  <img src={digital} alt="" />
                </div>
                <h3>Strategic Marketing Services</h3>
                <p>
                  From digital campaigns to content strategy, we help businesses connect with the right audience and build brand trust that leads to measurable results.
                </p>
              </div>

              <div className="main-service-moja" data-aos='zoom-in'>
                <div className="icon-section">
                  <img src={commerce} alt="" />
                </div>
                <h3>Recruitment & Hiring Solutions</h3>
                <p>
                  We work with companies to identify, engage, and onboard candidates who are not only qualified — but aligned with the company’s values, goals, and future.
                </p>
              </div>

              <div className="main-service-moja" data-aos='fade-left'>
                <div className="icon-section">
                  <img src={training} alt="" />
                </div>
                <h3>Employer Branding & Onboarding</h3>
                <p>
                  Beyond hiring, we support businesses in building a strong employer brand and creating onboarding experiences that increase retention and engagement from day one.
                </p>
              </div>
            </div>
          </div>

          <div className="more-about-section">
            <div className="more-about-row">
              <div className="more-about-picture-column" data-aos='fade-right'>
                <img src={aboutImage} alt="" />
              </div>
              <div className="more-about-description-column">
                <div className="more-about-description-inner">
                  <h2 data-aos='fade-down'>A Results-Driven Marketing & Recruitment Partner</h2>
                  <p data-aos='fade-up'>
                    We understand that real growth comes from both visibility and capability. At 9Dots, we align brand messaging with talent acquisition — so businesses not only get noticed, but also build the teams they need to scale confidently.
                  </p>
                  <p data-aos='fade-up' data-aos-delay="300">
                    Whether you’re launching a new product or expanding your workforce, we bring clarity, consistency, and momentum to your next phase of growth.
                  </p>
                  <NavLink to="/about-us/" data-aos='zoom-in' data-aos-delay='600'>
                    Learn More <span><HiArrowLongRight /></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection
