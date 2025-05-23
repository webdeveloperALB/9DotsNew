import React, { useContext, useEffect, useRef } from "react";
import logo from "../../assets/Logo.svg";
import { CgClose } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { navContext } from "./navcontext";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Sidebar = () => {
  const [status, setStatus] = useContext(navContext);
  const sidebarContainer = useRef();
  const overlay = useRef();
  const sidebarBox = useRef();

  const removeMenu = () => {
    setStatus(!status);
  };

  useEffect(() => {
    if (status) {
      sidebarContainer.current.classList.add("active");
      sidebarBox.current.classList.add("active");
      overlay.current.classList.add("active");

      gsap.to(overlay.current, {
        duration: 0.35, // Balanced overlay in speed
        y: "100%",
        ease: "power2.out",
      });
      gsap.to(sidebarBox.current, {
        duration: 0.6, // Balanced sidebar slide in
        x: "0",
        ease: "power2.out",
        delay: 0.25, // Moderate delay
      });
    }

    if (!status && sidebarContainer.current.classList.contains("active")) {
      gsap.to(sidebarBox.current, {
        duration: 0.6, // Balanced sidebar slide out
        x: "-100%",
        ease: "power2.in",
      });
      gsap.to(overlay.current, {
        duration: 0.35, // Balanced overlay out
        y: "0",
        ease: "power2.in",
        delay: 0.4, // Moderate delay
      });
      setTimeout(() => {
        sidebarBox.current.classList.remove("active");
        overlay.current.classList.remove("active");
        sidebarContainer.current.classList.remove("active");
      }, 1000); // Balanced cleanup delay
    }
  }, [status]);

  return (
    <div ref={sidebarContainer} className="sidebar-container">
      <div ref={overlay} className="sidebar-overlay"></div>
      <div ref={sidebarBox} className="sidebar-content">
        <div className="inner-row">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" className="logo-image" />
            </a>
            <span onClick={removeMenu}>
              <CgClose />
            </span>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to={"/"} activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about-us/"} activeclassname="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services/"} activeclassname="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio/" activeclassname="active">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us/" activeclassname="active">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="call-to-action">
              <a
                href="https://wa.me/355685861003?text=Hello!%20I'm%20reaching%20out%20after%20discovering%209Dots%20Agency.%20I'm%20interested%20in%20your%20marketing%20and%20recruiting%20services%20and%20would%20love%20to%20hear%20how%20you%20can%20support%20my%20growth%20goals.%20Can%20we%20chat%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <IoLogoWhatsapp />
                </span>{" "}
                Let's Talk
              </a>
            </div>
          </nav>

          <div className="mobile-menu-trigger">
            <span>
              <CgMenuRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
