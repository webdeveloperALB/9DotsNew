import React from "react";
import { TbCircleDot } from "react-icons/tb";

const ServicesDistinction = () => {
  return (
    <div className="distinction-section">
      <div className="inner-row">
        <div className="distinction-section-content">
          <div className="distinction-intro">
            <h1>What We Do</h1>
            <p>
              At 9Dots, we don’t believe in generic solutions. Every business
              has a different rhythm, and our services are designed to match it
              — whether you're building a brand or scaling a team. Here's how we
              help companies grow with purpose.
            </p>
          </div>

          <div className="distinction-content-row">
            <div className="distinction-moja">
              <h3>Marketing</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Digital Marketing
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  SEO
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  PPC Marketing
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Social Media Marketing
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Social Media Advertising
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  E-commerce Marketing
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Online Marketplace Marketing
                </li>
              </ul>
            </div>
            <div className="distinction-moja">
              <h3>Creative</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Link Building
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Web Design Development
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Media Production
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Content Marketing
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Reputation Management
                </li>
              </ul>
            </div>
            <div className="distinction-moja">
              <h3>Recruiting</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Executive Search
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Recruitment Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDistinction;
