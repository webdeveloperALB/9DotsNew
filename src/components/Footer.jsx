import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            {/* Column 1 - Company Info */}
            <div className="footer-column">
              <div className="brand-info">
                <h2>9Dots Agency</h2>
                <p>
                  Connecting talent with opportunity. Creating brands that
                  resonate.
                </p>
              </div>
              <div className="hours-info">
                <h3>Agency Hours</h3>
                <p>Monday - Friday: 10 AM – 6 PM</p>
                <p>Weekend: By appointment</p>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li>
                  <a href="/services/talent-recruitment">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Talent Recruitment
                  </a>
                </li>
                <li>
                  <a href="/services/executive-search">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Executive Search
                  </a>
                </li>
                <li>
                  <a href="/services/digital-marketing">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/services/brand-strategy">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Brand Strategy
                  </a>
                </li>
                <li>
                  <a href="/services/content-creation">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Content Creation
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="/about-us/">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    About 9Dots
                  </a>
                </li>
                <li>
                  <a href="/services/">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="/portfolio/">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/contact-us/">
                    <span className="arrow-icon">
                      <HiArrowLongRight />
                    </span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact & Newsletter */}
            <div className="footer-column">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-details">
                  <p>
                    9Dots Agency Headquarters
                    <br />
                    Rruga e Dibrës
                    <br />
                    Tirana 1001, Albania
                  </p>
                  <a href="mailto:hello@9dotsagency.com" className="email-link">
                    info@9dotsagency.com
                  </a>
                  <p>+355 68 58 61 003</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-section">
            <div className="social-container">
              <div className="social-links-container">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/9dots_agency/"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@9dotsagency?is_from_webapp=1&sender_device=pc"
                    aria-label="TikTok"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/9dots-agency/posts/?feedView=all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div className="jobs-cta">
                <a href="/job-board" className="jobs-btn">
                  <BsBriefcase />
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright-section">
        <div className="container">
          <div className="copyright-container">
            <p>
              &copy; {new Date().getFullYear()} 9Dots Agency. All Rights
              Reserved.
            </p>
            <div className="policy-links">
              <a href="/terms">Terms of Service</a>
              <span className="divider">|</span>
              <a href="/privacy">Privacy Policy</a>
              <span className="divider">|</span>
              <a href="/accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;