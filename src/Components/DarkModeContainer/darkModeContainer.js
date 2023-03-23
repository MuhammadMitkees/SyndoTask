import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeContainerStyling } from "./DarkModeContainerStyling";
import { toogleDarkMode } from "./../../Redux/DarkModeReducer";
import { Switch } from "@mui/material";
function DarkModeContainer() {
  const { isDark: isDark } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <DarkModeContainerStyling>
      <div className="mainContainer">
        <p className="switchLabel">{isDark ? "Dark mode" : "Light Mode"}</p>
        <Switch
          onClick={() => {
            dispatch(toogleDarkMode());
          }}
          defaultChecked
        />
      </div>
    </DarkModeContainerStyling>
  );
}

export default DarkModeContainer;
