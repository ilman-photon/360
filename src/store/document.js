import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

export const fetchDocuments = createAsyncThunk(
  "document/fetchDocuments",
  async ({ patientId, category }) => {
    let categoryId;
    switch (category) {
      case "intake-forms":
        categoryId = "Intake-Forms";
        break;
      case "insurance-documents":
        break;
      case "health-record":
        break;
    }
    const url = `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`;
    const api = new Api();
    return api.getResponse(url, null, "get");
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documentList: [],
    status: null,
  },
  extraReducers: {
    [fetchDocuments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchDocuments.fulfilled]: (state, { payload }) => {
      state.documentList = payload.entities;
      state.status = "success";
    },
    [fetchDocuments.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default documentSlice.reducer;
