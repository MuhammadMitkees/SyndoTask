import React from "react";
import { NavbarStyle } from "./NavbarStyle";
import logoImage from "../../images/SyndoLogo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarStyle>
      <div className="navbarContainer">
        <Link to="#" className="imageLogoLink">
          <img
            src={logoImage}
            className="navbarContainerItem"
            alt="Syndo-logo"
          />
          <h1 className="logoH1">SYndo</h1>
        </Link>
        <div className="navbarContainerItem">
          <a>Page 1</a>
          <a>Page 2</a>
          <a>Page 3</a>
        </div>
        <div className="navbarContainerItem">
          <a>Login</a>
          <a className="getstartedBtn">Get started</a>
        </div>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;
