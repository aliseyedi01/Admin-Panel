import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
