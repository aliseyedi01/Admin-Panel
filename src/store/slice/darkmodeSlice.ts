import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnabled: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.isDarkModeEnabled = true;
    },
    disableDarkMode: (state) => {
      state.isDarkModeEnabled = false;
    },
  },
});

export const { enableDarkMode, disableDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
