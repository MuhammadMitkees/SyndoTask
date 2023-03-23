import React from "react";
import { FooterStyle } from "./FooterStyle";
import SyndoLogo from "../../images/SyndoLogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterStyle>
      <div className="headerDivFooter">
        <div className="logoDivFooter">
          <img src={SyndoLogo} />
          <h5>created by angels for angels</h5>
          <Link className="footerLogoLinks">Privacy Policy</Link>
          <Link className="footerLogoLinks">Legal Terms</Link>
        </div>
        <div className="seconDivHeaderFooter">
          <div className="subDivseconDivHeaderFooter">
            <h5>Home</h5>
            <Link className="footerLink">For Investors</Link>
            <Link className="footerLink">For Companies</Link>
          </div>
          <div className="subDivseconDivHeaderFooter">
            <h5>About us</h5>
            <Link className="footerLink">About Us</Link>
            <Link className="footerLink">Risk</Link>
          </div>
          <div className="subDivseconDivHeaderFooter">
            <h5>resources</h5>
            <Link className="footerLink">For Investors</Link>
            <Link className="footerLink">For Companies</Link>
          </div>
          <div className="subDivseconDivHeaderFooter">
            <h5>EN</h5>
          </div>
        </div>
      </div>
      <p className="footerMainTxt">
        The Syndo credit & risk grading system is not a measure of the quality
        of the investment and is not meant to replace individual due diligence.
        Syndo’s credit & risk grading system is a feasibility study on the
        company and should not be considered a guarantee or a promise on future
        performance. Historical data is used to assess the possibility of
        default and not eliminate risk. Ratings are for informational purposes
        only. Ratings are not individualized for any specific investor’s
        financial situation and should not be considered investment advice. Each
        investor should carefully consider investments in any loan with his/her
        understanding of the investment.
      </p>
      <p className="footerRightsTxt">© 2022 syndo. All rights reserved</p>
    </FooterStyle>
  );
}

export default Footer;
