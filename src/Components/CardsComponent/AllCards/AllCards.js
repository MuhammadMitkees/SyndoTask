import React from "react";
import { AllCardsStyle } from "./AllCardsStyle";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";
import teldaLogo from "../../../images/Cards/Telda-logo.png";
import trellaLogo from "../../../images/Cards/trella-logo.png";
import kiweLogo from "../../../images/Cards/Kiwe-logo.png";

function AllCards() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CompanyDetails");
    console.log("onclick clicked");
  };

  return (
    <AllCardsStyle>
      <Card
        src={teldaLogo}
        companyTitle="Telda"
        classification="PRE-SEED"
        onClick={handleClick}
        haveBG
        tagOne="FINTECH"
        tagTwo="EQUITY"
      />
      <Card
        src={trellaLogo}
        haveBG
        companyTitle="Trella"
        classification="SERIES-A"
        onClick={handleClick}
        tagOne="TRANSPORTATION"
        tagTwo="EQUITY"
      />
      <Card
        src={kiweLogo}
        haveBG
        companyTitle="Kiwe"
        classification="SERIES-A"
        onClick={handleClick}
        tagOne="TRANSPORTATION"
        tagTwo="DEBT"
      />
    </AllCardsStyle>
  );
}

export default AllCards;
