import React from "react";
import { DarkModeContainerStyling } from "./DarkModeContainerStyling";
import SwitchButton from "./SwitchButton";
function DarkModeContainer() {
  return (
    <DarkModeContainerStyling>
      <div className="mainContainer">
        <SwitchButton />
      </div>
    </DarkModeContainerStyling>
  );
}

export default DarkModeContainer;
