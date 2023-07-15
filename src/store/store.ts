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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
