import styled from "styled-components";

export const NumbersCardStyle = styled.div`
  background: linear-gradient(
    180deg,
    rgba(5, 69, 70, 0.7) 0%,
    rgba(196, 196, 196, 0) 100%
  );
  /* height: 240px; */
  width: 280px;
  border-radius: 20px;
  padding: 45px 30px 50px 30px;
  p:first-child {
    font-size: 50px;
    font-weight: 900;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 8px;
    margin-bottom: 35px;
    margin-top: 0;
  }
  p:last-child {
    color: #ffffff;
    font-size: 25px;
    font-weight: 400;
  }
`;
