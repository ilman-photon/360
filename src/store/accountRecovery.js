import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatPhoneNumber } from "../utils/phoneFormatter";

export const fetchPatientAccount = createAsyncThunk(
  "accountRecovery/fetchPatientAccount",
  async ({ keyword }) => {
    const url = `/api/dummy/account-recovery/getPatientAccount/${keyword}`;
    return fetch(url).then((res) => res.json());
  }
);

export const onActivate = createAsyncThunk(
  "accountRecovery/onActivate",
  async ({ patientId }) => {
    const url = `/api/dummy/account-recovery/onActivate/${patientId}`;
    return fetch(url, { method: "POST" }).then((res) => res.json());
  }
);

export const onUnlock = createAsyncThunk(
  "accountRecovery/onUnlock",
  async ({ patientId }) => {
    const url = `/api/dummy/account-recovery/onUnlockAccount/${patientId}`;
    return fetch(url, { method: "POST" }).then((res) => res.json());
  }
);

export const onSendPasswordReset = createAsyncThunk(
  "accountRecovery/onSendPasswordReset",
  async ({ patientId }) => {
    const url = `/api/dummy/account-recovery/onSendPasswordReset/${patientId}`;
    return fetch(url, { method: "POST" }).then((res) => res.json());
  }
);

export const onShareUsername = createAsyncThunk(
  "accountRecovery/onShareUsername",
  async ({ patientId }) => {
    const url = `/api/dummy/account-recovery/onShareUsername/${patientId}`;
    return fetch(url, { method: "POST" }).then((res) => res.json());
  }
);

export const onViewSecurityQuestions = createAsyncThunk(
  "accountRecovery/onViewSecurityQuestions",
  async ({ patientId }) => {
    const url = `/api/dummy/account-recovery/onViewSecurityQuestions/${patientId}`;
    return fetch(url, { method: "GET" }).then((res) => res.json());
  }
);

const buildAccountData = (data) => {
  return data.map((item) => {
    return {
      ...item,
      phone: formatPhoneNumber(item.phone),
      status: item.verified ? item.status : "inactive",
    };
  });
};

const INITIAL_STATE = {
  patientList: [],
  securityQuestions: [],
  status: null,
  error: null,
};

export const accountRecoveryStore = createSlice({
  name: "index",
  initialState: INITIAL_STATE,
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setAccountDataById: (state, { payload }) => {
      const updatedState = state.patientList.map((item, idx) => {
        console.log(item.id, payload.id);
        if (payload.id === item.id) {
          item = payload;
        }
        return item;
      });

      state.patientList = buildAccountData(updatedState);
    },
  },
  extraReducers: {
    [fetchPatientAccount.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPatientAccount.fulfilled]: (state, { payload }) => {
      state.patientList = buildAccountData(payload);
      state.status = "success";
    },
    [fetchPatientAccount.rejected]: (state, action) => {
      state.error = action;
      state.status = "failed";
    },
    [onViewSecurityQuestions.fulfilled]: (state, { payload }) => {
      state.securityQuestions = payload;
      state.status = "success";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccountDataById, setStatus } = accountRecoveryStore.actions;

export default accountRecoveryStore.reducer;
