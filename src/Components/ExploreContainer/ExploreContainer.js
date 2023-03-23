import React from "react";
import { ExploreContainerStyle } from "./ExploreContainerStyle";
import AllCards from "../CardsComponent/AllCards/AllCards";

function ExploreContainer() {
  return (
    <ExploreContainerStyle>
      <h2>Explore Current Rounds</h2>
      <AllCards />
    </ExploreContainerStyle>
  );
}

export default ExploreContainer;
