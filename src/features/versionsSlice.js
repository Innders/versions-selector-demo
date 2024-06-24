import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const versionsSlice = createSlice({
  name: "versions",
  initialState,
  reducers: {
    openVersionsSelector: (state) => {
      state.isOpen = true;
    },
    closeVersionsSelector: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openVersionsSelector, closeVersionsSelector } =
  versionsSlice.actions;

export default versionsSlice.reducer;
