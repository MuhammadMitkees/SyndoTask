import { createSlice } from "@reduxjs/toolkit";
export const darkModeSlice = createSlice({
  name: "toogleDarkMode",
  initialState: {
    isDark: true,
    isModalVisible: false,
  },
  reducers: {
    toogleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
    showApplicationModal: (state) => {
      state.isModalVisible = true;
    },
    hideApplicationModal: (state) => {
      state.isModalVisible = false;
    },
  },
});
export const { toogleDarkMode, showApplicationModal, hideApplicationModal } =
  darkModeSlice.actions;
export default darkModeSlice.reducer;
