import styled from "styled-components";
import BGImage from "../../images/CompanyDetails/BgImage.svg";

export const CompanyDetailsStyle = styled.div`
  background-color: #000000;
  .CompanyDetailsMainContainer {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
  .HeaderCompanyDetails {
    display: flex;
    flex-wrap: wrap;
    background-image: url(${BGImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .detailsHeaderCompanyDetails {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 160px;
    align-items: flex-start;
  }
  .logoAndApply {
    display: flex;
    flex-wrap: wrap;
  }
  .FirstDivLogoAndApply {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .FirstDivLogoAndApply h2 {
    font-size: 40px;
    font-weight: 900;
    color: #ffffff;
    margin-bottom: 10px;
  }
  .FirstDivLogoAndApply p {
    color: #7dd752;
    font-size: 16px;
    font-weight: 900;
    margin-top: 0;
  }
  .FirstDivLogoAndApply p::before {
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #7dd752;
    color: #7dd752;
    margin-right: 5px;
    display: inline-block;
  }
  .logoAndApplyLogo {
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }
  .FirstDivLogoAndApply .authenticationIcon {
    width: 35px;
    position: relative;
    bottom: 35px;
    margin-left: 10px;
  }
  .logoAndApply button {
    width: 250px;
    height: 40px;
    background-color: #00acb1;
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
    text-align: center;
    align-items: center;
    border-radius: 8px;
    margin-top: 70px;
  }
  .CardHeaderCompanyDetails {
    position: relative;
    top: 60px;
  }
  .HeaderCompanyDetailsSubDiv {
    max-width: 1200px;
    margin: auto;
    padding-top: 70px;
    width: 100%;
  }
  .SMIconsCompanydetails {
    margin-top: 120px;
  }
  .SMIconsLinksCompanydetails {
    margin-right: 15px;
  }
  .cardBgClassificationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 120px;
    height: 25px;
    background-color: #ddf3f4;
    margin-top: 35px;
  }

  .cardBgClassificationContainer p {
    font-size: 12px;
    font-weight: 900;
    color: #00acb1;
  }
`;
