import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
