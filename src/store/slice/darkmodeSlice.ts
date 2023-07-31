import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnabled: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkModeEnabled = !state.isDarkModeEnabled;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
