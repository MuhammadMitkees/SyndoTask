import styled from "styled-components";

export const DoersComponentStyle = styled.div`
  margin-top: 150px;
  h2 {
    font-size: 50px;
    font-weight: 900;
    color: #ffffff;
  }
  .DoersComponentHeader {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .allDoersCardsDiv {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
  }
  .sliderControlsDoersComp {
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  .sliderControlsDoersComp li:nth-child(2) {
    background-color: #00acb1;
  }
  .dotsSliderControlsDoersComp {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #656f77;
    margin-left: 10px;
  }
  .chevronLeft,
  .chevronRight {
    font-size: 30px;
    width: 20px;
  }
  .chevronLeft {
    color: #656f77;
  }
  .chevronRight {
    color: white;
    margin-left: 10px;
    text-align: right;
  }
`;
