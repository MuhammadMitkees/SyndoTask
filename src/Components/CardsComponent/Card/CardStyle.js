import styled from "styled-components";
import BGimage from "../../../images/Cards/BackgroundImage.png";
export const CardStyle = styled.div`
  width: 30%;
  background-color: #ffffff;
  border-radius: 8px;
  .cardBackGroundDiv {
    height: 200px;
    background-image: url(${BGimage});
    background-position: center;
    background-size: cover;
    max-width: 100%;
    position: relative;
  }
  .companyDetailsDiv {
    width: 95%;
    padding-top: 15px;
    padding-bottom: 15px;
    margin: auto;
    border-bottom: 1px solid #cdd9e3;
  }
  .companyDetailsDiv p {
    color: #656f77;
    font-size: 12px;
    font-weight: 400;
  }
  h3 {
    font-size: 26px;
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
    font-size: 12px;
    font-weight: 900;
    margin-left: 5px;
  }
  .cardBgLiveContainer span {
    content: "  ";
    background-color: #ffffff;
    height: 6px;
    width: 6px;
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
    width: 6vw;
    background-color: #7dd752;
    height: 1.5vw;

    left: 10px;
    top: 25px;
  }
  .cardBgLogoContainer {
    background-color: #ffffff;
    height: 5vw;
    width: 5vw;
    left: 10px;
    bottom: 24px;
  }
  .cardBgClassificationContainer {
    width: 10vw;
    height: 2vw;
    background-color: #cdd9e3;
    right: 10px;
    bottom: 24px;
  }
  .cardBgClassificationContainer p {
    font-size: 12px;
    font-weight: 900;
    color: #656f77;
  }
  .cardBgLessDiv {
    height: 150px;
  }
`;
