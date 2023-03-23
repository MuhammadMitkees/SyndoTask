import React from "react";
import { DoersCardStyle } from "./DoersCardStyle";
import Person1 from "../../../images/Cards/person1-2x.png";

function DoersCard() {
  return (
    <DoersCardStyle>
      <div className="doersCardLargerImageDiv">
        <div className="doersCardSmallerImageDiv">
          <img src={Person1} />
          <div>
            <p>Peter Green</p>
            <p>Company XYZ - CEO</p>
          </div>
        </div>
        <p className="quoteDoersCard">”</p>
      </div>
      <p className="mainTxtDoersCard">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </DoersCardStyle>
  );
}

export default DoersCard;
