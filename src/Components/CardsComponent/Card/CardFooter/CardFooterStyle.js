import styled from "styled-components";

export const CardFooterStyle = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 31px;
  padding-top: 31px;
  display: flex;
  align-items: center;
  .personImg1 {
    z-index: 3;
    position: relative;
  }
  .personImg2 {
    z-index: 2;
    position: relative;
    right: 10px;
  }
  .personImg3 {
    z-index: 1;
    position: relative;
    right: 20px;
  }
  p {
    color: #656f77;
    font-size: 12px;
    font-weight: 400;
  }
  .cardFoooterLink {
    text-decoration: none;
    color: #00acb1;
  }
`;
