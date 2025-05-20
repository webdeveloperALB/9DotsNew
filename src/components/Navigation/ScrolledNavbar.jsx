import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.svg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { navContext } from "./navcontext";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const ScrolledNavbar = () => {
  const [active, setActive] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useContext(navContext);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const toggleMenu = () => {
    setSidebarStatus(!sidebarStatus);
  };
  return (
    <header className={active ? "scrolled active" : "scrolled"}>
      <div className="inner-row">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" className="logo-image" />
            </a>
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
              <a href="s">
                <span>
                  <IoLogoWhatsapp />
                </span>{" "}
                Let's Talk
              </a>
            </div>
          </nav>

          <div className="mobile-menu-trigger" onClick={toggleMenu}>
            <span>
              <CgMenuRight />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ScrolledNavbar;
