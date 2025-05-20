import React, { useEffect } from "react";
import Support from "./Support";
import Nudge from "./Nudge";
// Import all the logos as in the original code
// Import all 31 logos
import asset1 from "../assets/partners/Asset 1.png";
import asset2 from "../assets/partners/Asset 2.png";
import asset3 from "../assets/partners/Asset 3.png";
import asset4 from "../assets/partners/Asset 4.png";
import asset5 from "../assets/partners/Asset 5.png";
import asset6 from "../assets/partners/Asset 6.png";
import asset7 from "../assets/partners/Asset 7.png";
import asset8 from "../assets/partners/Asset 8.png";
import asset9 from "../assets/partners/Asset 9.png";
import asset10 from "../assets/partners/Asset 10.png";
import asset11 from "../assets/partners/Asset 11.png";
import asset12 from "../assets/partners/Asset 12.png";
import asset13 from "../assets/partners/Asset 13.png";
import asset14 from "../assets/partners/Asset 14.png";
import asset15 from "../assets/partners/Asset 15.png";
import asset16 from "../assets/partners/Asset 16.png";
import asset17 from "../assets/partners/Asset 17.png";
import asset18 from "../assets/partners/Asset 18.png";
import asset19 from "../assets/partners/Asset 19.png";
import asset20 from "../assets/partners/Asset 20.png";
import asset21 from "../assets/partners/Asset 21.png";
import asset22 from "../assets/partners/Asset 22.png";
import asset23 from "../assets/partners/Asset 23.png";
import asset24 from "../assets/partners/Asset 24.png";
import asset25 from "../assets/partners/Asset 25.png";
import asset26 from "../assets/partners/Asset 26.png";
import asset27 from "../assets/partners/Asset 27.png";
import asset28 from "../assets/partners/Asset 28.png";
import asset29 from "../assets/partners/Asset 29.png";
import asset30 from "../assets/partners/Asset 30.png";
import asset31 from "../assets/partners/Asset 31.png";

// Define the logos array
const logos = [
  { id: 1, name: "asset1", src: asset1 },
  { id: 2, name: "asset2", src: asset2 },
  { id: 3, name: "asset3", src: asset3 },
  { id: 4, name: "asset4", src: asset4 },
  { id: 5, name: "asset5", src: asset5 },
  { id: 6, name: "asset6", src: asset6 },
  { id: 7, name: "asset7", src: asset7 },
  { id: 8, name: "asset8", src: asset8 },
  { id: 9, name: "asset9", src: asset9 },
  { id: 10, name: "asset10", src: asset10 },
  { id: 11, name: "asset11", src: asset11 },
  { id: 12, name: "asset12", src: asset12 },
  { id: 13, name: "asset13", src: asset13 },
  { id: 14, name: "asset14", src: asset14 },
  { id: 15, name: "asset15", src: asset15 },
  { id: 16, name: "asset16", src: asset16 },
  { id: 17, name: "asset17", src: asset17 },
  { id: 18, name: "asset18", src: asset18 },
  { id: 19, name: "asset19", src: asset19 },
  { id: 20, name: "asset20", src: asset20 },
  { id: 21, name: "asset21", src: asset21 },
  { id: 22, name: "asset22", src: asset22 },
  { id: 23, name: "asset23", src: asset23 },
  { id: 24, name: "asset24", src: asset24 },
  { id: 25, name: "asset25", src: asset25 },
  { id: 26, name: "asset26", src: asset26 },
  { id: 27, name: "asset27", src: asset27 },
  { id: 28, name: "asset28", src: asset28 },
  { id: 29, name: "asset29", src: asset29 },
  { id: 30, name: "asset30", src: asset30 },
  { id: 31, name: "asset31", src: asset31 },
];

const Partners = () => {
  // This effect adjusts animation speed based on number of logos
  useEffect(() => {
    // Calculate animation duration based on number of logos
    // More logos = need more time for full scroll
    const logoTracks = document.querySelectorAll(".logo-track");
    const baseSpeed = 3.5; // seconds per logo (increased from 2 for even slower animation)

    logoTracks.forEach((track, index) => {
      const duration = logos.length * baseSpeed;
      // Add a slight variation between tracks
      track.style.animationDuration = `${duration + index * 12}s`;
    });
  }, []);

  return (
    <div className="partners-section">
      <div className="inner-row">
        <div className="partners-section-content">
          <div className="partners-intro">
            <h1 data-aos="fade-down">Brands we've worked with</h1>
            <p data-aos="fade-up">
              Our team has a successful track record of helping brands scale
              profitably based on high-performing strategies.
            </p>
          </div>

          <div className="logo-carousel-container">
            {/* First row of scrolling logos */}
            <div className="logo-carousel">
              <div className="logo-track">
                {/* Original set of logos */}
                {logos.map((logo) => (
                  <div key={logo.id} className="partner-logo">
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
                {/* Duplicate set for seamless looping */}
                {logos.map((logo) => (
                  <div key={`${logo.id}-dup`} className="partner-logo">
                    <img src={logo.src} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Second row scrolling in opposite direction */}
            <div className="logo-carousel reverse">
              <div className="logo-track">
                {/* Original set of logos */}
                {logos
                  .slice()
                  .reverse()
                  .map((logo) => (
                    <div key={`${logo.id}-rev`} className="partner-logo">
                      <img src={logo.src} alt={logo.name} />
                    </div>
                  ))}
                {/* Duplicate set for seamless looping */}
                {logos
                  .slice()
                  .reverse()
                  .map((logo) => (
                    <div key={`${logo.id}-rev-dup`} className="partner-logo">
                      <img src={logo.src} alt={logo.name} />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <Support />
          <Nudge />
        </div>
      </div>

      {/* CSS for the infinite scrolling carousel */}
      <style jsx>{`
        .logo-carousel-container {
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
        }

        .logo-carousel {
          overflow: hidden;
          width: 100%;
          margin-bottom: 30px;
        }

        .logo-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .logo-carousel.reverse .logo-track {
          animation: scroll-reverse 25s linear infinite;
        }

        .partner-logo {
          border-radius: 2rem;
          flex-shrink: 0;
          width: 150px;
          height: 100px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        @media (max-width: 500px) {
          .partner-logo {
            height: 80px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Default animation for when JS doesn't run */
        .logo-track {
          animation: scroll 90s linear infinite;
        }

        .logo-carousel.reverse .logo-track {
          animation: scroll-reverse 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;
