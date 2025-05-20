import React from "react";
import imgService1 from "../assets/home-service1.png";
import imgService2 from "../assets/home-service2.png";
import imgService3 from "../assets/home-service3.png";
import simplestar from "../assets/star.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const HomeServices = () => {
  const locator = useLocation();
  const url = locator.pathname.slice(1, locator.pathname.length - 1);

  return (
    <div
      className={
        url === "services"
          ? "home-services-section pbn"
          : "home-services-section"
      }
    >
      <div className="inner-row">
        <div className="home-services-section-content">
          <div className="simple-star">
            <img src={simplestar} alt="" />
          </div>

          <div className="home-services-intro">
            <h2 data-aos="fade-down">
              Solutions That Align Talent and Brand Growth
            </h2>
            <p data-aos="fade-up">
              9Dots Agency delivers marketing and recruiting solutions that help
              businesses grow stronger, faster, and smarter. Here's how we make
              that happen.
            </p>
          </div>

          <div className="home-services-content-row">
            <div className="home-service-moja" data-aos="fade-right">
              <h2>Brand & Marketing Audit</h2>
              <p>
                We evaluate your current brand positioning, campaigns, and
                audience perception to deliver actionable insights and
                opportunities for stronger marketing alignment.
              </p>
              <a href="s">
                Learn More{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService1} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="fade-left">
              <h2>Recruitment Campaign Strategy</h2>
              <p>
                We help businesses attract and engage top-tier candidates by
                developing compelling employer messaging and multi-channel
                recruitment strategies that stand out in today's talent market.
              </p>
              <a href="s">
                Learn More{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService2} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="zoom-in">
              <div className="home-service-description">
                <h2>Website & Career Page Development</h2>
                <p>
                  A well-designed website isn’t just for customers — it’s for
                  candidates too. We create intuitive, conversion-driven sites
                  and career pages that reflect your values and attract aligned
                  talent.
                </p>
                <a href="s">
                  Learn More{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </a>
              </div>
              <div className="home-service-image">
                <img src={imgService3} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="fade-right">
              <h2>End-to-End Hiring Support</h2>
              <p>
                From writing role descriptions to interview planning and
                candidate evaluation, we help streamline your hiring process to
                reduce time-to-hire and improve team fit.
              </p>
              <a href="s">
                Learn More{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService2} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="fade-left">
              <h2>Social Media Talent Marketing</h2>
              <p>
                We leverage social platforms to promote your brand’s culture,
                opportunities, and achievements — creating authentic visibility
                that attracts both clients and candidates.
              </p>
              <a href="s">
                Learn More{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
