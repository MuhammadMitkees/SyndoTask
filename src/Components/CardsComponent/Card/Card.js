import React from "react";
import { useNavigate } from "react-router-dom";
import CardFooter from "./CardFooter/CardFooter";
import { CardStyle } from "./CardStyle";

function Card(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CompanyDetails");
  };
  return (
    <CardStyle>
      <div onClick={handleClick}>
        <div className="cardBackGroundDiv">
          <div className="cardBgLiveContainer">
            <span></span>
            <p>LIVE</p>
          </div>
          <div className="cardBgLogoContainer">
            <img src={props.src} />
          </div>
          <div className="cardBgClassificationContainer">
            <p>{props.classification}</p>
          </div>
        </div>

        <div className="companyDetailsDiv">
          <h3>{props.companyTitle}</h3>
          <p>
            Syndo derived from syndication and is here to bridge the gap between
            Business Owners and Investors.
          </p>
          <ul>
            <li>{props.tagOne}</li>
            <li>{props.tagTwo}</li>
          </ul>
        </div>
        <CardFooter />
      </div>
    </CardStyle>
  );
}

export default Card;
