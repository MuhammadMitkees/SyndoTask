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
    event.preventDefault(); // Prevent default anchor behavior
    const navbar = document.querySelector("#navbarStyleContain");
    const navbarHeight = navbar ? navbar.offsetHeight : 0; // Get navbar's current height
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - navbarHeight; // Calculate section's top position minus navbar height
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      setActiveSection(sectionId);
    }, 100);
  };
  window.addEventListener("scroll", () => {
    setNavbarFixed(false);
    if (window.scrollY === 0) {
      setNavbarFixed(true);
    }
  });
  useEffect(() => {
    const navbar = document.querySelector("#navbarStyleContain");
    const navbarHeight = navbar ? `${navbar.offsetHeight}px` : "0px";
    const observer = new IntersectionObserver(
      (entries) => {
        let activeId;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
            // Break the loop if we find a fully visible section
            if (entry.intersectionRatio >= 0.5) {
              break;
            }
          }
        }
        setActiveSection(activeId);
      },
      {
        threshold: [0, 0.5, 1], // Callback will be invoked when 0%, 50%, and 100% of target's visibility changes
      },
      { rootMargin: `-${navbarHeight} 0px 0px 0px` }
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
      id="navbarStyleContain"
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
