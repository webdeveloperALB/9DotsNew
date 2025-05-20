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
              At 9Dots, we don’t believe in generic solutions. Every business has a different rhythm,
              and our services are designed to match it — whether you're building a brand or scaling a team.
              Here's how we help companies grow with purpose.
            </p>
          </div>

          <div className="distinction-content-row">
            <div className="distinction-moja">
              <h3>Advisory</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Business & Talent Audits
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Strategic Project Management
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Employer & Brand Positioning
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Integrated Content Planning
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Digital Roadmapping
                </li>
              </ul>
            </div>
            <div className="distinction-moja">
              <h3>Agency</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Social Media & Employer Branding
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Creative Design & Identity
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Career Page & Website Builds
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Search Engine & Profile Optimization
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Copywriting for Brand & HR
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Visual Storytelling (Photo & Video)
                </li>
              </ul>
            </div>
            <div className="distinction-moja">
              <h3>Academy</h3>
              <ul>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Talent Acceleration Bootcamps
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Recruiter & Employer Training
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Job Market Readiness Programs
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Digital Capability Upskilling
                </li>
                <li>
                  <span>
                    <TbCircleDot />
                  </span>{" "}
                  Marketing & Hiring Masterclasses
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
