import React from "react";
import { DoersCardStyle } from "./DoersCardStyle";
import chap from "../../../images/CompanyDetails/”.png";
import { useSelector } from "react-redux";

function DoersCard(props) {
  const { isDark: isDark } = useSelector((state) => state);

  return (
    <DoersCardStyle isDark={isDark}>
      <div className="doersCardLargerImageDiv">
        <div className="doersCardSmallerImageDiv">
          <img src={props.src} />
          <div>
            <p>{props.name}</p>
            <p>{props.position}</p>
          </div>
        </div>
        <img src={chap} />
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
