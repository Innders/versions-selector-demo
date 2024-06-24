import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selected: null,
};

export const versionsSlice = createSlice({
  name: "versions",
  initialState,
  reducers: {
    openVersionsSelector: (state, payload) => {
      state.isOpen = true;
      state.selected = payload;
    },
    closeVersionsSelector: (state) => {
      state.isOpen = false;
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openVersionsSelector, closeVersionsSelector, updateSelected } =
  versionsSlice.actions;

export default versionsSlice.reducer;
