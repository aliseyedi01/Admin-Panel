import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    open: () => ({ isOpenMenu: true }),
    close: () => ({ isOpenMenu: false }),
  },
});

export const { open, close } = menuSlice.actions;
export default menuSlice.reducer;
