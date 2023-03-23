import React from "react";
import CardFooter from "./CardFooter/CardFooter";
import { CardStyle } from "./CardStyle";
import teldaLogo from "../../../images/Cards/Telda-logo.png";

function Card() {
  return (
    <CardStyle>
      <div className="cardBackGroundDiv">
        <div className="cardBgLiveContainer">
          <span></span>
          <p>LIVE</p>
        </div>
        <div className="cardBgLogoContainer">
          <img src={teldaLogo} />
        </div>
        <div className="cardBgClassificationContainer">
          <p>PRE-SEED</p>
        </div>
      </div>

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
      <CardFooter />
    </CardStyle>
  );
}

export default Card;
