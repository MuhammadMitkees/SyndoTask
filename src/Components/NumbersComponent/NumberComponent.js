import React from "react";
import { useSelector } from "react-redux";
import { NumberComponentStyle } from "./NumberComponentStyle";
import NumbersCard from "./NumbersCard/NumbersCard";

function NumberComponent() {
  const { isDark: isDark } = useSelector((state) => state);

  return (
    <NumberComponentStyle id="proofSection" isDark={isDark}>
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
