import { DataType } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DataType[] = [
  {
    key: "1",
    name: "Ali Akbari",
    age: 32,
    email: "ali.akbari@gmail.com",
    role: "Front End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "2",
    name: "Reza Davodi",
    age: 42,
    email: "reza.davodi@gmail.com",
    role: "Back End",
    status: "banned",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "3",
    name: "John Smith",
    age: 28,
    email: "john.smith@example.com",
    role: "Full Stack",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "4",
    name: "Jane Doe",
    age: 35,
    email: "jane.doe@example.com",
    role: "Front End",
    status: "inactive",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "5",
    name: "Michael Johnson",
    age: 45,
    email: "michael.johnson@example.com",
    role: "Back End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "6",
    name: "Emily Davis",
    age: 29,
    email: "emily.davis@example.com",
    role: "Front End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "7",
    name: "David Wilson",
    age: 37,
    email: "david.wilson@example.com",
    role: "Full Stack",
    status: "inactive",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "8",
    name: "Sophia Thompson",
    age: 31,
    email: "sophia.thompson@example.com",
    role: "Back End",
    status: "active",
    avatar:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    remove: (state, action) => {
      const key = action.payload;
      return state.filter((user) => user.key !== key);
    },
    add: (state, action) => {
      const newUser = action.payload;
      return [...state, newUser];
    },
    edit: (state, action) => {
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

export const { remove, add, edit } = userSlice.actions;

export default userSlice.reducer;
