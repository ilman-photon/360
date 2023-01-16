import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";

export const fetchPatientAccount = createAsyncThunk(
  "accountRecovery/fetchPatientAccount",
  async ({ keyword }) => {
    const api = new Api();
    const url = `/ecp/accountRecovery/getPatientDetails/${keyword}`;

    try {
      const response = await api.getResponse(url, null, "get");
      return {
        searchKey: keyword,
        data: response,
      };
    } catch {
      return {
        searchKey: keyword,
        data: [],
      };
    }
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
    const api = new Api();
    const url = `/ecp/accountRecovery/unlockAccountByAdmin/${patientId}`;

    try {
      const response = await api.getResponse(url, null, "get");

      return {
        success: true,
        response,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: false,
        response: error,
      };
    }
  }
);

export const onSendPasswordReset = createAsyncThunk(
  "accountRecovery/onSendPasswordReset",
  async ({ patientData, selectedCommunication }) => {
    const api = new Api();
    const url = `/ecp/accountRecovery/sendPasswordResetLinkToUser`;
    const domain = window.location.origin;
    const NEXT_PUBLIC_ONE_TIME_LINK = process.env.NEXT_PUBLIC_ONE_TIME_LINK;
    const postBody = {
      patient: {
        userName: patientData.username,
      },
      preferredComunication: selectedCommunication,
      resetPassword: true,
      link: `${domain}${NEXT_PUBLIC_ONE_TIME_LINK}`,
    };

    try {
      const response = await api.getResponse(url, postBody, "post");

      return {
        success: true,
        response,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: false,
        response: error,
      };
    }
  }
);

export const onShareUsername = createAsyncThunk(
  "accountRecovery/onShareUsername",
  async ({ patientId, selectedCommunication }) => {
    const api = new Api();
    const url = `/ecp/accountRecovery/shareUserNameByAdmin`;
    const postBody = {
      id: patientId,
      preferredComunication: selectedCommunication,
    };

    try {
      const response = await api.getResponse(url, postBody, "post");

      return {
        success: true,
        response,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: false,
        response: error,
      };
    }
  }
);

export const onViewSecurityQuestions = createAsyncThunk(
  "accountRecovery/onViewSecurityQuestions",
  async ({ patientId }) => {
    const api = new Api();
    const url = `/ecp/accountRecovery/viewSecurityQuestions/${patientId}`; // d3724cd1-ebae-4f1a-82a5-544ff33b0313

    try {
      const response = await api.getResponse(url, null, "get", false);

      return {
        success: true,
        response,
      };
    } catch (error) {
      console.error({ error });
      return {
        success: false,
        response: error,
      };
    }
  }
);

const getPatientStatus = (data) => {
  if (data.verified != "active") return "inactive";
  switch (data.status) {
    case "locked":
    case "L":
      return "locked";
    case "unlocked":
    default:
      return "unlocked";
  }
};

const validateSearchHighlight = (data, searchKey) => {
  let text = data;
  if (text === "null" || text === "" || text === undefined) {
    return "-";
  }
  const pattern = new RegExp(`${searchKey}`, "gi");
  text = text.replace(pattern, (match) => `<span>${match}</span>`);
  return text;
};

const buildAccountData = ({ data, searchKey }) => {
  return data.map((item) => {
    return {
      ...item,
      name: validateSearchHighlight(item.patientName || item.name, searchKey),
      email: validateSearchHighlight(item.emailId, searchKey),
      phone: validateSearchHighlight(item.phoneNumber, searchKey),
      status: getPatientStatus(item),
    };
  });
};

const INITIAL_STATE = {
  patientList: [],
  securityQuestions: [],
  securityQuestionStatus: null,
  securityQuestionsRaw: {},
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
      const updatedState = state.patientList.map((item) => {
        const id = item.id || item.patientId;
        const payloadId = payload.id || payload.patientId;
        if (payloadId === id) {
          item = payload;
        }
        return item;
      });

      state.patientList = buildAccountData({ data: updatedState });
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
    [onViewSecurityQuestions.pending]: (state) => {
      state.securityQuestionStatus = "loading";
    },
    [onViewSecurityQuestions.fulfilled]: (state, { payload }) => {
      const response = payload.response;
      let mapped = [];
      if (response?.ResponseCode === 3000) {
        const securityQuestions = response.SecurityQuestions[0];
        mapped = Object.keys(securityQuestions).map((keys) => {
          return {
            question: keys,
            answer: securityQuestions[keys],
          };
        });

        state.securityQuestionsRaw = response.SecurityQuestions;
      }

      state.securityQuestions = mapped;
      state.securityQuestionStatus = "success";
    },
    [onViewSecurityQuestions.rejected]: (state, action) => {
      state.error = action;
      state.securityQuestionStatus = "failed";
      state.securityQuestions = [];
    },
    [fetchPatientAccount.rejected]: (state, action) => {
      state.error = action;
      state.securityQuestions = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccountDataById, setStatus } = accountRecoveryStore.actions;

export default accountRecoveryStore.reducer;
