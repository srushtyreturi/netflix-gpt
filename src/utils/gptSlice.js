import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    addShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { addShowGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
