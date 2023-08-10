import { DataType } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DataType[] = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      return [...state, ...action.payload];
    },
    removeUser: (state, action) => {
      const key = action.payload;
      return state.filter((user) => user.key !== key);
    },
    newUser: (state, action) => {
      const newUser = action.payload;
      return [...state, newUser];
    },
    editUser: (state, action) => {
      const updatedUser = action.payload;
      return state.map((user) => {
        if (user.key === updatedUser.key) {
          return { ...user, ...updatedUser };
        }
        return user;
      });
    },
  },
});

export const { addUsers, removeUser, newUser, editUser } = userSlice.actions;

export default userSlice.reducer;
