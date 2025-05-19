import React from 'react'
import { NavLink } from 'react-router-dom'

const Nudge = () => {
  return (
    <div className='nudge-content'>
      <h1 data-aos="fade-down"><span>Ready</span> to grow your team and brand?</h1>
      <p data-aos="fade-up">
        9Dots delivers focused marketing and recruitment solutions that help your business attract the right attention — and the right people.
      </p>
      <NavLink to="/contact-us/" data-aos="zoom-in">Get in Touch</NavLink>
    </div>
  )
}

export default Nudge
