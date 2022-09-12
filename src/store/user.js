import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return fetch("/api/dummy/user").then((res) => res.json());
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
  preferredName: "---",
  profilePhoto: null,
  issuedCardFront: "/transparent.png",
  issuedCardBack: "/transparent.png",
  dob: new Date(),
  title: "Mr.",
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

const DEFAULT_USER_APPOINTMENT_DATA = {
  appointmentId: "",
  providerInfo: {
    providerId: "",
    name: "",
    position: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipcode: "",
    },
    rating: "",
    phoneNumber: "",
    distance: "",
    image: "",
    from: "",
    to: "",
    location: {
      latitude: 0,
      longitude: 0,
    },
  },
  patientInfo: {
    name: "",
    firstname: "",
    lastname: "",
    dob: "",
    phoneNumber: "",
  },
  appointmentInfo: {
    appointmentType: "",
    date: "",
    insuranceCarrier: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: DEFAULT_USER_DATA,
    userInsuranceData: [],
    userAppointmentData: [],
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
    resetUserAppointmentData: (state) => {
      state.userAppointmentData = [];
    },
    setUserAppointmentData: (state, { payload }) => {
      state.userAppointmentData = payload;
    },
    setUserAppointmentDataByIndex: (state, { payload }) => {
      state.userAppointmentData = state.userAppointmentData.map((item, idx) => {
        if (payload.appointmentId === idx) {
          const obj = {
            ...item,
            appointmentInfo: payload.appointmentInfo,
            providerInfo: payload.providerInfo,
          };
          item = obj;
        }
        return item;
      });
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.userData = payload;
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
  resetUserAppointmentData,
  setUserAppointmentData,
  setUserAppointmentDataByIndex,
} = userSlice.actions;

export default userSlice.reducer;
