import React from "react";
import aboutImg1 from "../../assets/about-img3.jpg";
import aboutImg2 from "../../assets/about-img4.jpg";
import excellence from "../../assets/excellence.png";
import transparency from "../../assets/security.png";
import trust from "../../assets/trust.png";
import results from "../../assets/data-analytics.png";
import people from "../../assets/rating.png";
import img1 from "../../assets/about-img5.jpg";
import img2 from "../../assets/about-img6.jpg";
import img3 from "../../assets/about-img7.jpg";
import img4 from "../../assets/about-img8.jpg";

const AboutDescription = () => {
  return (
    <>
      <div className="about-whole-wrapper">
        <div className="about-description">
          <div className="inner-row">
            <div className="about-description-content">
              <div className="about-description-column">
                <h1 data-aos="fade-down">
                  Built on insight. Driven by connection.
                </h1>
                <div className="column-image" data-aos="fade-up">
                  <img src={aboutImg1} alt="" />
                </div>

                <div className="statements">
                  <div className="statement-moja" data-aos="fade-up">
                    <h3>Vision</h3>
                    <p>
                      To shape the future of growth through meaningful brands
                      and empowered teams.
                    </p>
                  </div>
                  <div className="statement-moja" data-aos="fade-up">
                    <h3>Mission</h3>
                    <p>
                      We connect strategy, creativity, and talent to help
                      businesses thrive. Through integrated marketing and
                      recruitment solutions, we empower our clients to scale
                      sustainably.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-description-column">
                <p data-aos="fade-down">
                  9Dots Agency is a dynamic partner for businesses seeking
                  growth. We blend data-driven marketing with human-focused
                  recruiting to deliver results that matter. Every brand we
                  support and every team we help build reflects our commitment
                  to clarity, creativity, and consistency.
                </p>
                <p data-aos="fade-left">
                  Our dual-focus model ensures that our clients not only reach
                  the right audience but also attract the right talent. From
                  brand awareness to workforce retention, 9Dots operates at the
                  intersection of people and performance.
                </p>

                <div className="column-image">
                  <img src={aboutImg2} alt="" data-aos="fade-up" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <div className="inner-row">
            <div className="values-section-content">
              <div className="values-intro">
                <h1 data-aos="fade-down">
                  The principles that power our purpose
                </h1>
                <p data-aos="fade-up">
                  At 9Dots, values are not statements — they’re actions. In
                  every campaign we launch and every candidate we recommend, our
                  principles shape the impact we create.
                </p>
              </div>

              <div className="values-content-row">
                <div className="value-moja" data-aos="zoom-in-right">
                  <div className="value-icon">
                    <img src={transparency} alt="" />
                  </div>
                  <h3>Integrity</h3>
                  <p>
                    We operate with honesty and consistency, ensuring that every
                    decision aligns with the long-term interest of our clients
                    and their audiences.
                  </p>
                </div>
                <div className="value-moja" data-aos="zoom-in">
                  <div className="value-icon">
                    <img src={excellence} alt="" />
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    We deliver our best — always. Whether crafting a marketing
                    strategy or sourcing top talent, excellence is our baseline,
                    not our ambition.
                  </p>
                </div>
                <div className="value-moja" data-aos="zoom-in-left">
                  <div className="value-icon">
                    <img src={trust} alt="" />
                  </div>
                  <h3>Respect</h3>
                  <p>
                    Every interaction begins with respect — for people, for
                    time, for potential. It’s how we build lasting partnerships.
                  </p>
                </div>
                <div className="value-moja" data-aos="zoom-in-right">
                  <div className="value-icon">
                    <img src={results} alt="" />
                  </div>
                  <h3>Inspiration</h3>
                  <p>
                    Creativity fuels our strategies and innovation drives our
                    solutions. We’re inspired by impact, not just ideas.
                  </p>
                </div>
                <div className="value-moja" data-aos="zoom-in-left">
                  <div className="value-icon">
                    <img src={people} alt="" />
                  </div>
                  <h3>Collaboration</h3>
                  <p>
                    We work better when we work together — with clients,
                    partners, and communities. Our process is always
                    collaborative, never transactional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="random-images">
        <div className="random-moja" data-aos="zoom-in">
          <img src={img1} alt="" />
        </div>
        <div className="random-moja" data-aos="zoom-in">
          <img src={img2} alt="" />
        </div>
        <div className="random-moja" data-aos="zoom-in">
          <img src={img3} alt="" />
        </div>
        <div className="random-moja" data-aos="zoom-in">
          <img src={img4} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutDescription;
