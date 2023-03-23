import React from "react";
import { Link } from "react-router-dom";
import { CardFooterStyle } from "./CardFooterStyle";
import person1Img from "../../../../images/Cards/person1.png";
import person2Img from "../../../../images/Cards/person2.png";
import person3Img from "../../../../images/Cards/person3.png";

function CardFooter() {
  return (
    <CardFooterStyle>
      <div>
        <Link className="personImg1">
          <img src={person1Img} />
        </Link>
        <Link className="personImg2">
          <img src={person2Img} />
        </Link>
        <Link className="personImg3">
          <img src={person3Img} />
        </Link>
      </div>

      <p>
        Followed by <Link className="cardFoooterLink">Mohamed Aziz</Link> and
        <Link className="cardFoooterLink"> 12 others</Link>
      </p>
    </CardFooterStyle>
  );
}

export default CardFooter;
