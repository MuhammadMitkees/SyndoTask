import React from "react";
import DarkModeContainer from "../../Components/DarkModeContainer/darkModeContainer";
import Navbar from "../../Components/NavBar/Navbar";
import WeAreHere from "../../Components/WeAreHere/WeAreHere";
import ExploreContainer from "../../Components/ExploreContainer/ExploreContainer";
import NumberComponent from "../../Components/NumbersComponent/NumberComponent";
import DoersComponent from "../../Components/DoersComponent/DoersComponent";
import Footer from "../../Components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
import { useSelector } from "react-redux";
function Home() {
  const { isDark: isDark } = useSelector((state) => state);

  return (
    <HomeStyle isDark={isDark}>
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
