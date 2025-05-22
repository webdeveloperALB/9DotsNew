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
              Precision Services That Transform Vision Into Results
            </h2>
            <p data-aos="fade-up">
              Every great company needs two things: a compelling story and
              extraordinary people to tell it. 9Dots specializes in both,
              delivering integrated solutions that accelerate growth and amplify
              impact.
            </p>
          </div>

          <div className="home-services-content-row">
            <div className="home-service-moja" data-aos="fade-right">
              <h2>Strategic Brand Assessment</h2>
              <p>
                Our comprehensive brand analysis reveals hidden opportunities
                and competitive advantages, providing a roadmap for authentic
                differentiation that resonates with both customers and top
                talent.
              </p>
              <a href="s">
                Explore Assessment{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService1} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="fade-left">
              <h2>Executive Search & Leadership Placement</h2>
              <p>
                We connect visionary leaders with transformational opportunities
                through our proprietary network and advanced screening
                methodologies, ensuring perfect cultural and strategic
                alignment.
              </p>
              <a href="s">
                View Process{" "}
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
                <h2>Digital Ecosystem & Talent Magnetism</h2>
                <p>
                  We architect comprehensive digital experiences that showcase
                  your brand's unique value proposition while creating
                  irresistible career destinations that attract industry-leading
                  professionals.
                </p>
                <a href="s">
                  See Portfolio{" "}
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
              <h2>Accelerated Hiring & Team Building</h2>
              <p>
                From rapid-fire recruitment sprints to strategic team expansion,
                we deliver qualified candidates faster through innovative
                sourcing techniques and streamlined selection processes.
              </p>
              <a href="s">
                Learn Framework{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </a>
              <div className="home-service-image">
                <img src={imgService2} alt="" />
              </div>
            </div>

            <div className="home-service-moja" data-aos="fade-left">
              <h2>Thought Leadership & Employer Branding</h2>
              <p>
                We position your executives as industry thought leaders while
                building magnetic employer brands that naturally attract
                high-caliber professionals and engaged customers alike.
              </p>
              <a href="s">
                View Strategy{" "}
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
