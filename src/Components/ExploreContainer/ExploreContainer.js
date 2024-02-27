import React from "react";
import { ExploreContainerStyle } from "./ExploreContainerStyle";
import AllCards from "../CardsComponent/AllCards/AllCards";
import { useSelector } from "react-redux";

function ExploreContainer() {
  const { isDark: isDark } = useSelector((state) => state);

  return (
    <ExploreContainerStyle id="exploreSection" isDark={isDark}>
      <h2>Explore Current Rounds</h2>
      <AllCards />
    </ExploreContainerStyle>
  );
}

export default ExploreContainer;
