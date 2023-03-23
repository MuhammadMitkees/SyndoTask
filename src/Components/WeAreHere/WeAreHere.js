import React from "react";
import { WeAreHereStyle } from "./weAreHereStyle";
import weAraHereImage from "../../images/Group1076.png";

function WeAreHere() {
  return (
    <WeAreHereStyle>
      <div className="weAraHereMainContainer">
        <div className="weAraHereTxtDiv">
          <p>we’re here for you</p>
          <h2>Your first step towards growth!</h2>
          <p className="weAraHereSecondTxt">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
          <a href="#">Get started!</a>
        </div>
        <div className="weAraHereImgDiv">
          <img src={weAraHereImage} />
        </div>
      </div>
    </WeAreHereStyle>
  );
}

export default WeAreHere;
