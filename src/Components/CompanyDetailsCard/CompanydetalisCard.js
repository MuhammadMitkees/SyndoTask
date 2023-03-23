import React from "react";
import teldaLogo from "../../images/Cards/Telda-logo.png";
import CardFooter from "../CardsComponent/Card/CardFooter/CardFooter";
import { ComanyDetailsCardStyle } from "./CompanyDetailsCardStyle";

function CompanyDetailsCard(props) {
  return (
    <ComanyDetailsCardStyle
      style={props.isApplicationform ? { width: "20vw" } : { width: "28vw" }}
    >
      <div className="cardBackGroundDiv">
        <div className="cardBgLogoContainer">
          <img src={teldaLogo} />
        </div>
      </div>
      <div className="companyDetailsDivContainer">
        <div className="companyDetailsDiv">
          <h3>Telda</h3>
          <p>
            Syndo derived from syndication and is here to bridge the gap between
            Business Owners and Investors.
          </p>
          <ul>
            <li>FINTECH</li>
            <li>EQUITY</li>
          </ul>
        </div>
      </div>
      <div className="carFooterContainer">
        <CardFooter />
      </div>
    </ComanyDetailsCardStyle>
  );
}

export default CompanyDetailsCard;
