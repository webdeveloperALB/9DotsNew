import React from 'react'
import star from "../assets/Shap.png"
import costEffective from "../assets/money-bag.png"
import audit from "../assets/seo.png"
import team from "../assets/team.png"
import custom from "../assets/web-management.png"
import benefitsImg from "../assets/about-img2.png"
import ideation from "../assets/idea.png"

const Benefits = () => {
  return (
    <div className='benefits-section'>
      <div className="benefits-bg-overlay"></div>
      <div className="inner-row">
        <div className="benefits-section-content">

          <div className="benefits-intro">
            <h1 data-aos='fade-right'>What makes 9Dots different from traditional agencies</h1>
            <div className="benefits-intro-paragraph">
              <div className="about-spin">
                <img src={star} alt="" />
              </div>
              <p data-aos='fade-left'>
                At 9Dots Agency, we don’t just fill positions or run campaigns — we create long-term value by aligning your brand strategy with the people you bring into your business.
              </p>
            </div>
          </div>

          <div className="benefits-section-row">
            <div className="benefits-left">

              <div className="benefit-moja" data-aos='zoom-in-right'>
                <div className="icon-section">
                  <img src={team} alt="" />
                </div>
                <h3>Integrated Expertise</h3>
                <p>
                  Our team brings combined expertise in marketing and recruitment, allowing us to understand your brand and your people needs — all in one place.
                </p>
              </div>

              <div className="benefit-moja" data-aos='zoom-in-left'>
                <div className="icon-section">
                  <img src={costEffective} alt="" />
                </div>
                <h3>Smart Use of Budget</h3>
                <p>
                  We design lean, high-impact strategies that prioritize results — whether you're launching a new campaign or hiring for a key role.
                </p>
              </div>

              <div className="benefit-moja" data-aos='fade-right'>
                <div className="icon-section">
                  <img src={audit} alt="" />
                </div>
                <h3>Strategic Marketing Audits</h3>
                <p>
                  We assess your current marketing efforts to find what’s working, what’s not, and where there’s untapped potential — with clear recommendations.
                </p>
              </div>

              <div className="benefit-moja" data-aos='zoom-in-left'>
                <div className="icon-section">
                  <img src={ideation} alt="" />
                </div>
                <h3>Original Campaign Ideas</h3>
                <p>
                  From recruitment branding to digital outreach, we craft creative strategies that resonate with both customers and potential hires.
                </p>
              </div>

              <div className="benefit-moja" data-aos='zoom-in-right'>
                <div className="icon-section">
                  <img src={custom} alt="" />
                </div>
                <h3>Tailored Service Packages</h3>
                <p>
                  No two companies are alike. We build flexible solutions that adapt to your goals — whether you need a full-funnel marketing plan or support filling urgent roles.
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
  )
}

export default Benefits
