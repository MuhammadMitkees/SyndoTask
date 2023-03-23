import React from "react";
import styled from "styled-components";

export const DarkModeContainerStyling = styled.div`
  width: 100%;
  background-color: #1e1f1f;
  height: 50px;
  .FormControlLabel {
    color: white;
    max-width: 1200px;
  }
  .mainContainer {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: flex-end;
  }
  .switchLabel {
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
  }
`;
