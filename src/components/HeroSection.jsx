import React, { useEffect, useRef, useState } from "react";
import { RiPlayMiniFill } from "react-icons/ri";
import heroImage1 from "../assets/marketing&recr/1.png";
import heroImage2 from "../assets/marketing&recr/Rec1.png";
import heroImage3 from "../assets/marketing&recr/9.png";
import { CgClose } from "react-icons/cg";
import { gsap } from "gsap";
import "./Hero.css"
const HeroSection = () => {
  const [modalactive, setModal] = useState(false);
  const modal = useRef();
  const overlay = useRef();
  const videoBox = useRef();

  const openModal = (e) => {
    e.stopPropagation();
    setModal(true);
  };
  useEffect(() => {
    if (modalactive) {
      modal.current.classList.add("active");
      let modalTimeline = gsap.timeline();
      modalTimeline.to(overlay.current, {
        y: 0,
        duration: 1,
      });
      modalTimeline.to(videoBox.current, {
        scale: 1,
        duration: 1,
      });
    } else {
      let modalTimeline = gsap.timeline();
      modalTimeline.to(videoBox.current, {
        scale: 0,
        duration: 1,
      });
      modalTimeline.to(overlay.current, {
        y: "-100%",
        duration: 1,
      });
      setTimeout(() => {
        modal.current.classList.remove("active");
      }, 2200);
    }
  }, [modalactive]);
  return (
    <div className="hero-section">
      <div className="bg-art"></div>
      <div className="inner-row">
        <div className="hero-section-content">
          {/* <div className="hero-overlay-kidogo"></div> */}
          <div className="hero-texts">
            <div className="hero-title">
              <h1 data-aos="fade-down">
                <span>9Dots </span>Agency
              </h1>
            </div>
            <p data-aos="fade-up" data-aos-offset="-100">
              Marketing your brand. Recruiting your team. Powering your growth.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-offset="-200"
              data-aos-delay="300"
              className="hero-btn"
              onClick={openModal}
            >
              <span>
                <RiPlayMiniFill className="play-icon" />
              </span>
              <h2>Watch Video</h2>
            </div>
          </div>

          <div className="hero-images-container">
            <div className="hero-images-row">
              <div className="hero-image-moja">
                <img
                  src={heroImage1}
                  alt=""
                  loading="lazy"
                  data-aos="zoom-in-up"
                  data-aos-offset="-250"
                />
              </div>
              <div className="hero-image-moja middle">
                <img
                  src={heroImage2}
                  alt=""
                  loading="lazy"
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                />
              </div>
              <div className="hero-image-moja">
                <img
                  src={heroImage3}
                  alt=""
                  loading="lazy"
                  data-aos="zoom-in-up"
                  data-aos-offset="-250"
                />
              </div>
            </div>
          </div>

          {/* Video Modal part*/}
          <div className="video-modal" ref={modal}>
            <div className="overlay" ref={overlay}></div>
            <div className="video-modal-content" ref={videoBox}>
              <span className="close-btn" onClick={() => setModal(false)}>
                <CgClose />
              </span>
              <div className="video-body">
                {modalactive && (
                  <video
                    src="/9dotsteam.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
