import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { Api } from "../pages/api/api";
import {
  GENDER_LIST,
  RELATIONSHIP_LIST,
  TITLE_LIST,
} from "../utils/constantData";

let url;

const buildProfilePostBody = (postBody, payload) => {
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

const buildDigitalAssetObject = (payload) => {
  return {
    uid: payload._id,
    fileName: payload.name,
    metaInfo: {},
    _version: payload._version,
  };
};

const buildInsurancePostBody = (postBody = {}, payload = {}) => {
  console.log({ postBody, payload });
  const subscriberData = payload.subscriberData;
  const subscriberDob = subscriberData.dob
    ? new moment(subscriberData.dob).format("MM/DD/YYYY")
    : null;
  return {
    // ...postBody,
    _version: postBody._version,
    insuranceType: "VISION",
    group: payload.groupID,
    isPatientSubscriber: payload.isSubscriber === "Yes",
    priority: payload.priority,
    subscriberRelation: RELATIONSHIP_LIST.findIndex(
      (v) => v === subscriberData.relationship
    ),
    payer: {
      _id: payload.provider.id,
    },
    plan: {
      _id: "06c596c3-4f7d-4d4e-b514-ec0f008fccd9",
    },
    subscriber: {
      ...postBody.subscriber,
      firstName: subscriberData.firstName,
      lastName: subscriberData.lastName,
      dob: subscriberDob, // MM/DD/YYYY,
      _id: payload.memberID,
    },
    digitalAssets: {
      master_front: payload.frontCard.uid
        ? payload.frontCard
        : buildDigitalAssetObject(payload.frontCard),
      master_back: payload.backCard.uid
        ? payload.backCard
        : buildDigitalAssetObject(payload.backCard),
    },
  };
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ token }) => {
    const api = new Api();
    return api.getResponse(
      "/ecp/patient/getPatient/1656b00e-916b-4cea-ba3e-96cffe291858",
      null,
      "get",
      token
    );
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ token, payload }) => {
    const api = new Api();
    try {
      // get the userData first, just to make sure
      const res = await api.getResponse(
        "/ecp/patient/getPatient/1656b00e-916b-4cea-ba3e-96cffe291858",
        null,
        "get",
        token
      );
      // then apply changes from our side with response body from "res" and do a PUT request
      const postBody = buildProfilePostBody(res, payload);
      const response = await api.getResponse(
        "/ecp/patient/editPatient/1656b00e-916b-4cea-ba3e-96cffe291858",
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
  async ({ token, patientId }) => {
    const api = new Api();
    url = `/ecp/insurance/beneficiaries/${patientId}/coverages`;
    return api.getResponse(url, null, "get", token);
  }
);

export const updateInsurance = createAsyncThunk(
  "user/updateInsurance",
  async ({ token, payload, patientId, coverageId }, { getState }) => {
    const api = new Api();
    const state = getState();
    const foundIndex = state.user.rawUserInsuranceData.findIndex(
      (v) => v._id === coverageId
    ); // +1;
    console.log(
      "found",
      foundIndex,
      state.user.rawUserInsuranceData[foundIndex]
    );
    try {
      const postBody = buildInsurancePostBody(
        state.user.rawUserInsuranceData[foundIndex],
        payload
      );
      console.log("Post body to put to API: ", { postBody });
      const response = await api.getResponse(
        `/ecp/insurance/beneficiaries/${patientId}/coverages/${coverageId}`,
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

export const postInsurance = createAsyncThunk(
  "user/postInsurance",
  async ({ token, payload, patientId }) => {
    const api = new Api();
    console.log("Post insurance", { payload });
    try {
      const postBody = buildInsurancePostBody(
        {
          insuranceType: "VISION",
        },
        payload
      );
      console.log("Post body to POST to API: ", { postBody });
      const response = await api.getResponse(
        `/ecp/insurance/beneficiaries/${patientId}/coverages/`,
        postBody,
        "post",
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

const buildUserData = (payload) => {
  const userAddress = payload.address[0] || {};
  const patientDetails = payload.patientDetails || {};
  console.log({ patientDetails });

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
    profilePhoto: patientDetails.profilePhoto?.digitalAsset || null,
    issuedCardFront: {},
    issuedCardBack: {},
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
  issuedCardFront: {},
  issuedCardBack: {},
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

const buildUserInsuranceData = (payload) => {
  const insurances = payload.entities;
  return insurances.map((insurance) => {
    const subscriberData = insurance.subscriber;
    const digitalAssets = insurance.digitalAssets;
    return {
      id: insurance._id,
      provider: {
        id: insurance.payer._id,
        label: insurance.payer.name,
        value: insurance.payer.name,
      },
      plan: {
        id: insurance.plan._id,
        label: insurance.plan.name,
        value: insurance.plan.name,
      },
      memberID: subscriberData._id,
      // memberID: "",
      groupID: insurance.group,
      isSubscriber: insurance.isPatientSubscriber ? "Yes" : "No",
      subscriberData: {
        firstName: subscriberData.firstName,
        lastName: subscriberData.lastName,
        dob: new Date(subscriberData.dob),
        relationship: RELATIONSHIP_LIST[insurance.subscriberRelation - 1],
      },
      priority: insurance.priority,
      // frontCard: "/transparent.png",
      // backCard: "/transparent.png",
      // TODO later only images
      frontCard: digitalAssets ? digitalAssets.master_front : {},
      backCard: digitalAssets ? digitalAssets.master_back : {},
    };
  });
};

export const DEFAULT_INSURANCE_DATA = {
  id: 0,
  provider: null,
  plan: null,
  memberID: "",
  groupID: "",
  isSubscriber: null,
  subscriberData: {
    firstName: "",
    lastName: "",
    dob: null,
    relationship: "",
  },
  priority: "PRIMARY",
  frontCard: null,
  backCard: null,
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
    rawUserInsuranceData: [],
    userAppointmentData: [],
    status: "loading",
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    resetUserData: (state, { payload }) => {
      state.userData = DEFAULT_USER_DATA;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
    resetUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData = [];
    },
    setUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData = payload;
    },
    setUserInsuranceDataById: (state, { payload }) => {
      const statePayload = state.rawUserInsuranceData.map((item, idx) => {
        if (payload._id === item._id) {
          item = payload;
        }
        return item;
      });
      state.userInsuranceData = buildUserInsuranceData({
        entities: statePayload,
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
    // profile
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
    // insurance
    [fetchInsurance.pending]: (state) => {
      state.status = "loading";
    },
    [fetchInsurance.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.rawUserInsuranceData = payload.entities;
        state.userInsuranceData = buildUserInsuranceData(payload);
      }
      state.status = "success";
    },
    [fetchInsurance.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setStatus,
  setUserData,
  setUserInsuranceData,
  addUserInsuranceData,
  resetUserInsuranceData,
  removeUserInsuranceData,
  setUserInsuranceDataById,
  resetUserAppointmentData,
  setUserAppointmentData,
  setUserAppointmentDataByIndex,
} = userSlice.actions;

export default userSlice.reducer;
