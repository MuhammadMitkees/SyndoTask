import React, { useEffect, useState } from "react";
import { NavbarStyle } from "./NavbarStyle";
import logoImage from "../../images/SyndoLogo.svg";
import { useSelector } from "react-redux";
import DarkModeContainer from "../DarkModeContainer/darkModeContainer";

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const { isDark: isDark } = useSelector((state) => state);
  const handleNavClick = (event, sectionId) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  window.addEventListener("scroll", () => {
    setNavbarFixed(false);
    if (window.scrollY === 0) {
      setNavbarFixed(true);
    }
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, [activeSection]);
  useEffect(() => {
    console.log("activeSection logg", activeSection);
  }, [activeSection]);
  return (
    <NavbarStyle
      activeSection={activeSection}
      isDark={isDark}
      navbarFixed={navbarFixed}
    >
      <DarkModeContainer />

      <div className="navbarContainer">
        <a
          onClick={(e) => handleNavClick(e, "weAraHereSection")}
          href="#weAraHereSection"
          className="imageLogoLink"
        >
          <img
            src={logoImage}
            className="navbarContainerItem"
            alt="Syndo-logo"
          />
          <h1 className="logoH1">SYndo</h1>
        </a>
        <div className="navbarContainerItem">
          <a
            onClick={(e) => handleNavClick(e, "exploreSection")}
            className={activeSection === "exploreSection" && "activeNavItem"}
            href="#exploreSection"
          >
            Explore
          </a>
          <a
            onClick={(e) => handleNavClick(e, "proofSection")}
            className={activeSection === "proofSection" && "activeNavItem"}
            href="#proofSection"
          >
            Proof
          </a>
          <a
            onClick={(e) => handleNavClick(e, "testimonialsSection")}
            className={
              activeSection === "testimonialsSection" && "activeNavItem"
            }
            href="#testimonialsSection"
          >
            Testimonials
          </a>
        </div>
        <div className="navbarContainerItem">
          <a href="#">Login</a>
          <a href="#" className="getstartedBtn">
            Get started
          </a>
        </div>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
