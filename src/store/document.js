import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIntakeForms = createAsyncThunk(
  "document/fetchIntakeForms",
  async () => {
    return fetch("/api/dummy/document/intake-forms").then((res) => res.json());
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    intakeFormsData: [],
    status: null,
  },
  extraReducers: {
    [fetchIntakeForms.pending]: (state) => {
      state.status = "loading";
    },
    [fetchIntakeForms.fulfilled]: (state, { payload }) => {
      state.intakeFormsData = payload;
      state.status = "success";
    },
    [fetchIntakeForms.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default documentSlice.reducer;
