import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import menuReducer from "./slice/menuSlice";
import productReducer from "./slice/productSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    menu: menuReducer,
    product: productReducer,
  },
});

export default store;
