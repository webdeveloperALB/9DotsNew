import React from 'react'
import contactImg from "../assets/contact-img.png"

const Support = () => {
  return (
    <div className='support-section'>
      <div className="support-content">
        <div className="support-description">
          <div className="support-description-inner">
            <h1 data-aos="fade-right">Support That Moves With Your Business</h1>
            <p data-aos="fade-up">
              Whether you're refining your brand strategy or hiring your next key team member, 9Dots offers responsive, expert support every step of the way. We help businesses navigate change with smart marketing execution and recruiting solutions tailored to their growth stage. Our team is here to ensure your campaigns run smoothly and your hiring process stays on track — because great outcomes rely on great support.
            </p>
          </div>
        </div>
        <div className="support-image" data-aos="fade-left">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Support
