// store
import { configureStore } from "@reduxjs/toolkit";
// slice
import userReducer from "./slice/userSlice";
import menuReducer from "./slice/menuSlice";
import productReducer from "./slice/productSlice";
import blogReducer from "./slice/blogSlice";
import darkmodeReducer from "./slice/darkmodeSlice";
// api
import { supabaseApi } from "./api/supabaseApi";
import authSlice from "./slice/authSlice";

const store = configureStore({
  reducer: {
    [supabaseApi.reducerPath]: supabaseApi.reducer,
    users: userReducer,
    menu: menuReducer,
    product: productReducer,
    blog: blogReducer,
    darkMode: darkmodeReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(supabaseApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
