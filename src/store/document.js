import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { Api } from "../pages/api/api";

function parseMedicalRecordData(data) {
  return data.map((v) => ({
    ...v,
    name: `Medical Record - ${new moment(v._created).format("MM/DD/YYYY")} `,
  }));
}

export const fetchDocuments = createAsyncThunk(
  "document/fetchDocuments",
  async ({ patientId, category }) => {
    let url;
    let categoryId;
    if (category === "test-lab-result") {
      url = `/ecp/testResult/${"3b38ebd3-43f1-438e-b101-ba38f01350f0"}`;
    } else {
      switch (category) {
        case "insurance-documents":
          break;
        case "health-record":
          categoryId = "Medical-Record";
          break;
        case "care-plan-overview":
          categoryId = "care-plan";
          break;
        default:
          categoryId = "Intake-Forms";
          break;
      }
      url = `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`;
    }
    const api = new Api();
    return api.getResponse(url, null, "get");
  }
);

export const fetchMedicalRecordDocuments = createAsyncThunk(
  "document/fetchMedicalRecordDocuments",
  async ({ patientId }) => {
    const url = `/ecp/patient/phr/patientchart/${patientId}`;
    const api = new Api();
    return api.getResponse(url, null, "get");
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documentList: [],
    status: null,
    healthRecordList: [],
  },
  reducers: {
    resetDocuments: (state) => {
      state.documentList = [];
      state.healthRecordList = [];
    },
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
    [fetchMedicalRecordDocuments.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMedicalRecordDocuments.fulfilled]: (state, { payload }) => {
      state.healthRecordList = parseMedicalRecordData(payload.entities);
      state.status = "success";
    },
    [fetchMedicalRecordDocuments.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetDocuments } = documentSlice.actions;

export default documentSlice.reducer;
