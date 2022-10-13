import { faker } from "@faker-js/faker";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { Api } from "../pages/api/api";

const DEFAULT_PROVIDER_INFO_DATA = {
  providerId: 0,
  name: null,
  address: null,
  rating: null,
  phoneNumber: null,
  distance: null,
  image: null,
  from: null,
  to: null,
  location: {
    latitude: 0,
    longitude: 0,
  },
};

export const DEFAULT_PATIENT_INFO_DATA = {
  id: 0,
  name: null,
  firstName: "",
  lastName: "",
  dob: null,
  phoneNumber: null,

  email: "",
  password: "",
  preferredCommunication: "both",
};

const DEFAULT_APPOINTMENT_INFO_DATA = {
  appointmentType: null,
  date: null,
  insuranceCarrier: null,
};

const DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA = {
  providerInfo: DEFAULT_PROVIDER_INFO_DATA,
  patientInfo: DEFAULT_PATIENT_INFO_DATA,
  appointmentInfo: DEFAULT_APPOINTMENT_INFO_DATA,
};

const DEFAULT_FILTER_DATA = {
  date: new Date(),
  location: "",
  insuranceCarrier: "",
  purposeOfVisit: "",
};

// parser
/**
 * This is parser for appointment data to be populated in browser view
 * @param {*} payload
 */
const buildAppointmentData = (payload) => {
  const providerData = payload.provider || {};
  const patientData = payload.patient || {};
  return {
    providerInfo: providerData,
    patientInfo: patientData,
    appointmentInfo: {
      appointmentType: payload.appointmentType?.code || null,
      date: new Date(`${payload.appointmentDate} ${payload.appointmentTime}`),
      insuranceCarrier: payload.insurancePayers,
      id: payload._id,
      providerTemplate: payload.providerTemplate,
      office: payload.office,
    },
  };
};

/**
 * This is parser for request API body appointment data
 * @param {*} payload
 */
const buildAppointmentPostBody = (payload) => {
  console.log("app post body", { payload });
  const patientInfoData = payload.patientInfo;
  const providerInfoData = payload.providerInfo;
  const appointmentInfoData = payload.appointmentInfo;
  const appointmentDate = new moment(appointmentInfoData.date);
  const today = new moment();
  return {
    appointmentDate: appointmentDate.format("MM/DD/YYYY"),
    appointmentLength: 1,
    appointmentRescheduleDetails: {
      reason: "reschedule",
    },
    appointmentTime: appointmentDate.format("hh:mm"),
    appointmentType: {
      code: appointmentInfoData.appointmentType,
    },
    confirmationDetail: {
      confirmationBy: patientInfoData._id,
      confirmationDate: today.format("MM/DD/YYYY"),
      confirmationTime: today.format("hh:mm"),
    },
    appointmentLength: 1,
    office: {
      _id: appointmentInfoData.office?.id || null,
    },
    providerTemplate: {
      _id: appointmentInfoData.providerTemplate?._id || null,
    },
    provider: {
      _id: providerInfoData._id,
    },
    patient: {
      _id: patientInfoData._id,
    },
    patientDob: patientInfoData.dob,
    allowCreate: true,
  };
};

// async-thunk(s)
export const fetchAppointmentById = createAsyncThunk(
  "appointment/fetchAppointmentById",
  async ({ appointmentId }) => {
    const api = new Api();
    return api.getResponse(`/ecp/appointments/${appointmentId}`, null, "get");
  }
);

export const rescheduleAppointment = createAsyncThunk(
  "appointment/rescheduleAppointment",
  async ({ appointmentId, payload }) => {
    const api = new Api();
    try {
      const postBody = buildAppointmentPostBody(payload);
      console.log("postbody to be sent to API", postBody);
      const response = await api.getResponse(
        `/ecp/appointments/reschedule/${appointmentId}`,
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

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointmentSchedule: DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA,
    filterData: DEFAULT_FILTER_DATA,
    isFilterApplied: false,
    providerListData: [],
    filterBy: [],
    activeFilterBy: [],
  },
  reducers: {
    setAppointmentSchedule: (state, { payload }) => {
      state.appointmentSchedule = buildAppointmentData(payload);
    },
    resetAppointmentSchedule: (state) => {
      state.appointmentSchedule = DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA;
      state.isFilterApplied = false;
      state.providerListData = [];
      state.activeFilterBy = [];
    },
    editAppointmentScheduleData: (state, { payload }) => {
      state.appointmentSchedule[payload.key] = payload.value;
    },
    setDummyAppointmentSchedule: (state) => {
      state.appointmentSchedule = {
        providerInfo: {
          providerId: 0,
          name: "Dr. Sonha Nguyen",
          address: {
            addressLine1: "673 Herzog Locks", // faker.address.streetAddress(),
            addressLine2: "Suite 300", // faker.address.secondaryAddress(),
            city: "New York", // faker.address.city(),
            state: "NY", // faker.address.stateAbbr(),
            zipcode: "53891", // faker.address.zipCode("#####"),
          },
          rating: 5, //faker.helpers.arrayElement[(1, 2, 3, 4, 5)],
          phoneNumber: "(123) 123-4567", // faker.phone.number("(###) ###-####"),
          distance: "10 mi",
          image: faker.image.imageUrl(275, 173),
          from: new Date(),
          to: new Date(),
          location: {
            latitude: 41.881832, // faker.address.latitude(),
            longitude: -87.623177, // faker.address.longitude(),
          },
        },
        patientInfo: DEFAULT_PATIENT_INFO_DATA,
        appointmentInfo: {
          appointmentType: "Eye Exam",
          date: "2022-08-29T11:12:55.367Z",
          insuranceCarrier: "RSUD",
        },
      };
    },
    setFilterData: (state, { payload }) => {
      state.filterData = payload;
      state.appointmentSchedule.appointmentInfo = {
        ...state.appointmentSchedule.appointmentInfo,
        appointmentType: payload.purposeOfVisit,
        insuranceCarrier: payload.insuranceCarrier,
      };
    },
    resetFilterData: (state) => {
      state.filterData = DEFAULT_FILTER_DATA;
    },
    setIsFilterApplied: (state, { payload }) => {
      state.isFilterApplied = payload;
    },
    setProviderListData: (state, { payload }) => {
      state.providerListData = payload;
    },
    setActiveFilterBy: (state, { payload }) => {
      state.activeFilterBy = payload;
    },
    setFilterBy: (state, { payload }) => {
      state.filterBy = payload;
    },
  },
  extraReducers: {
    // fetchAppointmentById
    [fetchAppointmentById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAppointmentById.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.appointmentSchedule = buildAppointmentData(payload);
      }
      state.status = "success";
    },
    [fetchAppointmentById.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAppointmentSchedule,
  resetAppointmentSchedule,
  editAppointmentScheduleData,
  setDummyAppointmentSchedule,
  setFilterData,
  resetFilterData,
  setIsFilterApplied,
  setProviderListData,
  setActiveFilterBy,
  setFilterBy,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
