import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenMenu: false,
  isCollapseMenu: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpenMenu = true;
    },
    close: (state) => {
      state.isOpenMenu = false;
    },
    toggle: (state) => {
      state.isCollapseMenu = !state.isCollapseMenu;
    },
  },
});

export const { open, close, toggle } = menuSlice.actions;
export default menuSlice.reducer;
