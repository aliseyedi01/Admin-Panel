import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import menuReducer from "./slice/menuSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    menu: menuReducer,
  },
});

export default store;
