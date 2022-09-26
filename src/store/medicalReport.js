import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTestLabResult = createAsyncThunk(
  "medical-report/fetchTestLabResult",
  async () => {
    return fetch("/api/dummy/medical-report/test-lab-result").then((res) =>
      res.json()
    );
  }
);

export const fetchCarePlan = createAsyncThunk(
  "medical-report/fetchCarePlan",
  async () => {
    return fetch("/api/dummy/medical-report/test-lab-result").then((res) =>
      res.json()
    );
  }
);

const medResSlice = createSlice({
  name: "medicalResult",
  initialState: {
    testLabData: [],
    carePlanData: [],
    status: null,
  },
  extraReducers: {
    [fetchTestLabResult.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTestLabResult.fulfilled]: (state, { payload }) => {
      state.testLabData = payload;
      state.status = "success";
    },
    [fetchTestLabResult.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchCarePlan.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCarePlan.fulfilled]: (state, { payload }) => {
      state.carePlanData = payload;
      state.status = "success";
    },
    [fetchCarePlan.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default medResSlice.reducer;
