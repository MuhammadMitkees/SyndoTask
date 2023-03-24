import styled from "styled-components";

export const DoersCardStyle = styled.div`
  width: 27%;
  border: 1px solid #656f77;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
  .doersCardLargerImageDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .doersCardSmallerImageDiv {
    display: flex;
    justify-items: center;
  }

  .doersCardSmallerImageDiv img {
    margin-right: 25px;
    width: 5vw;
    height: 5vw;
    align-self: center;
  }
  .doersCardSmallerImageDiv p:first-child {
    color: #ffffff;
    font-size: 16px;
    font-weight: 900;
    ${(props) =>
      !props.isDark &&
      `    color: black
`}
  }
  .doersCardSmallerImageDiv p:last-child {
    color: #acb8c2;
    font-size: 16px;
    font-weight: 400;
    ${(props) =>
      !props.isDark &&
      `    color: #000001
`}
  }
  .mainTxtDoersCard {
    color: #acb8c2;
    font-size: 12px;
    font-weight: 400;
    margin-top: 20px;
    padding-bottom: 20px;
    ${(props) =>
      !props.isDark &&
      `    color: #000001
`}
  }
`;
