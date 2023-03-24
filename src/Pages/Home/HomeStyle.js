import styled from "styled-components";
import { Colors } from "../../Colors/Colors";
export const HomeStyle = styled.div`
  background-color: #000000;
  ${(props) =>
    !props.isDark &&
    `  background-color: ${Colors.white};
`}
  .homeBodyContainer {
    width: 100%;
    max-width: 1200px;
    margin: auto;
  }
`;
