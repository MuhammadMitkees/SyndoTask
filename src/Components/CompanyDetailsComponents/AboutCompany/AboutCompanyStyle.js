import styled from "styled-components";

export const AboutCompanyStyle = styled.div`
  .mainContainerAboutCompany {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    padding-bottom: 90px;
  }
  h3,
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .titledivAboutCompany {
    width: 40vw;
    border-bottom: 1px solid #acb8c2;
    display: flex;
  }
  .aboutCompanySelected,
  .aboutCompanyNotSelected,
  .currentRoundSelected,
  .currentRoundNotSelected {
    font-weight: 900;
    font-size: 18px;
    padding-bottom: 25px;
    transition: 0.5s ease-in-out;
  }
  .aboutCompanySelected,
  .currentRoundSelected {
    color: #ffffff;
    border-bottom: 3px solid #00acb1;
  }
  .aboutCompanyNotSelected,
  .currentRoundNotSelected {
    color: #656f77;
  }
  .currentRoundSelected,
  .currentRoundNotSelected {
    margin-left: 100px;
  }
  .titledivAboutCompany h3 {
    cursor: pointer;
  }
  .txtDivFirstDivAboutcomp {
    width: 50vw;
    padding-bottom: 65px;
    padding-top: 50px;
    border-bottom: 1px solid #acb8c2;
  }
  .txtDivFirstDivAboutcomp > p {
    font-weight: 400;
    font-size: 14px;
    color: #acb8c2;
  }
  .titleDivTxtDiv {
    display: flex;
    margin-top: 50px;
  }
  .titleDivTxtDiv h3,
  .meetTheTeamDiv h3,
  .pitchDeckContainer h3 {
    font-weight: 900;
    font-size: 18px;
    color: #ffffff;
  }
  .meetTheTeamDiv,
  .pitchDeckContainer {
    padding-top: 50px;
  }
  .titleDivTxtDiv p {
    font-weight: 400;
    font-size: 14px;
    color: #acb8c2;
  }
  .titleDivTxtDiv div:nth-child(n + 2) {
    margin-left: 10vw;
  }
  .MeetTheTeamCard,
  .MeetTheTeamCards {
    display: flex;
  }
  .MeetTheTeamCard {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5vw;
  }
  .MeetTheTeamCards {
    justify-content: flex-start;
    margin-top: 30px;
  }
  .MeetTheTeamCard h4 {
    font-weight: 900;
    font-size: 14px;
    color: #ffffff;
    margin-top: 30px;
  }
  .MeetTheTeamCard p {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }
  .pitchDeckContainer img {
    margin-top: 25px;
    width: 50vw;
  }
  .secDivAboutCompany {
    width: 18vw;
  }
  .secDivAboutCompany > h3 {
    font-weight: 900;
    font-size: 18px;
    color: #ffffff;
    padding-bottom: 30px;
    margin-bottom: 35px;
    border-bottom: 1px solid #acb8c2;
  }
  .secDivAboutCompanyRow {
    margin-bottom: 35px;
    padding-right: 20px;
    border-bottom: 1px solid #acb8c2;
  }
  .secDivAboutCompanyRow h3 {
    width: 100%;
    font-weight: 900;
    font-size: 16px;
    color: #ffffff;
  }
  .secDivAboutCompanyRow div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .secDivAboutCompanyRow div p {
    font-weight: 600;
    font-size: 16px;
    color: #acb8c2;
  }
  .secDivAboutCompanyRow div img {
    width: 16px;
    height: 16px;
  }
`;
