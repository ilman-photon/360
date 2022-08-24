import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";
import { GENDER_LIST, TITLE_LIST } from "../utils/constantData";

export const fetchUser = createAsyncThunk("user/fetchUser", async (token) => {
  const api = new Api();
  return api
    .getResponse(
      "/ecp/patient-management/v1/patients/cad95dea-3b1a-4c37-9fa0-602023b92099",
      null,
      "get",
      token
    )
    .then((res) => {
      return res;
    });
});

export const fetchInsurance = createAsyncThunk(
  "user/fetchInsurance",
  async () => {
    return fetch("/api/dummy/insurance").then((res) => res.json());
  }
);

const DEFAULT_USER_DATA = {
  firstName: "",
  lastName: "laste",
  name: "Eyecare User",
  preferedName: "---",
  profilePhoto: "",
  issuedCardFront: "/transparent.png",
  issuedCardBack: "/transparent.png",
  dob: new Date(),
  title: "Mr",
  ssn: 1234567,
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  preferredCommunication: "both",
  age: "49",
  gender: "Male",
  relationship: "",
  insurancePriority: "",
  planName: "",
  subscriberMember: "",
  groupId: "",
  isSubscriber: "",
};

export const DEFAULT_INSURANCE_DATA = {
  id: 0,
  provider: null,
  plan: null,
  memberID: "",
  groupID: "",
  isSubscriber: "Yes",
  subscriberData: {
    firstName: "",
    lastName: "",
    dob: null,
    relationship: "",
  },
  priority: "Primary",
  frontCard: "",
  backCard: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: DEFAULT_USER_DATA,
    userInsuranceData: [],
    status: null,
  },
  reducers: {
    resetUserData: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
    resetUserInsuranceData: (state, action) => {
      state.loading = action.payload;
    },
    setUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData = payload;
    },
    setUserInsuranceDataByIndex: (state, { payload }) => {
      state.userInsuranceData = state.userInsuranceData.map((item, idx) => {
        if (payload.id === idx) {
          item = payload;
        }
        return item;
      });
    },
    addUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData.push(payload);
    },
    removeUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData.splice(payload, 1);
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      const userAddress = payload.address[0] || {};

      let userPreferredCommunication = "";
      if (payload.contactInformation) {
        if (payload.contactInformation.contactPreferenceDetail) {
          if (payload.contactInformation.contactPreferenceDetail.phone) {
            if (payload.contactInformation.contactPreferenceDetail.email) {
              userPreferredCommunication = "Both";
            } else {
              userPreferredCommunication = "Email";
            }
          } else userPreferredCommunication = "Phone";
        }
      }

      state.userData = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        name: `${payload.firstName} ${payload.lastName}`,
        preferedName: "---",
        profilePhoto: "",
        issuedCardFront: "/transparent.png",
        issuedCardBack: "/transparent.png",
        dob: payload.dob,
        title: TITLE_LIST[payload.title - 1],
        ssn: payload.ssn,
        email: payload.contactInformation.emails[0]
          ? payload.contactInformation.emails[0].email
          : "-",
        mobile: payload.contactInformation.phones[0]
          ? payload.contactInformation.phones[0].number
          : "-",
        address: userAddress.addressLine1,
        city: userAddress.city,
        state: userAddress.state,
        zip: userAddress.zip,
        preferredCommunication: userPreferredCommunication,
        age: payload.age,
        gender: GENDER_LIST[payload.sex - 1],
        // insurances
        relationship: "",
        insurancePriority: "",
        planName: "",
        subscriberMember: "",
        groupId: "",
        isSubscriber: "",
      };
      state.status = "success";
    },
    [fetchUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserData,
  setUserInsuranceData,
  addUserInsuranceData,
  removeUserInsuranceData,
  setUserInsuranceDataByIndex,
} = userSlice.actions;

export default userSlice.reducer;
