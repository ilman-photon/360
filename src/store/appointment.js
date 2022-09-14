import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

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

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointmentSchedule: DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA,
    filterData: DEFAULT_FILTER_DATA,
    isFilterApplied: false,
    providerListData: [],
  },
  reducers: {
    setAppointmentSchedule: (state, { payload }) => {
      state.appointmentSchedule = payload;
    },
    resetAppointmentSchedule: (state) => {
      state.appointmentSchedule = DEFAULT_USER_SCHEDULE_APPOINTMENT_DATA;
      state.isFilterApplied = false;
      state.providerListData = [];
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
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
