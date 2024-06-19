import { configureStore } from "@reduxjs/toolkit";
import versionsSlice from "../features/versionsSlice";

export const store = configureStore({
  reducer: {
    versions: versionsSlice,
  },
});
