import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const versionsSlice = createSlice({
  name: "versions",
  initialState,
  reducers: {
    toggleVersionsOpen: (state, action) => {
      // open/close the versions selector
    },
  },
});

// Action creators are generated for each case reducer function
export const { openVersionsSelector } = versionsSlice.actions;

export default versionsSlice.reducer;
