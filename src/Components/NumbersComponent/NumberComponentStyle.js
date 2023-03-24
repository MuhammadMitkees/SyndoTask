import styled from "styled-components";

export const NumberComponentStyle = styled.div`
  margin-top: 150px;
  h2 {
    font-size: 40px;
    font-weight: 900;
    color: #ffffff;
  }
  ${(props) =>
    !props.isDark &&
    `h2{
    color: black
  }`}
  .NumbersCardsDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 75px;
  }
`;
