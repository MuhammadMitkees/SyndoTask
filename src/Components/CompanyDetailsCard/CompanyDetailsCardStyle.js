import styled from "styled-components";
export const ComanyDetailsCardStyle = styled.div`
  border-radius: 8px;
  .cardBackGroundDiv {
    max-width: 100%;
    position: relative;
  }
  .companyDetailsDiv {
    width: 450px;
    padding-top: 25px;
    padding-bottom: 31px;
    margin: auto;
    border-bottom: 1px solid #cdd9e3;
    background-color: #ffffff;
  }
  .companyDetailsDiv p {
    color: #656f77;
    font-size: 14px;
    font-weight: 400;
  }
  h3 {
    font-size: 24px;
    font-weight: 900;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    padding-left: 0;
  }
  ul li {
    font-size: 14px;
    font-weight: 900;
    padding: 4px 15px;
    border-radius: 8px;
  }
  ul li:first-child {
    background-color: #ddf3f4;
    color: #00acb1;
    margin-right: 10px;
  }
  ul li:last-child {
    background-color: #ffdeb7;
    color: #f29304;
  }

  .cardBgLiveContainer p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 900;
    margin-left: 5px;
  }
  .cardBgLiveContainer span {
    content: "  ";
    background-color: #ffffff;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  .cardBgLiveContainer,
  .cardBgLogoContainer,
  .cardBgClassificationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 8px;
  }
  .cardBgLiveContainer {
    width: 180px;
    background-color: #7dd752;
    height: 30px;

    left: 31px;
    top: 25px;
  }
  .cardBgLogoContainer {
    background-color: #ffffff;
    height: 96px;
    width: 96px;
    left: 31px;
    bottom: 24px;
  }
  .cardBgClassificationContainer {
    width: 180px;
    height: 30px;
    background-color: #cdd9e3;
    right: 29px;
    bottom: 24px;
  }
  .cardBgClassificationContainer p {
    font-size: 16px;
    font-weight: 900;
    color: #656f77;
  }
  .cardBgLessDiv {
    height: 150px;
  }
  .cardBgLessLogoContainer {
  }
  .carFooterContainer,
  .companyDetailsDivContainer {
    background-color: #ffffff;
  }
`;
