import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIntakeForms = createAsyncThunk(
  "document/fetchIntakeForms",
  async () => {
    return fetch("/api/dummy/document/intake-forms").then((res) => res.json());
  }
);

export const fetchInsuranceDocuments = createAsyncThunk(
  "document/fetchInsuranceDocuments",
  async () => {
    return fetch("/api/dummy/document/insurance-document").then((res) =>
      res.json()
    );
  }
);

export const fetchHealthRecord = createAsyncThunk(
  "document/fetchHealthRecord",
  async () => {
    return fetch("/api/dummy/document/insurance-document").then((res) =>
      res.json()
    );
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    intakeFormsData: [],
    insuranceDocument: [],
    healthRecordData: [],
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
    [fetchInsuranceDocuments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchInsuranceDocuments.fulfilled]: (state, { payload }) => {
      state.insuranceDocument = payload;
      state.status = "success";
    },
    [fetchInsuranceDocuments.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchHealthRecord.pending]: (state) => {
      state.status = "loading";
    },
    [fetchHealthRecord.fulfilled]: (state, { payload }) => {
      state.healthRecordData = payload;
      state.status = "success";
    },
    [fetchHealthRecord.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default documentSlice.reducer;
