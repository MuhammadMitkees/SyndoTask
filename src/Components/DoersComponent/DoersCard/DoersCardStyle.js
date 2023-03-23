import styled from "styled-components";

export const DoersCardStyle = styled.div`
  width: 430px;
  border: 1px solid #656f77;
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
  .doersCardLargerImageDiv {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .doersCardSmallerImageDiv {
    display: flex;
  }

  .doersCardSmallerImageDiv img {
    margin-right: 25px;
  }
  .doersCardSmallerImageDiv p:first-child {
    color: #ffffff;
    font-size: 16px;
    font-weight: 900;
  }
  .doersCardSmallerImageDiv p:last-child {
    color: #acb8c2;
    font-size: 16px;
    font-weight: 400;
  }
  .quoteDoersCard {
    font-size: 150px;
    font-weight: 900;
    color: #00acb1;
    margin-top: 0;
    margin-bottom: 0;
    height: 50px;
  }
  .mainTxtDoersCard {
    color: #acb8c2;
    font-size: 16px;
    font-weight: 400;
    margin-top: 40px;
  }
`;
