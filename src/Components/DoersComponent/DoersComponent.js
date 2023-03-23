import React from "react";
import DoersCard from "./DoersCard/DoersCard";
import { DoersComponentStyle } from "./DoersComponentStyle";

function DoersComponent() {
  return (
    <DoersComponentStyle>
      <div className="DoersComponentHeader">
        <h2>Hear It from Our Doers</h2>
        <ul className="sliderControlsDoersComp">
          <li className="chevronLeft">{"<"}</li>
          <li className="dotsSliderControlsDoersComp"></li>
          <li className="dotsSliderControlsDoersComp"></li>
          <li className="dotsSliderControlsDoersComp"></li>
          <li className="dotsSliderControlsDoersComp"></li>
          <li className="chevronRight">{">"}</li>
        </ul>
      </div>

      <div className="allDoersCardsDiv">
        <DoersCard />
        <DoersCard />
        <DoersCard />
      </div>
    </DoersComponentStyle>
  );
}

export default DoersComponent;
