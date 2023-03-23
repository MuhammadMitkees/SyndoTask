import React, { useState } from "react";
import { AboutCompanyStyle } from "./AboutCompanyStyle";
import linkedIcon from "../../../images/CompanyDetails/linkedinIcon.png";
import person1 from "../../../images/CompanyDetails/person1.png";
import person2 from "../../../images/CompanyDetails/person2.png";
import pitchDeck from "../../../images/CompanyDetails/pitchDeck.png";
import infoIcon from "../../../images/CompanyDetails/infoIcon.png";

function AboutCompany() {
  const [aboutCompanySelected, setAboutCompanySelected] = useState(true);
  const [currenRoundSelected, setCurrenRoundSelected] = useState(false);

  const handleAboutSwitch = () => {
    setAboutCompanySelected(true);
    setCurrenRoundSelected(false);
    console.log("about clicked");
  };
  const handleCurrentRoundSwitch = () => {
    setAboutCompanySelected(false);
    setCurrenRoundSelected(true);
    console.log("curren round clicked");
  };
  const MeetTheTeamCard = (props) => {
    return (
      <div className="MeetTheTeamCard">
        <img src={props.firstImagesrc} />
        <h4>John Doe</h4>
        <p>CEO</p>
        <img src={props.secImagesrc} />
      </div>
    );
  };
  const PitchDeckCard = () => {
    return (
      <div className="pitchDeckContainer">
        <h3>Pitch Deck</h3>
        <img src={pitchDeck} />
      </div>
    );
  };
  const SecDivAboutCompanyTable = (props) => {
    return (
      <div className="secDivAboutCompanyRow">
        <h3>{props.title}</h3>
        <div>
          <p>{props.subTitle}</p>
          <img src={infoIcon} />
        </div>
      </div>
    );
  };
  return (
    <AboutCompanyStyle>
      <div className="mainContainerAboutCompany">
        <div className="firstDivAboutCompany">
          <div className="titledivAboutCompany">
            <h3
              onClick={handleAboutSwitch}
              className={
                aboutCompanySelected
                  ? "aboutCompanySelected"
                  : "aboutCompanyNotSelected"
              }
            >
              About the company
            </h3>
            <h3
              onClick={handleCurrentRoundSwitch}
              className={
                currenRoundSelected
                  ? "currentRoundSelected"
                  : "currentRoundNotSelected"
              }
            >
              Current Round
            </h3>
          </div>
          <div className="txtDivFirstDivAboutcomp">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="titleDivTxtDiv">
              <div>
                <h3>Title 1</h3>
                <p>Sed ut perspiciatis</p>
              </div>
              <div>
                <h3>Title 2</h3>
                <p>Sed ut perspiciatis</p>
              </div>
              {currenRoundSelected && (
                <div>
                  <h3>Title 3</h3>
                  <p>Sed ut perspiciatis</p>
                </div>
              )}
            </div>
          </div>

          {aboutCompanySelected && (
            <div className="meetTheTeamDiv">
              <h3>Meet The Team</h3>
              <div className="MeetTheTeamCards">
                <MeetTheTeamCard
                  firstImagesrc={person1}
                  secImagesrc={linkedIcon}
                />
                <MeetTheTeamCard
                  firstImagesrc={person2}
                  secImagesrc={linkedIcon}
                />
                <MeetTheTeamCard
                  firstImagesrc={person1}
                  secImagesrc={linkedIcon}
                />
                <MeetTheTeamCard
                  firstImagesrc={person2}
                  secImagesrc={linkedIcon}
                />
              </div>
            </div>
          )}
          {currenRoundSelected && <PitchDeckCard />}
        </div>
        <div className="secDivAboutCompany">
          <h3>Brief</h3>
          <SecDivAboutCompanyTable title="Transportation" subTitle="Industry" />
          <SecDivAboutCompanyTable
            title="Limited Liability Company"
            subTitle="Company Type"
          />
          <SecDivAboutCompanyTable
            title="Egypt"
            subTitle="Country of Incorporation"
          />
          <SecDivAboutCompanyTable
            title="April 2021"
            subTitle="Date of Incorporation"
          />
          <SecDivAboutCompanyTable
            title="Revenue Generating"
            subTitle="IndustStartup Stagery"
          />
        </div>
      </div>
    </AboutCompanyStyle>
  );
}

export default AboutCompany;
