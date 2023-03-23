import React from "react";
import DarkModeContainer from "../../Components/DarkModeContainer/darkModeContainer";
import Navbar from "../../Components/NavBar/Navbar";
import WeAreHere from "../../Components/WeAreHere/WeAreHere";
import ExploreContainer from "../../Components/ExploreContainer/ExploreContainer";
import NumberComponent from "../../Components/NumbersComponent/NumberComponent";
import DoersComponent from "../../Components/DoersComponent/DoersComponent";
import Footer from "../../Components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
function Home() {
  return (
    <HomeStyle>
      <DarkModeContainer />
      <Navbar />
      <div className="homeBodyContainer">
        <WeAreHere />
        <ExploreContainer />
        <NumberComponent />
        <DoersComponent />
        <Footer />
      </div>
    </HomeStyle>
  );
}

export default Home;
