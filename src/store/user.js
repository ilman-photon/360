import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";
import { Api } from "../pages/api/api";
import {
  GENDER_LIST,
  RELATIONSHIP_LIST,
  TITLE_LIST,
} from "../utils/constantData";
import removeSpace from "../utils/removeSpace";
import { formatSocialSecurity } from "../utils/ssnFormatter";

let url;

const buildPatientDetailsData = (postBody, payload) => {
  let getPatientStateIssuedIdFront = (data) => {
    if (data.issuedCardFront?.uid) {
      return { digitalAsset: data.issuedCardFront };
    } else if (data.issuedCardFront) {
      return {
        digitalAsset: buildDigitalAssetObject(data.issuedCardFront, "profile"),
      };
    } else return null;
  };
  let getPatientStateIssuedIdBack = (data) => {
    if (data.issuedCardBack?.uid) {
      return { digitalAsset: data.issuedCardBack };
    } else if (data.issuedCardBack) {
      return {
        digitalAsset: buildDigitalAssetObject(data.issuedCardBack, "profile"),
      };
    } else return null;
  };
  let patientStateIssuedIdFront = getPatientStateIssuedIdFront(payload);
  let patientStateIssuedIdBack = getPatientStateIssuedIdBack(payload);
  return {
    ...postBody.patientDetails,
    profilePhoto: payload.profilePhoto
      ? {
          digitalAsset: buildDigitalAssetObject(
            payload.profilePhoto,
            "profile"
          ),
        }
      : postBody.profilePhoto,
    stateIssuedId: patientStateIssuedIdFront,
    stateIssuedIdBack: patientStateIssuedIdBack,
  };
};

/**
 * This is parser for request API body user data
 * @param {*} postBody
 * @param {*} payload
 * @returns
 */
const buildProfilePostBody = (postBody, payload) => {
  let emailData = postBody.contactInformation.emails;
  if (emailData) {
    emailData[0] = {
      ...emailData[0],
      email: payload.email,
    };
  } else {
    emailData = [
      {
        email: payload.email,
      },
    ];
  }

  let phoneData = postBody.contactInformation.phones;
  if (phoneData) {
    phoneData[0] = {
      ...phoneData[0],
      number: payload.mobile,
    };
  } else {
    phoneData = [
      {
        number: payload.mobile,
      },
    ];
  }

  let addressData = postBody.address;
  if (payload.address) {
    addressData[0] = {
      ...addressData[0],
      addressLine1: payload.address,
      city: payload.city,
      state: payload.state,
      zip: payload.zip,
    };
  }

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

  const returnedData = {
    ...postBody,
    nickName: payload.preferredName,
    contactInformation: {
      ...postBody.contactInformation,
      emails: emailData,
      phones: phoneData,
      contactPreferenceDetail: {
        ...postBody.contactInformation.contactPreferenceDetail,
        ...contactPreferenceDetailData,
      },
    },
    address: addressData,
    sex: getGenderCode(payload.gender),
    title: getTitleCode(payload.title),
    patientDetails: buildPatientDetailsData(postBody, payload),
  };

  // removing phone field if emptied
  if (!payload.mobile) {
    delete returnedData.contactInformation.phones;
  }

  // removing phone field if emptied
  if (!payload.email) {
    delete returnedData.contactInformation.emails;
  }

  return returnedData;
};

/**
 * This is a parser for building digital asset object for request Body based on API endpoint
 * @param {*} payload
 * @param {*} type
 * @returns
 */
const buildDigitalAssetObject = (payload, type) => {
  if (!payload) return null;
  const id = payload._id || payload.uid;
  const fileName = payload.name || payload.fileName;
  if (!id) return null;
  switch (type) {
    case "profile":
      return {
        uid: id,
        fileName: removeSpace(fileName),
        assetUrl: "/v1/patient",
        _version: payload._version,
      };
    case "insurance":
      return {
        uid: id,
        fileName: removeSpace(fileName),
        metaInfo: {},
        _version: payload._version,
      };
  }
};

/**
 * This is parser for request API body insurance data
 * @param {*} postBody
 * @param {*} payload
 * @returns
 */
const buildInsurancePostBody = (postBody = {}, payload = {}) => {
  const subscriberData = payload.subscriberData;
  const subscriberDob = subscriberData.dob
    ? new moment(subscriberData.dob).format("MM/DD/YYYY")
    : null;

  const payloadPlanData = payload.plan;

  const frontCardData = payload.frontCard;
  const backCardData = payload.backCard;

  return {
    _version: postBody._version,
    insuranceType: "VISION",
    group: payload.groupID,
    isPatientSubscriber: payload.isSubscriber === "Yes",
    priority: payload.priority,
    subscriberRelation:
      RELATIONSHIP_LIST.findIndex((v) => v === subscriberData.relationship) +
        1 || 4,
    payer: {
      _id: payload.provider.id,
    },
    plan: {
      _id: payloadPlanData._id || payloadPlanData.id,
    },
    planAddress: payloadPlanData.address || postBody.planAddress,
    planCity: payloadPlanData.city || postBody.planCity,
    planState: payloadPlanData.state || postBody.planState,
    planZip: payloadPlanData.zip || postBody.planZip,
    planName: payloadPlanData.name || postBody.planName,
    planPhone: payloadPlanData.phone1 || postBody.planPhone,
    subscriber: {
      firstName: subscriberData.firstName,
      lastName: subscriberData.lastName,
      dob: subscriberDob, // MM/DD/YYYY,
    },
    insuranceId: payload.memberID,
    digitalAssets: {
      master_front: frontCardData?.uid
        ? payload.frontCard
        : buildDigitalAssetObject(payload.frontCard, "insurance"),
      master_back: backCardData?.uid
        ? payload.backCard
        : buildDigitalAssetObject(payload.backCard, "insurance"),
    },
  };
};

const buildContactBody = (postBody, payload) => {
  const isEmailChanged = !postBody.contactInformation.emails.find(
    (v) => v.email === payload.email
  );
  const isPhoneChanged = !postBody.contactInformation.phones.find(
    (v) => v.number === payload.mobile
  );
  const returnedBody = {
    id: postBody._id,
    preferredCommunication: payload.preferredCommunication,
  };

  if (isEmailChanged) returnedBody.email = payload.email;
  if (isPhoneChanged) returnedBody.phone = payload.mobile;

  if (!isEmailChanged && !isPhoneChanged) return null;
  return returnedBody;
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ patientId }) => {
    const api = new Api();
    return api.getResponse(`/ecp/patient/getPatient/${patientId}`, null, "get");
  }
);

const updatePhotonUserDB = async ({ api, contactBody }) => {
  return api.getResponse(
    `/ecp/patient/editPatientsContactInfo`,
    contactBody,
    "post",
    false
  );
};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ patientId, payload }) => {
    const api = new Api();
    try {
      // get the userData first, just to make sure
      const res = await api.getResponse(
        `/ecp/patient/getPatient/${patientId}`,
        null,
        "get"
      );

      // need an update to user's Photon Database
      const contactBody = buildContactBody(res, payload);
      if (contactBody) {
        updatePhotonUserDB({ api, contactBody });
      }

      // apply changes from our side with response body from "res" and do a PUT request to ECP endpoint
      const postBody = buildProfilePostBody(res, payload);
      const response = await api.getResponse(
        `/ecp/patient/editPatient/${patientId}`,
        postBody,
        "put"
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
  async ({ patientId }) => {
    const api = new Api();
    url = `/ecp/insurance/beneficiaries/${patientId}/coverages`;
    return api.getResponse(url, null, "get");
  }
);

export const updateInsurance = createAsyncThunk(
  "user/updateInsurance",
  async ({ payload, patientId, coverageId }, { getState }) => {
    const api = new Api();
    const state = getState();
    const foundIndex = state.user.rawUserInsuranceData.findIndex(
      (v) => v._id === coverageId
    );
    try {
      const postBody = buildInsurancePostBody(
        state.user.rawUserInsuranceData[foundIndex],
        payload
      );
      const response = await api.getResponse(
        `/ecp/insurance/beneficiaries/${patientId}/coverages/${coverageId}`,
        postBody,
        "put"
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
  async ({ payload, patientId }) => {
    const api = new Api();
    try {
      const postBody = buildInsurancePostBody(
        {
          insuranceType: "VISION",
        },
        payload
      );
      const response = await api.getResponse(
        `/ecp/insurance/beneficiaries/${patientId}/coverages/`,
        postBody,
        "post"
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

export const deleteInsurance = createAsyncThunk(
  "user/deleteInsurance",
  async ({ patientId, coverageId }) => {
    const api = new Api();
    url = `/ecp/insurance/beneficiaries/${patientId}/coverages`;

    try {
      const response = await api.getResponse(
        url,
        {
          op: "replace",
          path: "/archive",
          value: [
            {
              _id: coverageId,
              archive: true,
            },
          ],
        },
        "patch"
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

const getUserPreferredCommunication = (payload) => {
  if (payload.contactInformation?.contactPreferenceDetail) {
    if (payload.contactInformation.contactPreferenceDetail.phone) {
      if (payload.contactInformation.contactPreferenceDetail.email) {
        return "both";
      } else {
        return "phone";
      }
    } else return "email";
  }
  return "";
};

/**
 * This is parser for user data to be populated in browser view
 * @param {*} payload
 * @returns
 */
const buildUserData = (payload) => {
  const userAddress = payload.address?.length > 0 ? payload.address[0] : {};
  const patientDetails = payload.patientDetails || {};

  let userPreferredCommunication = getUserPreferredCommunication(payload);

  return {
    firstName: payload.firstName,
    lastName: payload.lastName,
    name: `${payload.firstName} ${payload.lastName}`,
    preferredName: payload.nickName,
    profilePhoto: patientDetails.profilePhoto?.digitalAsset,
    issuedCardFront: patientDetails.stateIssuedId?.digitalAsset,
    issuedCardBack: patientDetails.stateIssuedIdBack?.digitalAsset,
    dob: payload.dob,
    title: TITLE_LIST[payload.title - 1],
    ssn: formatSocialSecurity(payload.ssn),
    email:
      payload.contactInformation?.emails?.length > 0
        ? payload.contactInformation.emails[0].email
        : "",
    mobile:
      payload.contactInformation?.phones?.length > 0
        ? payload.contactInformation.phones[0].number
        : "",
    address: userAddress.addressLine1,
    city: userAddress.city,
    state: userAddress.state,
    zip: userAddress.zip,
    preferredCommunication: userPreferredCommunication,
    age: payload.age,
    gender: GENDER_LIST[payload.sex - 1],
  };
};

const DEFAULT_USER_DATA = {
  firstName: "",
  lastName: "",
  name: "",
  preferredName: "",
  profilePhoto: null,
  issuedCardFront: null,
  issuedCardBack: null,
  dob: null,
  title: "",
  ssn: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  preferredCommunication: "",
  age: "",
  gender: "",
  relationship: "",
  insurancePriority: "",
  planName: "",
  subscriberMember: "",
  groupId: "",
  isSubscriber: "",
};

/**
 * This is parser for user insurance data to be populated in browser view
 * @param {*} payload
 * @returns
 */
const buildUserInsuranceData = (payload) => {
  const insurances = payload;
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
      memberID: insurance.insuranceId,
      groupID: insurance.group,
      isSubscriber: insurance.isPatientSubscriber ? "Yes" : "No",
      subscriberData: {
        firstName: subscriberData.firstName,
        lastName: subscriberData.lastName,
        dob: new Date(subscriberData.dob),
        relationship: RELATIONSHIP_LIST[insurance.subscriberRelation - 1],
      },
      priority: insurance.priority,
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
    resetUserData: (state) => {
      state.userData = DEFAULT_USER_DATA;
    },
    setUserData: (state, { payload }) => {
      state.userData = buildUserData(payload);
    },
    resetUserInsuranceData: (state) => {
      state.userInsuranceData = [];
    },
    setUserInsuranceData: (state, { payload }) => {
      state.userInsuranceData = payload;
    },
    setUserInsuranceDataById: (state, { payload }) => {
      const statePayload = state.rawUserInsuranceData.map((item) => {
        if (payload._id === item._id) {
          item = payload;
        }
        return item;
      });
      state.userInsuranceData = buildUserInsuranceData(statePayload);
    },
    addUserInsuranceData: (state, { payload }) => {
      state.rawUserInsuranceData.push(payload);
      state.userInsuranceData = buildUserInsuranceData(
        state.rawUserInsuranceData
      );
    },
    removeUserInsuranceData: (state, { payload }) => {
      const foundIndex = state.userInsuranceData.findIndex(
        (v) => v.id === payload.id
      );
      const foundRawIndex = state.rawUserInsuranceData.findIndex(
        (v) => v._id === payload.id
      );
      state.userInsuranceData.splice(foundIndex, 1);
      state.rawUserInsuranceData.splice(foundRawIndex, 1);
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
      if (payload.response._id) {
        state.userData = buildUserData(payload.response);
        state.status = "success";
      }
    },
    // insurance
    [fetchInsurance.pending]: (state) => {
      state.status = "loading";
    },
    [fetchInsurance.fulfilled]: (state, { payload }) => {
      if (payload) {
        const entities = payload.entities.filter((v) => !v.archive);
        state.rawUserInsuranceData = entities;
        state.userInsuranceData = buildUserInsuranceData(entities);
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
