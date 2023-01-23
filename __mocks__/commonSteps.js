import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../src/pages/patient/login";
import "@testing-library/jest-dom";
import store from "../src/store/store";
import { TEST_ID } from "../src/utils/constants";
import ForgotPasswordPage from "../src/pages/patient/forgot-password";
import MessagingPage from "../src/pages/patient/messaging";
import * as AppointmentPage from "../src/pages/patient/appointment/index";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from "css-mediaquery";
import FilterResult from "../src/components/molecules/FilterResult/filterResult";
import Appointments from "../src/pages/patient/appointments";
import ScheduleAppointment from "../src/pages/patient/schedule-appointment/index";
import PayMyBillPage from "../src/pages/patient/pay-my-bill/index";
import SummaryBillPage from "../src/pages/patient/pay-my-bill/summary-detail/[invoiceNumber]";
import HomePage, { getStaticProps } from "../src/pages/patient";
import Cookies from "universal-cookie";
import App from "../src/pages/_app";
import CreateAccountPage from "../src/pages/patient/auth/create-account";

import { renderWithProviders } from "../__tests__/src/utils/test-util";
import ShareModal from "../src/components/organisms/ShareModal/shareModal";
import { setOpenModal } from "../src/store/share";
import {
  mockAppointmentTypes,
  mockInsurance,
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
  submitFilter,
  upcomingResponse,
  MOCK_MESSAGING,
  MOCK_OPEN_INVOICES,
  MOCK_INVOICE_HISTORY,
  educationMaterials
} from "./mockResponse";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

const providerList = [
  {
    providerId: "1",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "2",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "3",
    name: "Paul Wagner Md",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
];

const mockSuggestion = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};

const mockSubmitFilter = {
  listOfProvider: [
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "2",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Nd",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "3",
      name: "Paul Wagner Md",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ],
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "Language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};
const mock = new MockAdapter(axios);

export function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}
export async function renderLogin() {
  let container;
  act(() => {
    container = renderWithProviders(<Login />);
  });
  await waitFor(() => container.getAllByTestId(TEST_ID.LOGIN_TEST_ID.loginBtn));
  return container;
}
export async function renderForgotPassword() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
      </Provider>
    );
  });
  await waitFor(() => container.getAllByLabelText(/usernamePlaceHolder/i));
  return container;
}
export async function clickContinueForgot(container, mock) {
  const expectedResult = {
    ResponseCode: 1000,
    ResponseType: "success",
    SecurityQuestions: [
      {
        "Where did you go the first time you flew on a plane?": "America",
        "Who is your all-time favorite movie character": "Peter",
        "In what city or town did your parents meet?": "Berlin",
      },
    ],

    PreferredComunication: "Both",
  };
  mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
  act(() => {
    const button = container.getByTestId(TEST_ID.FORGOT_TEST_ID.continueBtn);
    fireEvent.click(button);
  });
  await waitFor(() => container.getByText("or"));
  return container;
}

export async function renderScheduleAppointment(mock) {
  let container;
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  window.matchMedia = createMatchMedia("1920px");

  mock
    .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
    .reply(200, mockAppointmentTypes);
  mock
    .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
    .reply(200, mockInsurance);
  mock
    .onPut("/ecp/appointments/available-slot?searchText=Texas")
    .reply(200, submitFilter);
  const Appointment = AppointmentPage.default;
  const server = await AppointmentPage.getStaticProps();
  act(() => {
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });
  await waitFor(() => container.getByText("Purpose of Visit"));
  expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  return { ...container, mock };
}

export async function renderResultsScreen() {
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
  let container;
  container = render(
    <FilterResult
      isDesktop={true}
      providerList={providerList}
      rangeDate={rangeDate}
      purposeOfVisitData={[]}
      insuranceCarrierData={[]}
      googleApiKey={"Test"}
      filterData={{
        location: "",
        date: "",
        purposeOfVisit: "",
        insuranceCarrier: "",
      }}
    />
  );
  expect(
    await waitFor(() =>
      container.getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.FILTER_RESULT.container)[0]
    )
  ).toBeInTheDocument();
}

export async function renderAppointments() {
  let container;

  act(() => {
    container = render(
      <Provider store={store}>
        {Appointments.getLayout(<Appointments />)}
      </Provider>
    );
  });
  await waitFor(() => {
    container.getAllByText(/Upcoming Appointments/i);
  });

  return container;
}

export async function renderAppointmentDetail() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointment.getLayout(<ScheduleAppointment />)}
      </Provider>
    );
  });
  expect(
    await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton
      )
    )
  ).toBeInTheDocument();
}

export async function navigateToPatientPortalHome(
  mockInstance,
  existingContainer
) {
  const mock = mockInstance || new MockAdapter(axios);
  mock.reset();
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
  Cookies.result = "true";
  mock
    .onPut("/ecp/appointments/available-slot?searchText=Texas")
    .reply(200, submitFilter);
  mock
    .onGet(`/ecp/appointments/appointment-types`)
    .reply(200, mockAppointmentTypes);
  const userData = JSON.parse(localStorage.getItem("userData"));
  mock
    .onGet(new RegExp(`/ecp/appointments/${userData?.patientId}/upcoming`))
    .reply(200, upcomingResponse);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}`)
    .reply(200, prescriptionMedication);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}/getGlassesData`)
    .reply(200, prescriptionGlasses);
  mock
    .onGet(`/ecp/prescriptions/patient/${userData?.patientId}/getContactsData`)
    .reply(200, prescriptionContact);
  mock
    .onGet(
      `/ecp/patient/getPatientDocumentByCategory/${userData?.patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=EducationMaterials))`
    )
    .reply(200, educationMaterials);

  let container = existingContainer || null;
  const props = await getStaticProps();
  act(() => {
    container = render(
      <Provider store={store}>
        {HomePage.getLayout(<HomePage {...props} />)}
      </Provider>
    );
  });
  await waitFor(() => container.getAllByText(/Prescriptions/i));
  return { ...container, mock };
}

export async function landOnCreateAccountPage() {
  let container;
  act(() => {
    container = render(
      <Provider store={store}>
        {CreateAccountPage.getLayout(<CreateAccountPage />)}
      </Provider>
    );
  });
  await waitFor(() =>
    container.getByTestId(TEST_ID.REGISTER_TEST_ID.firstname)
  );
  return container;
}

export async function doLogin(mock, container) {
  const expectedResult = {
    ResponseCode: 2000,
    ResponseType: "success",
    userType: "patient",
  };
  mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  const usernameField = container.getByLabelText(/emailUserLabel/i);
  const passwordField = container.getByLabelText(/passwordLabel/i);
  fireEvent.change(usernameField, {
    target: { value: "patient1@email.com" },
  });
  fireEvent.change(passwordField, { target: { value: "Admin@123" } });
  expect(usernameField.value).toEqual("patient1@email.com");
  expect(passwordField.value).toEqual("Admin@123");
}
export const provideFilters = (container) => {
  inputLocation(container);
  inputPurpose(container);
};

export const inputLocation = async (container) => {
  await waitFor(() => container.getByLabelText("City, state, or zip code"));
  const locationInput = container.getByLabelText("City, state, or zip code");
  act(() => {
    fireEvent.change(locationInput, { target: { value: "Texas" } });
  });
};

export const inputPurpose = async (container) => {
  await waitFor(() => container.getByTestId("select-purposes-of-visit"));
  const purposeInput = container.getByTestId("select-purposes-of-visit");
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Clinical_Diagnosis" } });
  });
};
export const clickSearch = async (container) => {
  await waitFor(() =>
    container.getByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
  );
  const searchBtn = container.getByTestId(
    TEST_ID.APPOINTMENT_TEST_ID.searchbtn
  );
  fireEvent.click(searchBtn);
};

const mockMessagingReal = {
  count: 1,
  entities: [
    {
      unRead: true, // hardcoded unread msg
      subject: " reverse new P2p capture receiver",
      bodyNote: "patient to patient body",
      digitalAssets: [
        {
          name: "Work From Office Guidelines22.pdf",
          _id: "ddaaba8f-4730-4b60-b87d-1d23905fa6e4",
        },
      ],
      messageStatus: "SENT",
      priority: "HIGH",
      deliveryDate: "Wed Nov 02 2022 03:06 AM",
      messageReceipients: [
        {
          isNew: false,
          isDeleted: false,
          isStar: false,
          recipientType: "SENDER",
          senderPatientId: "cdd6587b-b7af-4ef4-848d-214b957b9699",
        },
        {
          isNew: true,
          isDeleted: false,
          isStar: false,
          recipientType: "TO",
          senderPatientId: "cdd6587b-b7af-4ef4-848d-214b957b9699",
        },
      ],
      senderIsPatient: true,
      senderIsProvider: false,
      senderPatientId: "cdd6587b-b7af-4ef4-848d-214b957b9699",
      receiverIsPatient: true,
      receiverPatientId: "cdd6587b-b7af-4ef4-848d-214b957b9699",
      status: "CREATED",
      _id: "3a1bf90e-c0f0-47a6-9ea8-89efc125ff02",
      _version: "14a6bfbc-e6c0-47e6-aef2-e8e6dfa4d545",
      _created: "Dec 12, 2022, 8:06:36 AM",
      _updated: "Dec 12, 2022, 8:06:36 AM",
      _createdBy: {
        _id: "2818ef11-208b-4f43-b471-06ad495381f1",
        _links: {
          self: {
            href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
          },
        },
      },
    },
  ],
  _links: {
    self: {
      href: "/message-task?pageNo=0&pageSize=10",
    },
  },
};

const mockViewMessageById = {
  subject: "Provider to Patient",
  bodyNote: "Provider to Patient Msg",
  digitalAssets: [
    {
      name: "Work From Office Guidelines22.pdf",
      _id: "ddaaba8f-4730-4b60-b87d-1d23905fa6e4",
    },
  ],
  messageStatus: "SENT",
  priority: "HIGH",
  deliveryDate: "Wed Nov 02 2022 03:19 AM",
  messageReceipients: [
    {
      isNew: false,
      isDeleted: false,
      isStar: false,
      recipientUid: "833da4c6-dc6a-4a7b-9413-51431a599f2d",
      employee: {
        firstName: "SHULTZ M",
        lastName: "SABRINA",
        _id: "833da4c6-dc6a-4a7b-9413-51431a599f2d",
        designation: "Dr",
      },
      recipientType: "SENDER",
    },
    {
      isNew: true,
      isDeleted: false,
      isStar: false,
      recipientType: "TO",
      senderProviderId: "816260b9-9bb6-4552-aaef-ba037378861c",
    },
  ],
  senderIsPatient: false,
  senderIsProvider: false,
  sentBy: {
    designation: "Dr",
    firstName: "SHULTZ M",
    lastName: "SABRINA",
    _id: "833da4c6-dc6a-4a7b-9413-51431a599f2d",
  },
  sources: [],
  senderProviderId: "833da4c6-dc6a-4a7b-9413-51431a599f2d",
  receiverIsPatient: false,
  status: "CREATED",
  _id: "be072f9f-da68-456c-a6bd-9a1f8e8a5d3d",
  _version: "0eff64c5-9071-4df6-9e71-ccd35f4dbae4",
  _created: "Nov 21, 2022, 8:19:28 AM",
  _updated: "Nov 21, 2022, 8:19:28 AM",
  _createdBy: {
    _id: "2818ef11-208b-4f43-b471-06ad495381f1",
    _links: {
      self: {
        href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
      },
    },
  },
};

export async function renderMessagePage(mockInstance) {
  let container;
  const domain = window.location.origin;
  const mock = mockInstance || new MockAdapter(axios);
  const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
  mock
    .onGet(
      `/ecp/messages/getInbox?search.query=((messageReceipients.recipientType=eq=TO)(messageStatus=eq=SENT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`
    )
    .reply(200, mockMessagingReal);
  mock
    .onGet(
      `/ecp/messages/getOutbox?search.query=((messageReceipients.recipientType=eq=SENDER)(messageStatus=eq=SENT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`
    )
    .reply(200, mockMessagingReal);
  mock
    .onGet(
      `/ecp/messages/getInbox?search.query=((messageReceipients.recipientType=eq=TO)(messageStatus=eq=DRAFT)(messageReceipients.isDeleted=eq=false))&sessionUserId=${patientId}`
    )
    .reply(200, mockMessagingReal);
  mock
    .onGet(`${domain}/api/dummy/messaging/getProviderList`)
    .reply(200, providerList);
  mock
    .onGet(
      `/ecp/messages/viewMessageById/be072f9f-da68-456c-a6bd-9a1f8e8a5d3d?sessionUserId=${patientId}`
    )
    .reply(200, mockViewMessageById);
  mock.onGet("/");

  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <MessagingPage />
      </Provider>
    );
  });
  await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
  await waitFor(() => container.getAllByText(/filterByText/i)[0]);
  await waitFor(() => container.getByTestId("inbox-tab"));

  const inboxTab = container.getByTestId("inbox-tab");
  expect(inboxTab).toBeInTheDocument();
  expect(container.getByTestId("inbox-tab")).toBeInTheDocument();
  expect(container.getByTestId("sent-tab")).toBeInTheDocument();
  expect(container.getByTestId("draft-tab")).toBeInTheDocument();
  expect(container.getByTestId("deleted-tab")).toBeInTheDocument();

  await waitFor(() => {
    container.getByTestId("message-content-view");
  });

  await waitFor(() => {
    container.getByTestId("message-list-container");
  });

  await waitFor(() => {
    container.getByTestId("message-content-view");
  });

  await waitFor(() => {
    container.getByTestId("message-list-container");
  });

  await waitFor(() => container.getByText("titleNoSelectedMessage"));
  await waitFor(() => container.getByText("newMessage"));

  const newMessageButton = container.getByRole("button", {
    name: /newMessage/i,
  });
  expect(newMessageButton).toBeInTheDocument();

  return container;
}

export async function renderShareModal() {
  let container;

  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <ShareModal />
      </Provider>
    );
  });
  store.dispatch(setOpenModal(true));

  const securityInfo = container.getByText(
    /Securely Transmit Your Information/i
  );
  expect(securityInfo).toBeInTheDocument();
  await waitFor(() => container.getByText(/Share my/i));
  expect(container.getByText(/Share my/i)).toBeInTheDocument();

  return container;
}

export const defaultValidation = () => {
  expect(true).toBeTruthy();
};

export const expectPushRouter = (expectedPath) => {
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockReturnValue({
    back: jest.fn(),
    asPath: "/patient",
    push: (path) => {
      expect(path).toEqual(expectedPath);
    },
    query: { assetId: "6376481f-e317-4e44-a852-5e0395446140" },
    replace: jest.fn(),
    prefetch: jest.fn(),
  });
};

export async function navigateToPayMyBill() {
  const domain = window.location.origin;
  const mock = new MockAdapter(axios);
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const mockRouter = {
    back: jest.fn(),
    query: { 
      username: "patient1@gmail.com",
      activeTab: 0 
    },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/set-password",
    asPath: "/patient/set-password?username=patient1@gmail.com",
  };

  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockReturnValue({
    ...mockRouter
  }
  );
  mock
    .onGet(
      `/ecp/billingsystem/getInvoiceWithPatientDetails?search.query=((patient.firstName=eq=${userProfile.firstName})AND(patient.lastName=eq=${userProfile.lastName})AND(patient.dob=eq=${userProfile.dob}))`
    )
    .reply(200, MOCK_OPEN_INVOICES);
  let container;
  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <PayMyBillPage />
      </Provider>
    );
  });
  await waitFor(() => container.getByText("makePayment"));
  // await waitFor(() => container.getByText("tab-open-invoices"));
  // await waitFor(() => container.getByText("tab-invoice-history"));
  // fireEvent.click(container.getByTestId("tab-open-invoices"));
  // await waitFor(() => container.getByText("notOpenInvoices"));
  // fireEvent.click(container.getByTestId("tab-invoice-history"));
  // await waitFor(() => container.getByText("notInvoicesHistory"));

  // await waitFor(() => container.getAllByText("viewDetails")[0]);
  // await waitFor(() => container.getAllByTestId("download-open-invoice")[0]);
  // await waitFor(() => container.getAllByTestId("print-open-invoice")[0]);
  return container;
}

export async function navigateToSummaryDetail(mock) {
  const domain = window.location.origin;
  const expectedResult = {
    invoiceNumber: "124345456",
    dos: "Oct 17, 2022, 4:31:42 PM",
    balanceDue: 75,
    totalCharge: 227.5,
    totalAllowed: 239.5,
    insurancePaid: 174.5,
    patientPaid: 302.2,
    description: "Service, Frame, Misc",
    providerName: "John Chenaa",
  };
  mock
    .onGet(`${domain}/api/dummy/payMyBill/getSummaryBill?id=124345456`)
    .reply(200, expectedResult);

  let container;
  window.matchMedia = createMatchMedia("1920px");
  act(() => {
    container = render(
      <Provider store={store}>
        <SummaryBillPage />)
      </Provider>
    );
  });
  await waitFor(() => container.getByText("backToBillPage"));
  return container;
}
