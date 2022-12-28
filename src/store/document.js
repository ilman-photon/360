import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { Api } from "../pages/api/api";

export function parseMedicalRecordData(data) {
  return data?.map((v) => ({
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
      url = `/ecp/testResult/${patientId}`;
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

export const DEFAULT_CONSENT_TO_TREATMENT = {
  patientName: "",
  patientName2: "",
  guardian: "",
  phoneNumber: "",
  contactEmergency1: "",
  contactEmergency2: "",
  emergency1: "",
  emergency2: "",
  medicalConcern: "",
  knownAlergies: "",
  insurancePlan: "",
  faterName: "",
  motherName: "",
  fatherBusinessPhone: "",
  motherBusinessPhone: "",
  fatherHomePhone: "",
  motherHomePhone: "",
  fatherAddress: "",
  motherAddress: "",
  fatherCity: "",
  motherCity: "",
  sign: false,
  signDate: null,
};

export const DEFAULT_CONSTENT_TO_USE = {
  textInfo: "",
  sign: false,
  signRelationship: "",
  signDate: null,
  textInfo2: "",
  signCommunication: false,
  signCommunicationRelationship: "",
  signCommunicationDate: null,
  textInfo3: "",
  textInfo4: "",
  textInfo5: "",
  agentName: "",
  patientName: "",
  patientDOB: "",
  signOptional: false,
  signOptionalRelationship: "",
  signOptionalDate: null,
  textInfo6: "",
};

export const DEFAULT_CONSTENT_TO_TREAT = {
  patientName: "",
  dob: null,
  textInfo: "",
  sign: false,
  signDate: null,
};

export const DEFAULT_MEDICATION_VISION_EXAM = {
  textInfo: "",
  sign: false,
  signDate: null,
};

export const DEFAULT_INSURANCE_COMMUNICATION = {
  textInfo: "",
  sign: false,
  textInfo2: "",
  signPrivatePay: false,
};

export const DEFAULT_CONTACT_LENS = {
  sign: false,
  signDate: null,
  textInfo: "",
};

export const DEFAULT_AUTHORIZATION_TO_DISCLOSE = {
  textInfo: "",
  textInfo2: "",
  patientName1: "",
  patientRelationship1: "",
  patientPhoneNumber1: "",
  patientName2: "",
  patientRelationship2: "",
  patientPhoneNumber2: "",
  patientName3: "",
  patientRelationship3: "",
  patientPhoneNumber3: "",
  protectionHealth: "",
  sign: false,
  signDate: null,
};

const documentSlice = createSlice({
  name: "document",
  initialState: {
    documentList: [],
    status: null,
    showPostmessage: false,
    defaultDataValue: {},
    defaultDataKey: [],
    intakeFormData: {
      title: "",
      description: "",
      formDocument: "",
      isSubmit: false,
    },
    selectedEducationMaterial: null,
    healthRecordList: [],
  },
  reducers: {
    resetDocuments: (state) => {
      state.documentList = [];
      state.healthRecordList = [];
    },
    resetIntakeFormData: (state) => {
      state.intakeFormData = {
        title: "",
        description: "",
        formDocument: "",
        isSubmit: false,
      };
    },
    setShowPostmessage: (state, { payload }) => {
      state.showPostmessage = payload;
    },
    setDefaultDataValue: (state, { payload }) => {
      state.defaultDataValue = payload;
    },
    setDefaultDataKey: (state, { payload }) => {
      state.defaultDataKey = payload;
    },
    setIntakeFormData: (state, { payload }) => {
      state.intakeFormData = payload;
    },
    setEducationMaterial: (state, { payload }) => {
      state.selectedEducationMaterial = payload;
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
export const {
  resetDocuments,
  resetIntakeFormData,
  setShowPostmessage,
  setDefaultDataValue,
  setDefaultDataKey,
  setIntakeFormData,
  setEducationMaterial,
} = documentSlice.actions;

export default documentSlice.reducer;
