import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./DarkModeReducer";
export default configureStore({
  reducer: darkModeReducer,
});
