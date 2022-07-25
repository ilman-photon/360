import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: true,
  counter: 0,
};

export const indexStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    increment: (state, action) => {
      state.counter++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, increment } = indexStore.actions;

export default indexStore.reducer;
