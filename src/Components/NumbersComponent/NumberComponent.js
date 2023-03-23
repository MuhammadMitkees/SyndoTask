import React from "react";
import { NumberComponentStyle } from "./NumberComponentStyle";
import NumbersCard from "./NumbersCard/NumbersCard";

function NumberComponent() {
  return (
    <NumberComponentStyle>
      <h2>Let’s talk numbers!</h2>
      <div className="NumbersCardsDiv">
        <NumbersCard />
        <NumbersCard />
        <NumbersCard />
        <NumbersCard />
      </div>
    </NumberComponentStyle>
  );
}

export default NumberComponent;
