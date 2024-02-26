import styled from "styled-components";

export const ExploreContainerStyle = styled.section`
  margin-top: 200px;
  h2 {
    font-size: 40px;
    font-weight: 900;
    color: #ffffff;
  }
  ${(props) =>
    !props.isDark &&
    `h2{color: black}
 `}
`;
