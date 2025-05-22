import React from "react";
import star from "../assets/Shap.png";
import costEffective from "../assets/money-bag.png";
import audit from "../assets/seo.png";
import team from "../assets/team.png";
import custom from "../assets/web-management.png";
import benefitsImg from "../assets/about-img2.png";
import ideation from "../assets/idea.png";

const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="benefits-bg-overlay"></div>
      <div className="inner-row">
        <div className="benefits-section-content">
          <div className="benefits-intro">
            <h1 data-aos="fade-right">
              Why industry leaders choose 9Dots over traditional agencies
            </h1>
            <div className="benefits-intro-paragraph">
              <div className="about-spin">
                <img src={star} alt="" />
              </div>
              <p data-aos="fade-left">
                While others specialize in either marketing or recruitment,
                9Dots masters both disciplines. This dual expertise creates
                powerful synergies that amplify your investment and accelerate
                your timeline to success.
              </p>
            </div>
          </div>

          <div className="benefits-section-row">
            <div className="benefits-left">
              <div className="benefit-moja" data-aos="zoom-in-right">
                <div className="icon-section">
                  <img src={team} alt="" />
                </div>
                <h3>Unified Strategic Vision</h3>
                <p>
                  Our rare combination of marketing mastery and recruitment
                  excellence means every touchpoint reinforces your brand while
                  every hire strengthens your market position.
                </p>
              </div>

              <div className="benefit-moja" data-aos="zoom-in-left">
                <div className="icon-section">
                  <img src={costEffective} alt="" />
                </div>
                <h3>Maximum ROI Optimization</h3>
                <p>
                  By integrating marketing and talent strategies, we eliminate
                  redundancies and create compound value — delivering
                  exceptional results while optimizing your investment across
                  both functions.
                </p>
              </div>

              <div className="benefit-moja" data-aos="fade-right">
                <div className="icon-section">
                  <img src={audit} alt="" />
                </div>
                <h3>Competitive Intelligence & Market Mapping</h3>
                <p>
                  Our deep market analysis reveals not just what competitors are
                  doing, but who they're hiring and how to position yourself
                  advantageously in both talent and customer markets.
                </p>
              </div>

              <div className="benefit-moja" data-aos="zoom-in-left">
                <div className="icon-section">
                  <img src={ideation} alt="" />
                </div>
                <h3>Innovation Through Integration</h3>
                <p>
                  We pioneer breakthrough approaches by applying marketing
                  creativity to recruitment challenges and recruitment insights
                  to marketing strategies — creating entirely new competitive
                  advantages.
                </p>
              </div>

              <div className="benefit-moja" data-aos="zoom-in-right">
                <div className="icon-section">
                  <img src={custom} alt="" />
                </div>
                <h3>Agile Partnership Models</h3>
                <p>
                  Whether you need rapid-response crisis management or long-term
                  strategic partnership, our flexible engagement models scale
                  seamlessly with your evolving needs and ambitious growth
                  trajectory.
                </p>
              </div>
            </div>

            <div className="benefits-right">
              <img src={benefitsImg} alt="" data-aos="fade-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
