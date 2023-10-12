"use client";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import testSlice from "./slices/testSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    test: testSlice,
  },
});
