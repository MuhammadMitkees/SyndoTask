import React from "react";
import { AllCardsStyle } from "./AllCardsStyle";
import Card from "../Card/Card";
import teldaLogo from "../../../images/Cards/Telda-logo.png";
import trellaLogo from "../../../images/Cards/trella-logo.png";
import kiweLogo from "../../../images/Cards/Kiwe-logo.png";

function AllCards() {
  return (
    <AllCardsStyle>
      <Card
        src={teldaLogo}
        companyTitle="Telda"
        classification="PRE-SEED"
        haveBG
        tagOne="FINTECH"
        tagTwo="EQUITY"
      />
      <Card
        src={trellaLogo}
        haveBG
        companyTitle="Trella"
        classification="SERIES-A"
        tagOne="TRANSPORTATION"
        tagTwo="EQUITY"
      />
      <Card
        src={kiweLogo}
        haveBG
        companyTitle="Kiwe"
        classification="SERIES-A"
        tagOne="TRANSPORTATION"
        tagTwo="DEBT"
      />
    </AllCardsStyle>
  );
}

export default AllCards;
