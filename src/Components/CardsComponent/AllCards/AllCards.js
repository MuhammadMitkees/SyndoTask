import React from "react";
import { AllCardsStyle } from "./AllCardsStyle";
import Card from "../Card/Card";

function AllCards() {
  return (
    <AllCardsStyle>
      <Card haveBG />
      <Card haveBG />
      <Card haveBG />
    </AllCardsStyle>
  );
}

export default AllCards;
