import React from "react";
import { useSelector } from "react-redux";
import DoersCard from "./DoersCard/DoersCard";
import { DoersComponentStyle } from "./DoersComponentStyle";
import person1 from "../../images/Cards/person1-2x.png";
import person2 from "../../images/Cards/person2-2x.png";
import person3 from "../../images/Cards/person3-2x.png";
function DoersComponent() {
  const { isDark: isDark } = useSelector((state) => state);
  return (
    <DoersComponentStyle isDark={isDark}>
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
        <DoersCard
          name="Peter Green"
          position="Company XYZ - CEO"
          src={person1}
        />
        <DoersCard
          name="Jane Brown"
          position="Company XYZ - CEO"
          src={person2}
        />
        <DoersCard name="Isaac Ho" position="Company XYZ - CEO" src={person3} />
      </div>
    </DoersComponentStyle>
  );
}

export default DoersComponent;
