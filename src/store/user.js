import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../pages/api/api";
import { GENDER_LIST, TITLE_LIST } from "../utils/constantData";

const buildPostBody = (postBody, payload) => {
  let emailData = postBody.contactInformation.emails;
  emailData[0] = {
    ...emailData[0],
    email: payload.email,
  };

  let phoneData = postBody.contactInformation.phones;
  phoneData[0] = {
    ...phoneData[0],
    number: payload.mobile,
  };

  let addressData = postBody.address;
  addressData[0] = {
    ...addressData[0],
    addressLine1: payload.address,
    city: payload.city,
    state: payload.state,
    zip: payload.zip,
  };

  let contactPreferenceDetailData = {
    ...postBody.contactPreferenceDetail,
    email:
      payload.preferredCommunication === "both" ||
      payload.preferredCommunication === "email",
    phone:
      payload.preferredCommunication === "both" ||
      payload.preferredCommunication === "phone",
  };

  const getGenderCode = (gender) => {
    return GENDER_LIST.findIndex((v) => v === gender) + 1;
  };

  const getTitleCode = (title) => {
    return TITLE_LIST.findIndex((v) => v === title) + 1;
  };

  return {
    ...postBody,
    contactInformation: {
      ...postBody.contactInformation,
      emails: emailData,
      phones: phoneData,
    },
    address: addressData,
    sex: getGenderCode(payload.gender),
    title: getTitleCode(payload.title),
    contactPreferenceDetail: contactPreferenceDetailData,
  };
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (token) => {
  const api = new Api();
  return api.getResponse(
    "/ecp/patient-management/v1/patients/cad95dea-3b1a-4c37-9fa0-602023b92099",
    null,
    "get",
    token
  );
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ token, payload }) => {
    const api = new Api();
    try {
      // get the userData first, just to make sure
      const res = await api.getResponse(
        "/ecp/patient-management/v1/patients/cad95dea-3b1a-4c37-9fa0-602023b92099",
        null,
        "get",
        token
      );
      // then apply changes from our side with response body from "res" and do a PUT request
      const postBody = buildPostBody(res, payload);
      const response = await api.getResponse(
        "/ecp/patient-management/v1/patients/cad95dea-3b1a-4c37-9fa0-602023b92099",
        postBody,
        "put",
        token
      );
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

export const fetchInsurance = createAsyncThunk(
  "user/fetchInsurance",
  async () => {
    return fetch("/api/dummy/insurance").then((res) => res.json());
  }
);

const buildUserData = (payload) => {
  const userAddress = payload.address[0] || {};

  let userPreferredCommunication = "";
  if (payload.contactInformation) {
    if (payload.contactInformation.contactPreferenceDetail) {
      if (payload.contactInformation.contactPreferenceDetail.phone) {
        if (payload.contactInformation.contactPreferenceDetail.email) {
          userPreferredCommunication = "both";
        } else {
          userPreferredCommunication = "email";
        }
      } else userPreferredCommunication = "phone";
    }
  }

  return {
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
      ? payload.contactInformation.phones[0].number.replace(/\D/g, "")
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
};

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
      if (payload) {
        state.userData = buildUserData(payload);
      }

      state.status = "success";
    },
    [fetchUser.rejected]: (state) => {
      state.status = "failed";
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.userData = buildUserData(payload.response);
      state.status = "success";
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
