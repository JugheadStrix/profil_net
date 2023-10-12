"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfos: (state, action) => {
      const data = action.payload;
      return data;
    },
    addPost: (state, action) => {
      const { id, title, desc } = action.payload;
      state.push({ id, title, desc });
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((p) => p.id !== postId);
    },
  },
});

export const { getUserInfos, addPost, deletePost } = userSlice.actions;

export default userSlice.reducer;
